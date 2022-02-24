package com.glpg.clinicaltrials.core.services.impl;


import com.glpg.clinicaltrials.core.models.config.AppConfig;
import com.glpg.clinicaltrials.core.services.AppConfigurationService;
import org.apache.sling.commons.osgi.PropertiesUtil;
import org.osgi.service.component.ComponentContext;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.ConfigurationPolicy;
import org.osgi.service.metatype.annotations.Designate;


@Component(service = AppConfigurationService.class, configurationPolicy = ConfigurationPolicy.REQUIRE)
@Designate(ocd = AppConfig.class)
public class AppConfigurationServiceImpl implements AppConfigurationService {

    public static final String GLPG_HCPPORTAL_APP_NAME = "glpg.clinicaltrial.appName";
    public static final String GLPG_HCPPORTAL_LOGIN_USER = "glpg.clinicaltrial.loginUser";
    public static final String CIAM_BASE_URL = "glpg.clinicaltrial.ciamBaseUrl";
    public static final String CIAM_API_URL = "glpg.clinicaltrial.ciamApiEndpoint";
    public static final String GLPG_CONTENT_PATH = "glpg.clinicaltrial.contentPath";
    public static final String GLPG_CDP_USERNAME = "glpg.clinicaltrial.cdpUsername";
    public static final String GLPG_CDP_PASS = "glpg.clinicaltrial.cdpPassword";

    private String appName;
    private String loginUser;
    private String ciamBaseUrl;
    private String ciamApiEndpoint;
    private String contentPath;
    private String cdpUsername;
    private String cdpPassword;


    @Activate
    public void activate(ComponentContext componentContext) {
        appName = PropertiesUtil.toString(componentContext.getProperties().get(GLPG_HCPPORTAL_APP_NAME), "");
        loginUser = PropertiesUtil.toString(componentContext.getProperties().get(GLPG_HCPPORTAL_LOGIN_USER), "");
        ciamBaseUrl = PropertiesUtil.toString(componentContext.getProperties().get(CIAM_BASE_URL), "");
        ciamApiEndpoint = ciamBaseUrl + PropertiesUtil.toString(componentContext.getProperties().get(CIAM_API_URL), "");
        contentPath = PropertiesUtil.toString(componentContext.getProperties().get(GLPG_CONTENT_PATH), "");
        cdpUsername = PropertiesUtil.toString(componentContext.getProperties().get(GLPG_CDP_USERNAME), "");
        cdpPassword = PropertiesUtil.toString(componentContext.getProperties().get(GLPG_CDP_PASS), "");
    }

    @Override
    public String getLoginUser() {
        return loginUser;
    }

    @Override
    public String getAppName() {
        return appName;
    }

    @Override
    public String getCiamBaseUrl() {
        return ciamBaseUrl;
    }

    @Override
    public String getCiamApiEndpoint() {
        return ciamApiEndpoint;
    }

    @Override
    public String getContentPath() {
        return contentPath;
    }

    @Override
    public String getCdpUsername() {
        return cdpUsername;
    }

    @Override
    public String getCdpPassword() {
        return cdpPassword;
    }
}