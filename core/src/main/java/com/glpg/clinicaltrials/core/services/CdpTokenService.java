package com.glpg.clinicaltrials.core.services;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.glpg.clinicaltrials.core.models.CiamResponseModel;
import com.glpg.clinicaltrials.core.models.ServerResponse;
import com.glpg.clinicaltrials.core.models.cdp.application.AppAuthenticationRequestModel;
import com.glpg.clinicaltrials.core.models.cdp.application.AppAuthenticationResponseModel;
import com.glpg.clinicaltrials.core.utils.RestClient;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Calendar;
import java.util.Date;

import static com.glpg.clinicaltrials.core.utils.StaticTextConfig.*;

@Component(service = com.glpg.clinicaltrials.core.services.CdpTokenService.class,
        property = {
                Constants.SERVICE_DESCRIPTION + "=GLPG HCPPortal CDP Token service"
        })
public class CdpTokenService {
    protected final Logger log = LoggerFactory.getLogger(this.getClass());
    private final String SESSION_TOKEN = "session_token";

    @Reference
    private CacheService cacheService;
    @Reference
    private AppConfigarationServiceFactory appConfigarationServiceFactory;
    @Reference
    private RestClient restClient;

    public Object generateAuthToken(String path) throws IOException {

        if(cacheService!=null){
            AppAuthenticationResponseModel appAuthenticationResponseModel = (AppAuthenticationResponseModel) cacheService.get().getIfPresent(SESSION_TOKEN);
            AppConfigurationService configurationByPath = appConfigarationServiceFactory.getConfigurationByPath(path);
            if (appAuthenticationResponseModel == null) {
                appAuthenticationResponseModel = fetchRefreshTokenFromCdp(configurationByPath);
                cacheService.get().put(SESSION_TOKEN, appAuthenticationResponseModel);
                return cacheService.get().getIfPresent(SESSION_TOKEN);

            } else {
                boolean isAccessTokenExpired = new Date().after(appAuthenticationResponseModel.getExpires_in());
                if (isAccessTokenExpired) {
                    appAuthenticationResponseModel = fetchAccessTokenFromCDP(configurationByPath);
                    cacheService.get().put(SESSION_TOKEN, appAuthenticationResponseModel);
                }
                return appAuthenticationResponseModel;
            }
        }
        return null;
    }
    public String getAuthToken(String path) throws IOException {
        AppAuthenticationResponseModel generateAuthToken =(AppAuthenticationResponseModel) generateAuthToken(path);
        return generateAuthToken.getAccess_token();
    }

    private AppAuthenticationResponseModel fetchAccessTokenFromCDP(AppConfigurationService appConfigurationService) throws IOException {
        AppAuthenticationRequestModel requestModel = new AppAuthenticationRequestModel();
        requestModel.setUsername(appConfigurationService.getCdpUsername());
        requestModel.setPassword(appConfigurationService.getCdpPassword());
        requestModel.setGrant_type(appConfigurationService.getGrantType());

        CiamResponseModel<AppAuthenticationResponseModel> responseModel = executeTokenRequest(requestModel, appConfigurationService);
        return responseModel.getData();
    }


    private AppAuthenticationResponseModel fetchRefreshTokenFromCdp(AppConfigurationService appConfigurationService) throws IOException {

        AppAuthenticationRequestModel requestModel = new AppAuthenticationRequestModel();
        requestModel.setUsername(appConfigurationService.getCdpUsername());
        requestModel.setPassword(appConfigurationService.getCdpPassword());
        requestModel.setGrant_type(appConfigurationService.getGrantType());

        CiamResponseModel<AppAuthenticationResponseModel> responseModel = executeTokenRequest(requestModel, appConfigurationService);
//        responseModel.setAccess_token_expire_date(getRedemptionPeriod(responseModel.getExpiresIn()));
        return responseModel.getData();
    }

    private CiamResponseModel<AppAuthenticationResponseModel> executeTokenRequest(AppAuthenticationRequestModel appAuthenticationRequestModel, AppConfigurationService appConfigurationService) throws IOException {
        ObjectMapper mapper = new ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        String reqBody = mapper.writeValueAsString(appAuthenticationRequestModel);
        String url = appConfigurationService.getCiamApiEndpoint() + APPLICATION_TOKEN;

        ServerResponse postJson = restClient.postJson(url, reqBody, null);

        return mapper.readValue(postJson.responseString, new TypeReference<CiamResponseModel<AppAuthenticationResponseModel>>() {});
    }

    private Date getRedemptionPeriod(String expireTime) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MILLISECOND, Integer.parseInt(expireTime.replaceAll("\\D", "")));
        return calendar.getTime();
    }
}
