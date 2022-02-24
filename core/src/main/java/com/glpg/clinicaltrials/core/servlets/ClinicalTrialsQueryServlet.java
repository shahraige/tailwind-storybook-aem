package com.glpg.clinicaltrials.core.servlets;


import com.glpg.clinicaltrials.core.models.ClinicalTrialsQueryModel;
import com.glpg.clinicaltrials.core.models.ServerResponse;
import com.glpg.clinicaltrials.core.services.AppConfigarationServiceFactory;
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
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Component(service = Servlet.class,
        property = {
                Constants.SERVICE_DESCRIPTION + "=Clinical Trial Query Servlet",
                ServletResolverConstants.SLING_SERVLET_METHODS + "=" + HttpConstants.METHOD_POST,
                ServletResolverConstants.SLING_SERVLET_PATHS + "=/bin/public/glpg-clinicaltrial/get-search-results"
        })
public class ClinicalTrialsQueryServlet extends SlingAllMethodsServlet {
    protected static final Logger log = LoggerFactory.getLogger(com.glpg.clinicaltrials.core.servlets.ClinicalTrialsQueryServlet.class);
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
    protected void doPost(SlingHttpServletRequest request, SlingHttpServletResponse response) throws IOException {
        String base_url = "https://clinicaltrials.gov/api/query/study_fields?expr=";
        String fields = "NCTId,BriefTitle,Condition,OverallStatus,Phase,MinimumAge,Gender,StudyType";
        String params = "&min_rnk=1&max_rnk=100&fmt=json";
        String responseFromApi = "";
        try {
            ClinicalTrialsQueryModel queryModel = new RequestBodyParamBuilder<ClinicalTrialsQueryModel>().getParamObject(request, ClinicalTrialsQueryModel.class);
            if (queryModel == null) {
                queryModel = new ClinicalTrialsQueryModel();
            }
            String expr = "/clinical-trials?";

            expr += (queryModel.getExpression() != null && !queryModel.getExpression().isEmpty())
                    ? "SearchTerm=" + queryModel.getExpression() + "&" : "";
            expr += "Status=";
            String status = "";
            for (String statusName : queryModel.getStudyStatus()) {
                status = status.concat(statusName).concat(",");
            }
            if (!status.isEmpty()) {
                status = status.substring(0, status.length()-1);
                expr = expr.concat(status).concat("&");
            } else {
                expr+="&";
            }

            expr += "Diseases=";
            String disease = "";
            for (String diseaseName : queryModel.getConditions()) {
                disease = disease.concat(URLEncoder.encode(diseaseName, StandardCharsets.UTF_8.toString())).concat(",");
            }
            if (!disease.isEmpty()) {
                disease = disease.substring(0, disease.length()-1);
                expr = expr.concat(disease).concat("&");
            } else {
                expr+="&";
            }

//            expr += "Location=";
//            expr += queryModel.getLocation() + "&";
//
//            expr += "Distance=";
//            expr += queryModel.getDistance() + "&";

            expr += "AgeRanges=";
            String ageRange = "";
            for (String age : queryModel.getAges()) {
                ageRange = ageRange.concat(age).concat(",");
            }
            if (!ageRange.isEmpty()) {
                ageRange = ageRange.substring(0, ageRange.length()-1);
                expr = expr.concat(ageRange).concat("&");
            } else {
                expr+="&";
            }

            expr += "Gender=";
            String gender = "";
            for (String genderName : queryModel.getGenders()) {
                gender = gender.concat(genderName).concat(",");
            }
            if (!gender.isEmpty()) {
                gender = gender.substring(0, gender.length()-1);
                expr = expr.concat(gender).concat("&");
            } else {
                expr+="&";
            }

            expr += "Phases=";
            String phase = "";
            for (String phaseName : queryModel.getPhases()) {
                phase = phase.concat(phaseName).concat(",");
            }
            if (!phase.isEmpty()) {
                phase = phase.substring(0, phase.length()-1);
                expr = expr.concat(phase).concat("&");
            } else {
                expr+="&";
            }

            expr += "page_number=" + queryModel.getPageNo() + "&";
            expr += "items_per_page=" + (queryModel.getItemPerPage() == null || queryModel.getItemPerPage().isEmpty()
                    ? 10 : queryModel.getItemPerPage());

            String encodedExpr = URLEncoder.encode(expr, StandardCharsets.UTF_8.toString());
            String encodedFields = URLEncoder.encode(fields, StandardCharsets.UTF_8.toString());
            String queryUrl = appConfigurationService.getCiamApiEndpoint() + expr;
            ServerResponse serverResponse = restClient.getJson(queryUrl, cdpTokenService.getAuthToken(queryModel.getCurrentPagePath()));
            int httpStatusCode = serverResponse.getHttpStatusCode();
            String responseString = serverResponse.getResponseString();

            if (httpStatusCode == HttpServletResponse.SC_OK) {
                responseFromApi = responseString;
            }

        } catch (RuntimeException ex) {
            log.error("Error Log at UserToken: {}", ex.getMessage(), ex);

        }
        response.getWriter().write(responseFromApi);
        response.setContentType("application/json");

    }
}
