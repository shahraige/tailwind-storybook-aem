package com.glpg.clinicaltrials.core.models.config;

import org.osgi.service.metatype.annotations.AttributeDefinition;
import org.osgi.service.metatype.annotations.ObjectClassDefinition;

@ObjectClassDefinition(name = "GLPG Clinical Trials - Application Configuration", description = "GLPG Clinical Trials - Application Configuration")
public @interface AppConfig {
    @AttributeDefinition(name = "CIAM application name", description="CIAM application name")
    String glpg_hcpportal_appName();

    @AttributeDefinition(name = "Login user", description="AEM login user.")
    String glpg_hcpportal_loginUser();

    @AttributeDefinition(name = "GLPG Clinical Trials base url",  description="GLPG Clinical Trials base url")
    String glpg_hcpportal_piapBaseUrl();

    @AttributeDefinition(name = "GLPG Clinical Trials api endpoint", description="GLPG Clinical Trials api endpoint.")
    String glpg_hcpportal_piapApiEndpoint();

    @AttributeDefinition(name = "GLPG Clinical Trials environment name", description="GLPG Clinical Trials environment name.")
    String glpg_hcpportal_piapEnvName();
}