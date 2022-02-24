package com.glpg.clinicaltrials.core.models.itemgallery;

import java.io.Serializable;

public class TeaserGallery implements Serializable {
    private String teaserLabel;
    private String imagePath;
    private String pagePath;

    public String getTeaserLabel() {
        return teaserLabel;
    }

    public void setTeaserLabel(String teaserLabel) {
        this.teaserLabel = teaserLabel;
    }

    public String getImagePath() {
        return imagePath;
    }

    public void setImagePath(String imagePath) {
        this.imagePath = imagePath;
    }

    public String getPagePath() {
        return pagePath;
    }

    public void setPagePath(String pagePath) {
        this.pagePath = pagePath;
    }
}
