package com.glpg.clinicaltrials.core.models;

import java.util.List;

public class ClinicalTrialModel {

    private String id;
    private int rank;
    private String protocol_number;
    private String gov_identifier;
    private String clinical_trial_purpose;
    private String clinical_trial_summary;
    private String gender;
    private String min_age;
    private String max_age;
    private List<String> std_age;
    private List<String> phase;
    private String trial_status;
    private String inclusion_exclusion_criteria;
    private String type_of_drug;
    private String created_at;
    private String updated_at;
    private String location_id;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    public String getProtocol_number() {
        return protocol_number;
    }

    public void setProtocol_number(String protocol_number) {
        this.protocol_number = protocol_number;
    }

    public String getGov_identifier() {
        return gov_identifier;
    }

    public void setGov_identifier(String gov_identifier) {
        this.gov_identifier = gov_identifier;
    }

    public String getClinical_trial_purpose() {
        return clinical_trial_purpose;
    }

    public void setClinical_trial_purpose(String clinical_trial_purpose) {
        this.clinical_trial_purpose = clinical_trial_purpose;
    }

    public String getClinical_trial_summary() {
        return clinical_trial_summary;
    }

    public void setClinical_trial_summary(String clinical_trial_summary) {
        this.clinical_trial_summary = clinical_trial_summary;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getMin_age() {
        return min_age;
    }

    public void setMin_age(String min_age) {
        this.min_age = min_age;
    }

    public String getMax_age() {
        return max_age;
    }

    public void setMax_age(String max_age) {
        this.max_age = max_age;
    }

    public List<String> getStd_age() {
        return std_age;
    }

    public void setStd_age(List<String> std_age) {
        this.std_age = std_age;
    }

    public List<String> getPhase() {
        return phase;
    }

    public void setPhase(List<String> phase) {
        this.phase = phase;
    }

    public String getTrial_status() {
        return trial_status;
    }

    public void setTrial_status(String trial_status) {
        this.trial_status = trial_status;
    }

    public String getInclusion_exclusion_criteria() {
        return inclusion_exclusion_criteria;
    }

    public void setInclusion_exclusion_criteria(String inclusion_exclusion_criteria) {
        this.inclusion_exclusion_criteria = inclusion_exclusion_criteria;
    }

    public String getType_of_drug() {
        return type_of_drug;
    }

    public void setType_of_drug(String type_of_drug) {
        this.type_of_drug = type_of_drug;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    public String getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(String updated_at) {
        this.updated_at = updated_at;
    }

    public String getLocation_id() {
        return location_id;
    }

    public void setLocation_id(String location_id) {
        this.location_id = location_id;
    }
}
