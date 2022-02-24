package com.glpg.clinicaltrials.core.utils;

import com.glpg.clinicaltrials.core.models.ServerResponse;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.Header;
import org.apache.http.HttpHeaders;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicHeader;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Component;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Component(service = com.glpg.clinicaltrials.core.utils.RestClient.class,
        property = {
                Constants.SERVICE_DESCRIPTION + "=GLPG HCPportal Rest Client"
        })
public class RestClient {
    protected final Logger logger = LoggerFactory.getLogger(this.getClass());

    private static final String BEARER = "Bearer ";
    private static final String APPLICATION_GRAPHQL = "application/graphql; charset=utf-8";
    private static final String APPLICATION_JSON = "application/json; charset=utf-8";

    public ServerResponse post(String url, String body, String token) throws IOException {
        List<Header> headerList = prepareHeaders(token, APPLICATION_GRAPHQL);
        return postRequest(url, body, headerList);
    }

    public ServerResponse post(String url, String body) throws IOException {
        return  postRequest(url, body, null);
    }

    public ServerResponse postJson(String url, String body, String token) throws IOException {
        List<Header> headerList = prepareHeaders(token, APPLICATION_JSON);
        return postRequest(url, body, headerList);
    }

    public ServerResponse putJson(String url, String body, String token) throws IOException {
        List<Header> headerList = prepareHeaders(token, APPLICATION_JSON);
        return putRequest(url, body, headerList);
    }

    public ServerResponse get(String url) throws IOException {
        return getRequest(url, null);
    }

    public ServerResponse getJson(String url, String token) throws IOException {
        List<Header> headerList = prepareHeaders(token, APPLICATION_JSON);
        return getRequest(url, headerList);
    }

    private List<Header> prepareHeaders(String token, String contentType) {
        List<Header> headerList = new ArrayList<>();
        headerList.add(new BasicHeader(HttpHeaders.CONTENT_TYPE, contentType));
        if (StringUtils.isNotEmpty(token)) {
            headerList.add(new BasicHeader(HttpHeaders.AUTHORIZATION, BEARER.concat(token)));
        }
        return headerList;
    }

    private ServerResponse postRequest(String url, String body, List<Header> headers) throws IOException {
        HttpPost post = new HttpPost(url);
        if (headers !=null && !headers.isEmpty()) {
            post.setHeaders(headers.toArray(new Header[0]));
        }

        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create().setDefaultRequestConfig(getRequestConfig());
        HttpClient httpClient = httpClientBuilder.build();

        StringEntity stringEntity = new StringEntity(body, StandardCharsets.UTF_8.name());
        post.setEntity(stringEntity);
        return executeRequest(httpClient.execute(post));
    }

    private ServerResponse putRequest(String url, String body, List<Header> headers) throws IOException {
        HttpPut put = new HttpPut(url);
        if (headers !=null && !headers.isEmpty()) {
            put.setHeaders(headers.toArray(new Header[0]));
        }

        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create().setDefaultRequestConfig(getRequestConfig());
        HttpClient httpClient = httpClientBuilder.build();

        StringEntity stringEntity = new StringEntity(body, StandardCharsets.UTF_8.name());
        put.setEntity(stringEntity);

        return executeRequest(httpClient.execute(put));
    }

    private ServerResponse getRequest(String url, List<Header> headers) throws IOException {
        HttpGet get = new HttpGet(url);
        if (headers !=null && !headers.isEmpty()) {
            get.setHeaders(headers.toArray(new Header[0]));
        }
        HttpClientBuilder httpClientBuilder = HttpClientBuilder.create();
        HttpClient httpClient = httpClientBuilder.build();
        return executeRequest(httpClient.execute(get));
    }

    private ServerResponse executeRequest(HttpResponse execute) throws IOException {
        HttpResponse httpResponse = execute;
        ServerResponse serverResponse = new ServerResponse();
        int statusCode = httpResponse.getStatusLine().getStatusCode();
        StringBuilder stringBuilder = new StringBuilder();
        Scanner scanner = new Scanner(httpResponse.getEntity().getContent(), StandardCharsets.UTF_8.name());
        while (scanner.hasNextLine()) {
            stringBuilder.append(scanner.nextLine());
        }
        serverResponse.httpStatusCode = statusCode;
        serverResponse.responseString = stringBuilder.toString();
        return serverResponse;
    }

    private RequestConfig getRequestConfig(){
        int timeout = 15;
        return RequestConfig.custom()
                .setConnectTimeout(timeout * 1000)
                .setConnectionRequestTimeout(timeout * 1000)
                .setSocketTimeout(timeout * 1000).build();
    }
}
