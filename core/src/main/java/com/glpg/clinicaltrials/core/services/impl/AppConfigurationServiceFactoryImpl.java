package com.glpg.clinicaltrials.core.services.impl;

import com.glpg.clinicaltrials.core.services.AppConfigarationServiceFactory;
import com.glpg.clinicaltrials.core.services.AppConfigurationService;
import com.glpg.clinicaltrials.core.services.PathFormatterService;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.osgi.service.component.annotations.ReferenceCardinality;
import org.osgi.service.component.annotations.ReferencePolicy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component(service = AppConfigarationServiceFactory.class,immediate = true)
public class AppConfigurationServiceFactoryImpl implements AppConfigarationServiceFactory {

    private static final Logger log = LoggerFactory.getLogger(AppConfigurationServiceFactoryImpl.class);
    @Reference
    private transient PathFormatterService pathFormatterService;


    private Map<String, AppConfigurationService> appConfigurationServiceMap;

    @Reference(name = "appConfigurationService", cardinality = ReferenceCardinality.MULTIPLE, policy = ReferencePolicy.DYNAMIC)
    protected void bindAppConfigarationServiceFactory(final AppConfigurationService configuration) {
        if (this.appConfigurationServiceMap == null) {
            this.appConfigurationServiceMap = new HashMap<String, AppConfigurationService>();
        }

        this.appConfigurationServiceMap.put(configuration.getContentPath(), configuration);
    }

    protected void unbindAppConfigarationServiceFactory(final AppConfigurationService configuration) {
        this.appConfigurationServiceMap.remove(configuration.getContentPath());
    }

    @Override
    public AppConfigurationService getConfiguration(String name) {
        return appConfigurationServiceMap.get(name);
    }

    @Override
    public Collection<AppConfigurationService> getAllConfigurations() {
        return appConfigurationServiceMap.values();
    }

    @Override
    public boolean hasConfigurations() {
        return appConfigurationServiceMap.size() > 0;
    }

    @Override
    public AppConfigurationService getConfiguration(Resource resource) {
        try {
            getAllConfigurations().forEach(p -> log.info("###AppConfigurationService Info: {} -> {}", p.getContentPath(), p.getCiamBaseUrl()));
            String path = resource.getPath();
            String appPath=pathFormatterService.getPathByResourcePath(path);

            Optional<AppConfigurationService> appConfigurationService = getAllConfigurations().stream().filter(p -> !StringUtils.isEmpty(p.getContentPath()) && p.getContentPath().equals(appPath)).findFirst();

            if(appConfigurationService.isPresent()) {
                return appConfigurationService.get();
            }

            return null;

        } catch (RuntimeException ex) {
            log.error("error: {}", ex.getMessage(), ex);
        }
        return null;
    }

    @Override
    public AppConfigurationService getConfigurationByPath(String path) {

       // String[] paths = path.split("/");
        String appPath=pathFormatterService.getPathByResourcePath(path);

        try {
            getAllConfigurations().forEach(p -> log.info("{} -> {}", p.getContentPath(), p.getAppName()));

            Optional<AppConfigurationService> appConfigurationService = getAllConfigurations().stream().filter(p -> !StringUtils.isEmpty(p.getContentPath()) && p.getContentPath().equals(appPath)).findFirst();

            if(appConfigurationService.isPresent()) {
                return appConfigurationService.get();
            }

            return null;

        } catch (RuntimeException ex) {
            log.error("error: {}", ex.getMessage());
        }
        return null;
    }

    @Override
    public AppConfigurationService getConfigurationByAppName(String appName) {
        try {
            getAllConfigurations().forEach(p -> log.info("{} -> {}", p.getContentPath(), p.getAppName()));

            Optional<AppConfigurationService> appConfigurationService = getAllConfigurations().stream().filter(p -> !StringUtils.isEmpty(p.getAppName()) && appName.equalsIgnoreCase(p.getAppName())).findFirst();

            if(appConfigurationService.isPresent()) {
                return appConfigurationService.get();
            }

            return null;

        } catch (RuntimeException ex) {
            log.error("error: {}", ex.getMessage());
        }
        return null;
    }
}

