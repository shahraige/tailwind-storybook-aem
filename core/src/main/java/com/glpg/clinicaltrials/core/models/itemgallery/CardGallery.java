package com.glpg.clinicaltrials.core.models.itemgallery;

import java.io.Serializable;

public class CardGallery implements Serializable {

    private String cardLabel;
    private String imagePath;
    private String pagePath;


    public String getItemLabel() {
        return cardLabel;
    }

    public void setItemLabel(String itemLabel) {
        this.cardLabel = itemLabel;
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
