package com.glpg.clinicaltrials.core.servlets;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.glpg.clinicaltrials.core.models.ServerResponse;
import com.glpg.clinicaltrials.core.models.cdp.commonModels.ZipValidation;
import com.glpg.clinicaltrials.core.services.AppConfigurationService;
import com.glpg.clinicaltrials.core.services.CdpTokenService;
import com.glpg.clinicaltrials.core.utils.RequestBodyParamBuilder;
import com.glpg.clinicaltrials.core.utils.RestClient;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
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
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.glpg.clinicaltrials.core.utils.StaticTextConfig.*;

@Component(service = Servlet.class,
        property = {
                Constants.SERVICE_DESCRIPTION + "=Medical Condition Servlet",
                ServletResolverConstants.SLING_SERVLET_METHODS + "=" + HttpConstants.METHOD_GET,
                ServletResolverConstants.SLING_SERVLET_PATHS + "=" + "/bin/public/glpg-clinicaltrials/common-data",
                ServletResolverConstants.SLING_SERVLET_EXTENSIONS + "=html",
                ServletResolverConstants.SLING_SERVLET_SELECTORS + "=" + "conditions" + "," + "countries" + "," + "zips"
        }
)
public class CommonDataServlet extends SlingAllMethodsServlet {
    
    protected static final Logger log = LoggerFactory.getLogger(CommonDataServlet.class);

    @Reference private transient AppConfigurationService appConfigurationService;
    @Reference private transient CdpTokenService cdpTokenService;
    @Reference private transient RestClient restClient;

    @Override
    protected void doGet(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
        String responseData = "";
        try {
            String selector = request.getRequestPathInfo().getSelectorString();
            String dataEndPoint = selector.equals("conditions") ? MEDICAL_CONDITION_ENDPOINT : COUNTRIES_ENDPOINT;

            String resourcePath = request.getParameter("resourcePath");
            String queryUrl = appConfigurationService.getCiamApiEndpoint() + dataEndPoint;

            if (resourcePath != null) {
                ServerResponse serverResponse = restClient.getJson(queryUrl, cdpTokenService.getAuthToken(resourcePath));
                int httpStatusCode = serverResponse.getHttpStatusCode();
                String responseString = serverResponse.getResponseString();

                if (httpStatusCode == HttpServletResponse.SC_OK) {
                    responseData = responseString;
                } else {
                    response.setStatus(response.SC_NO_CONTENT);
                    log.info("Medical Condition Servlet: { statusCode } :" + httpStatusCode + " : { response } : " + responseString );
                }
            } else {
                response.setStatus(response.SC_BAD_REQUEST);
                log.info("Medical Condition Servlet: ------ request parameter missing.");
            }
        } catch (IOException ex) {
            response.setStatus(response.SC_INTERNAL_SERVER_ERROR);
            log.error("Medical Condition Servlet: {} : {}: " , ex.getClass(), ex.getMessage());
        }

        response.getWriter().write(responseData);
    }

    @Override
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws ServletException, IOException {
        String responseData = "";
        try {
            ZipValidation paramObject = new RequestBodyParamBuilder<ZipValidation>().getParamObject(request, ZipValidation.class);
            String resourcePath = request.getParameter("resourcePath");
            String queryUrl = appConfigurationService.getCiamApiEndpoint() + ZIP_VALIDATE_ENDPOINT;

            ObjectMapper mapper = new ObjectMapper().disable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
            String reqBody = mapper.writeValueAsString(paramObject);

            if (resourcePath != null) {
                ServerResponse serverResponse = restClient.postJson(queryUrl, reqBody, cdpTokenService.getAuthToken(resourcePath));
                int httpStatusCode = serverResponse.getHttpStatusCode();
                String responseString = serverResponse.getResponseString();

                if (httpStatusCode == HttpServletResponse.SC_OK) {
                    responseData = responseString;
                } else {
                    response.setStatus(response.SC_NO_CONTENT);
                    log.info("Medical Condition Servlet: { statusCode } :" + httpStatusCode + " : { response } : " + responseString );
                }
            } else {
                response.setStatus(response.SC_BAD_REQUEST);
                log.info("Medical Condition Servlet: ------ request parameter missing.");
            }
        } catch (IOException ex) {
            response.setStatus(response.SC_INTERNAL_SERVER_ERROR);
            log.error("Medical Condition Servlet: {} : {}: " , ex.getClass(), ex.getMessage());
        }

        response.getWriter().write(responseData);
    }
}
