package com.glpg.clinicaltrials.core.components.use;

import com.adobe.cq.sightly.WCMUsePojo;
import com.day.cq.wcm.api.Page;
import com.glpg.clinicaltrials.core.models.itemgallery.CardGallery;
import com.glpg.clinicaltrials.core.models.itemgallery.TeaserGallery;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class ItemGalleryUse extends WCMUsePojo {

    private List<TeaserGallery> teaserGalleries;
    private List<CardGallery> cardGalleries;

    @Override
    public void activate() throws Exception {
        Resource resource = getResource();
        ValueMap valueMap = resource.getValueMap();
        String rootPath = valueMap.get("rootPath", String.class);
        String itemType = valueMap.get("itemType", String.class);

        Resource rootResource = null;
        if (rootPath != null) {
            rootResource = getResourceResolver().getResource(rootPath);
        }
        if (rootResource != null && rootResource.hasChildren()) {
            Iterator<Resource> children = rootResource.listChildren();
            teaserGalleries = new ArrayList<>();
            cardGalleries = new ArrayList<>();
            while (children.hasNext()) {
                Resource next = children.next();
                Page page = next.adaptTo(Page.class);
                if (page != null) {
                    calculateItemsFromChildren(next.adaptTo(Page.class), itemType);
                }
            }
        }
    }

    private void calculateItemsFromChildren(Page page, String itemType) {
        ValueMap pageValueMap = page.getContentResource().getValueMap();
        if (ItemType.CARD.getValue().equals(itemType)) {
            String cardImage = pageValueMap.get("cardImage", StringUtils.EMPTY);
            String cardLabel = pageValueMap.get("cardLabel", StringUtils.EMPTY);
            if (!cardImage.isEmpty() && !cardLabel.isEmpty()) {
                CardGallery cardGallery = new CardGallery();
                cardGallery.setPagePath(page.getPath());
                cardGallery.setImagePath(cardImage);
                cardGallery.setItemLabel(cardLabel);
                cardGalleries.add(cardGallery);
            }
        } else if(ItemType.TEASER.getValue().equals(itemType)) {
            String teaserGalleryImage = pageValueMap.get("teaserGalleryImage", StringUtils.EMPTY);
            String teaserGalleryLabel = pageValueMap.get("teaserGalleryLabel", StringUtils.EMPTY);
            if (!teaserGalleryImage.isEmpty() && !teaserGalleryLabel.isEmpty()) {
                TeaserGallery teaserGallery = new TeaserGallery();
                teaserGallery.setPagePath(page.getPath());
                teaserGallery.setImagePath(teaserGalleryImage);
                teaserGallery.setTeaserLabel(teaserGalleryLabel);
                teaserGalleries.add(teaserGallery);
            }
        }

        // doing the recursive call here
        Iterator<Page> pageIterator = page.listChildren();
        if (pageIterator.hasNext()) {
            while (pageIterator.hasNext()) {
                Page next = pageIterator.next();
                calculateItemsFromChildren(next, itemType);
            }
        }

    }

    public List<TeaserGallery> getTeaserGalleries() {
        return teaserGalleries;
    }

    public List<CardGallery> getCardGalleries() {
        return cardGalleries;
    }
}

enum ItemType {
    TEASER("teaser"),
    CARD("card");

    private String value;

    ItemType(String value) {
        this.value = value;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
