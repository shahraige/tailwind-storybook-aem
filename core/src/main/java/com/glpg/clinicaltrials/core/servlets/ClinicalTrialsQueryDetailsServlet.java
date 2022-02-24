package com.glpg.clinicaltrials.core.servlets;


import com.glpg.clinicaltrials.core.services.AppConfigarationServiceFactory;
import com.glpg.clinicaltrials.core.services.AppConfigurationService;
import com.glpg.clinicaltrials.core.services.CdpTokenService;
import com.glpg.clinicaltrials.core.utils.RestClient;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.servlets.HttpConstants;
import org.apache.sling.api.servlets.ServletResolverConstants;
import org.apache.sling.api.servlets.SlingAllMethodsServlet;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.Servlet;
import javax.servlet.ServletException;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@Component(service = Servlet.class,
        property = {
                Constants.SERVICE_DESCRIPTION + "=Clinical Trial Details Servlet",
                ServletResolverConstants.SLING_SERVLET_METHODS + "=" + HttpConstants.METHOD_POST,
                ServletResolverConstants.SLING_SERVLET_PATHS + "=/bin/public/glpg-clinicaltrial/get-trial-details"
        })
public class ClinicalTrialsQueryDetailsServlet extends SlingAllMethodsServlet {
    protected static final Logger log = LoggerFactory.getLogger(ClinicalTrialsQueryDetailsServlet.class);
    private static final String ERROR_MESSAGE = "Oops something went wrong, please try again\n";

    @Reference
    private transient AppConfigarationServiceFactory appConfigarationServiceFactory;
    @Reference
    private transient CdpTokenService cdpTokenService;
    @Reference
    private transient RestClient restClient;
    @Reference
    private transient AppConfigurationService appConfigurationService;

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        String currentPagePath = request.getParameter("pagePath");
        System.out.println(id);

        ValueMap valueMap = request.getResourceResolver().getResource(currentPagePath).getValueMap();
        String forwardPagePath = valueMap.get("detailsPageUrl", StringUtils.EMPTY);

        List<String> fruits = Arrays.asList("Apple", "Banana", "Lemon", "Papaya");
        request.setAttribute("items", fruits);
        request.setAttribute("count", 3);

        response.sendRedirect(forwardPagePath+".html?wcmmode=disabled");
    }
}
