package com.udvarid.pontemovie.dto;

public class ApiKeyDetails {
    private String apiKey;

    public ApiKeyDetails(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }
}
