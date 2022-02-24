package com.glpg.clinicaltrials.core.models;

import com.day.cq.wcm.api.Page;
import com.google.common.net.HttpHeaders;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpStatus;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.PostConstruct;
import java.io.IOException;


@Model(adaptables = SlingHttpServletRequest.class)
public class RedirectPageModel {

    private static final Logger logger = LoggerFactory.getLogger(com.glpg.clinicaltrials.core.models.RedirectPageModel.class);

    @ValueMapValue(name = "sling:redirectStatus")
    @Default(longValues = HttpStatus.SC_MOVED_PERMANENTLY)
    private Long slingRedirectStatus;

    private static final String PROP_REDIRECT_URL = "redirectURL";

    @SlingObject
    private SlingHttpServletResponse response;

    @ScriptVariable
    private Page currentPage;

    @SlingObject
    private ResourceResolver resourceResolver;

    @PostConstruct
    public void init() throws IOException {
        String redirectUrl = getRedirectTarget();
        if (StringUtils.isNotBlank(redirectUrl)) {
            final int redirectStatus = slingRedirectStatus.intValue();
            logger.trace("Redirecting ({}) to {}", redirectStatus, redirectUrl);
            if (redirectStatus == HttpStatus.SC_MOVED_TEMPORARILY) {
                response.sendRedirect(redirectUrl);
            } else {
                response.setHeader(HttpHeaders.LOCATION, redirectUrl);
                response.setStatus(redirectStatus);
            }

        }
    }

    public final String getRedirectTarget() {
        String redirectURL = currentPage.getProperties().get(PROP_REDIRECT_URL, "");
        if (StringUtils.isNotBlank(redirectURL)) {
            if (StringUtils.equals(redirectURL, currentPage.getPath())) {
                logger.warn("{} is trying to redirect to self", currentPage.getPath());
                return null;
            }
            return resourceResolver.map(redirectURL) + ".html";
        }
        return StringUtils.EMPTY;
    }
}
