package com.glpg.clinicaltrials.core.models;

public class ServerResponse {
    public String responseString;
    public int httpStatusCode;

    public ServerResponse() {
    }

    public String getResponseString() {
        return responseString;
    }

    public void setResponseString(String responseString) {
        this.responseString = responseString;
    }

    public int getHttpStatusCode() {
        return httpStatusCode;
    }

    public void setHttpStatusCode(int httpStatusCode) {
        this.httpStatusCode = httpStatusCode;
    }
}
