package com.glpg.clinicaltrials.core.components.use;

import com.adobe.cq.sightly.WCMUsePojo;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.glpg.clinicaltrials.core.models.CiamResponseModel;
import com.glpg.clinicaltrials.core.models.ClinicalTrialModel;
import com.glpg.clinicaltrials.core.models.ServerResponse;
import com.glpg.clinicaltrials.core.services.AppConfigurationService;
import com.glpg.clinicaltrials.core.services.CdpTokenService;
import com.glpg.clinicaltrials.core.utils.RestClient;
import org.apache.sling.api.SlingHttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


public class SearchDetailsUse extends WCMUsePojo {

    private RestClient restClient;
    private CdpTokenService cdpTokenService;
    private AppConfigurationService appConfigurationService;
    private SlingHttpServletResponse response;

    private String errorMessage;
    private boolean hasError = false;

    private ClinicalTrialModel clinicalTrialModel;

    Logger logger = LoggerFactory.getLogger(SearchDetailsUse.class);

    @Override
    public void activate() throws Exception {
        response = getResponse();
        String id = getRequest().getParameter("id");
        restClient = getSlingScriptHelper().getService(RestClient.class);
        cdpTokenService = getSlingScriptHelper().getService(CdpTokenService.class);
        appConfigurationService = getSlingScriptHelper().getService(AppConfigurationService.class);
        String currentPagePath = getCurrentPage().getPath();
        String url = appConfigurationService.getCiamApiEndpoint() + "/clinical-trials/"+id;
        ServerResponse serverResponse = restClient.getJson(url,  cdpTokenService.getAuthToken(currentPagePath));

        if (serverResponse.httpStatusCode != 200) {
            hasError = true;
            errorMessage = "Failed to receive data from CDP";
            logger.error("Error: {}", errorMessage);
            return;
        }

        ObjectMapper mapper = new ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
        CiamResponseModel<ClinicalTrialModel> responseModel = mapper
                .readValue(String.valueOf(serverResponse.responseString), new TypeReference<CiamResponseModel<ClinicalTrialModel>>() {});
        if (!responseModel.getErrors().isEmpty()) {
            hasError = true;
            errorMessage = "Response returned from CDP with ERROR";
            logger.error("Error: {}", errorMessage);
            return;
        }
        clinicalTrialModel = responseModel.getData();
    }

    public ClinicalTrialModel getClinicalTrialModel() {
        return clinicalTrialModel;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public boolean isHasError() {
        return hasError;
    }

    public void setHasError(boolean hasError) {
        this.hasError = hasError;
    }
}
