package com.glpg.clinicaltrials.core.components.use;

import com.adobe.cq.sightly.WCMUsePojo;
import com.adobe.granite.ui.components.ds.DataSource;
import com.adobe.granite.ui.components.ds.EmptyDataSource;
import com.adobe.granite.ui.components.ds.SimpleDataSource;
import com.adobe.granite.ui.components.ds.ValueMapResource;
import com.day.crx.JcrConstants;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.jackrabbit.commons.JcrUtils;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceMetadata;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.api.wrappers.ValueMapDecorator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.*;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

public class StaticDataSourceModel extends WCMUsePojo {
    private final Logger log = LoggerFactory.getLogger(this.getClass());
    private List<String> colorList = new ArrayList<>();

    @Override
    public void activate() throws Exception {
        this.getRequest().setAttribute(DataSource.class.getName(), EmptyDataSource.instance());

        final ResourceResolver resolver = getResourceResolver();
        ValueMap vm;

        InputStream jsonStream = getJsonStreamFromJcr(getResource().getResourceType() + "/data.json", resolver);
        if (jsonStream != null) {
            final List<DataSourceValueMap> data = deserializeValueMaps(jsonStream);
            final List<Resource> valueMapResourceList = dataToResources(data, resolver);

            // Feed resources into dataSource
            final DataSource dataSource = new SimpleDataSource(valueMapResourceList.iterator());
            this.getRequest().setAttribute(DataSource.class.getName(), dataSource);
        }

    }

    private InputStream getJsonStreamFromJcr(final String path, final ResourceResolver resolver) {
        final Session session = resolver.adaptTo(Session.class);

        try {
            final Node dataSourceNode = JcrUtils.getNodeIfExists(path, session);
            if (dataSourceNode == null) {
                throw new IllegalArgumentException("Data source node <" + path + "> does not exist");
            }

            final Node jcrContent = dataSourceNode.getNode(JcrConstants.JCR_CONTENT);
            if (jcrContent == null) {
                throw new IllegalArgumentException("Data source node <" + path + "> has no <" + JcrConstants.JCR_DATA + "> child");
            }

            final Property jcrData = jcrContent.getProperty(JcrConstants.JCR_DATA);
            if (jcrData == null) {
                throw new IllegalArgumentException("Node <" + jcrContent.getPath() + "> has no <" + JcrConstants.JCR_DATA + "> property");
            }

            final Binary binary = jcrData.getBinary();
            if (binary == null) {
                throw new IllegalArgumentException("Property <" + JcrConstants.JCR_DATA + "> of node <" + jcrContent.getPath() + "> has no binary data");
            }

            final InputStream jsonStream = binary.getStream();
            if (jsonStream == null) {
                throw new IllegalArgumentException("Could not read dataSource from node " + path);
            }

            return jsonStream;

        } catch (final RepositoryException e) {
//            log.error("Could not read JSON from <{}>", path, e);
            return null;
        }
    }

    private List<DataSourceValueMap> deserializeValueMaps(final InputStream jsonStream) {
        List<DataSourceValueMap> data = new ArrayList<>();
        try {
            final ObjectMapper objectMapper = new ObjectMapper();
            final TypeReference<List<DataSourceValueMap>> type = new TypeReference<List<DataSourceValueMap>>() {
            };
            data = objectMapper.readValue(jsonStream, type);
            log.debug("<{}> values found in json file", data.size());
        } catch (final IOException e) {
            log.error("Unexpected exception while retrieving json values from file <{}>", e);
        }
        return data;
    }

    private List<Resource> dataToResources(final List<DataSourceValueMap> data, final ResourceResolver resolver) {
        return data.stream().map(entry -> {
            final ValueMap valueMap = new ValueMapDecorator(new HashMap<>());
            valueMap.put("value", entry.getValue());
            valueMap.put("text", entry.getText());
            return new ValueMapResource(resolver, new ResourceMetadata(), JcrConstants.NT_UNSTRUCTURED, valueMap);
        }).collect(Collectors.toList());
    }

    public static class DataSourceValueMap {
        private String value;
        private String text;

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

        public String getText() {
            return text;
        }

        public void setText(String text) {
            this.text = text;
        }
    }
}
