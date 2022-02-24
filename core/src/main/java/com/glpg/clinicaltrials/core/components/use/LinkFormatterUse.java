package com.glpg.clinicaltrials.core.components.use;

import com.adobe.cq.sightly.WCMUsePojo;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class LinkFormatterUse extends WCMUsePojo {

    public static final String CONTENT = "/content";
    public static final String HTML = ".html";
    public static final String LINK = "link";
    private static final Pattern URL_PATTERN = Pattern.compile("^(.*?)(#(.*)?)?$");

    public String getUrl() {
        return url;
    }

    private String url;

    @Override
    public void activate() throws Exception {
        url = get(LINK, String.class);

        if (url != null && url.startsWith(CONTENT)) {

            String hashPart = StringUtils.EMPTY;
            Matcher matcher = URL_PATTERN.matcher(url);

            while (matcher.find()) {
                if (StringUtils.isNotEmpty(matcher.group(3))) {
                    url = matcher.group(1);
                    hashPart = matcher.group(3);
                }
            }

            String urlWithoutSlash = url.replaceAll("/$", StringUtils.EMPTY);
            if (StringUtils.isEmpty(FilenameUtils.getExtension(urlWithoutSlash))) {
                url = urlWithoutSlash + HTML;
            }

            if (StringUtils.isNotEmpty(hashPart)) {
                url += "#" + hashPart;
            }

            url = getResourceResolver().map(url);
        }
    }
}
