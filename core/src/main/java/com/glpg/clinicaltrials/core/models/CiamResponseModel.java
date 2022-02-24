package com.glpg.clinicaltrials.core.models;

import java.util.List;
import java.util.stream.Collectors;

public class CiamResponseModel<T> {

    private List<CdpError> errors = null;
    private T data;

    public List<CdpError> getErrors() {
        return errors != null ? errors.stream().collect(Collectors.toList()) : null;
    }

    public void setErrors(List<CdpError> errors) {
        this.errors = errors != null ? errors.stream().collect(Collectors.toList()) : null;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

}