package com.glpg.clinicaltrials.core.services;

public interface AppConfigurationService {
    String getAppName();
    String getLoginUser();
    String getCiamBaseUrl();
    String getCiamApiEndpoint();
    String getContentPath();
    String getCdpUsername();
    String getCdpPassword();

    default String getGrantType() {
        return "password";
    }
}
