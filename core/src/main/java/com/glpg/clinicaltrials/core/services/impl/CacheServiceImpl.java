package com.glpg.clinicaltrials.core.services.impl;

import com.glpg.clinicaltrials.core.services.CacheService;
import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import org.osgi.framework.Constants;
import org.osgi.service.component.annotations.Activate;
import org.osgi.service.component.annotations.Component;

import java.util.concurrent.TimeUnit;

@Component(service = CacheService.class,
        property = {
                Constants.SERVICE_DESCRIPTION + "=Cache Service Implementation"
        })

public class CacheServiceImpl implements CacheService {

    private Cache<Object, Object> cache = null;

    @Activate
    public void activate() {
        if (cache == null) {
            CacheBuilder<Object, Object> cacheBuilder = CacheBuilder.newBuilder()
                    .expireAfterAccess(24, TimeUnit.HOURS);
            cache = cacheBuilder.build();
        }

    }
    @Override
    public Cache<Object, Object> get() {
        return cache;
    }
}
