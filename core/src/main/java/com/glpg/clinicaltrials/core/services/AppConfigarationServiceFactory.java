package com.glpg.clinicaltrials.core.services;

import java.util.Collection;

public interface AppConfigarationServiceFactory {
    AppConfigurationService getConfiguration(String name);

    Collection<AppConfigurationService> getAllConfigurations();

    boolean hasConfigurations();

    AppConfigurationService getConfiguration(org.apache.sling.api.resource.Resource resource);

    AppConfigurationService getConfigurationByPath(String path);

    AppConfigurationService getConfigurationByAppName(String appName);
}
