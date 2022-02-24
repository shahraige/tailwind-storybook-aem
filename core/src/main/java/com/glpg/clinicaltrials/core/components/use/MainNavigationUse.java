package com.glpg.clinicaltrials.core.components.use;

import com.adobe.cq.sightly.WCMUsePojo;
import com.day.cq.wcm.api.Page;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ValueMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class MainNavigationUse extends WCMUsePojo {
    private final Logger logger = LoggerFactory.getLogger(getClass());

    private int depth = 1;
    private List<MenuItem> navigationMenus = new ArrayList<>();

    @Override
    public void activate() {
        try {
            Resource resource = getResource();
            ValueMap valueMap = resource.getValueMap();
            String navigationRoot = valueMap.get("navigationRoot", String.class);
            Integer structureDepth = valueMap.get("structureDepth", Integer.class);
            if (structureDepth != null) {
                depth = structureDepth;
            }

            Resource rootResource = null;
            if (navigationRoot != null) {
                rootResource = getResourceResolver().getResource(navigationRoot);
            }
            if (rootResource != null && rootResource.hasChildren()) {
                Iterator<Resource> children = rootResource.listChildren();
                navigationMenus = new ArrayList<>();
                while (children.hasNext()) {
                    Resource next = children.next();
                    Page page = next.adaptTo(Page.class);
                    if (page != null && !page.isHideInNav()) {
                        navigationMenus.add(calculateNavFromChildren(next.adaptTo(Page.class), 1));
                    }
                }
                System.out.println(this.getNavigationMenus());
            }
        } catch (RuntimeException ex) {
            logger.error("could not activate MainNavigationUse: {}", ex.getMessage(), ex);
        }
    }

    private MenuItem calculateNavFromChildren(Page page, int currentLevel) {
        MenuItem menuItem = new MenuItem();
        menuItem.setPagePath(page.getPath());
        menuItem.setPageTitle(page.getTitle());
        menuItem.setVisibility(page.getContentResource().getValueMap().get("navigationVisibility", StringUtils.EMPTY));
        menuItem.setEnableSearchOverlay(page.getContentResource().getValueMap().get("enableSearchOverlay", Boolean.FALSE));

        List<MenuItem> submenu = null;
        Iterator<Page> pageIterator = page.listChildren();

        // doing the recursive call here for calculating nested children
        if (pageIterator.hasNext()) {
            submenu = new ArrayList<>();
            while (pageIterator.hasNext() && currentLevel < depth) {
                Page next = pageIterator.next();
                if (!next.isHideInNav()){
                    submenu.add(calculateNavFromChildren(next, currentLevel +1));
                }
            }
        }

        if (submenu != null && submenu.size() > 0) {
            menuItem.setHasChildren(true);
            menuItem.setMenuItems(submenu);
        }
        return menuItem;
    }

    public int getDepth() {
        return depth;
    }

    public void setDepth(int depth) {
        this.depth = depth;
    }

    public List<MenuItem> getNavigationMenus() {
        return navigationMenus;
    }

    public void setNavigationMenus(List<MenuItem> navigationMenus) {
        this.navigationMenus = navigationMenus;
    }

    public class MenuItem {
        private boolean hasChildren = false;
        private boolean enableSearchOverlay = false;
        private String pagePath;
        private String pageTitle;
        private String visibility;
        private List<MenuItem> menuItems = new ArrayList<>();

        public MenuItem() {
        }

        public boolean isHasChildren() {
            return hasChildren;
        }

        public void setHasChildren(boolean hasChildren) {
            this.hasChildren = hasChildren;
        }

        public String getPagePath() {
            return pagePath;
        }

        public void setPagePath(String pagePath) {
            this.pagePath = pagePath;
        }

        public String getPageTitle() {
            return pageTitle;
        }

        public void setPageTitle(String pageTitle) {
            this.pageTitle = pageTitle;
        }

        public List<MenuItem> getMenuItems() {
            return menuItems;
        }

        public void setMenuItems(List<MenuItem> menuItems) {
            this.menuItems = menuItems;
        }

        public String getVisibility() {
            return visibility;
        }

        public void setVisibility(String visibility) {
            this.visibility = visibility;
        }

        public boolean isEnableSearchOverlay() {
            return enableSearchOverlay;
        }

        public void setEnableSearchOverlay(boolean enableSearchOverlay) {
            this.enableSearchOverlay = enableSearchOverlay;
        }
    }
}
