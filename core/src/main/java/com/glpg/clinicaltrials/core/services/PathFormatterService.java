package com.glpg.clinicaltrials.core.services;

import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Component(service = com.glpg.clinicaltrials.core.services.PathFormatterService.class,
        property = {
                Constants.SERVICE_DESCRIPTION + "=GLPG path format"
        })
public class PathFormatterService {
    protected final Logger log = LoggerFactory.getLogger(this.getClass());

    public String getPathByResourcePath(String resourcePath){

        String[] paths = resourcePath.split("/");

        return "/".concat(paths[1]).concat("/").concat(paths[2]);

    }

}
