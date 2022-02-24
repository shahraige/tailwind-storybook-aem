package com.glpg.clinicaltrials.core.models;

import java.io.Serializable;
import java.util.List;

public class ClinicalTrialsQueryModel implements Serializable {
    private String expression;
    private String location;
    private String distance;
    private String itemPerPage;
    private String pageNo;
    private String currentPagePath;
    private List<String> conditions;
    private List<String> studyStatus;
    private List<String> phases;
    private List<String> ages;
    private List<String> genders;

    public String getExpression() {
        return expression;
    }

    public void setExpression(String expression) {
        this.expression = expression;
    }

    public List<String> getConditions() {
        return conditions;
    }

    public void setConditions(List<String> conditions) {
        this.conditions = conditions;
    }

    public List<String> getStudyStatus() {
        return studyStatus;
    }

    public void setStudyStatus(List<String> studyStatus) {
        this.studyStatus = studyStatus;
    }

    public List<String> getPhases() {
        return phases;
    }

    public void setPhases(List<String> phases) {
        this.phases = phases;
    }

    public List<String> getAges() {
        return ages;
    }

    public void setAges(List<String> ages) {
        this.ages = ages;
    }

    public List<String> getGenders() {
        return genders;
    }

    public void setGenders(List<String> genders) {
        this.genders = genders;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }

    public String getItemPerPage() {
        return itemPerPage;
    }

    public void setItemPerPage(String itemPerPage) {
        this.itemPerPage = itemPerPage;
    }

    public String getPageNo() {
        return pageNo;
    }

    public void setPageNo(String pageNo) {
        this.pageNo = pageNo;
    }

    public String getCurrentPagePath() {
        return currentPagePath;
    }

    public void setCurrentPagePath(String currentPagePath) {
        this.currentPagePath = currentPagePath;
    }
}
