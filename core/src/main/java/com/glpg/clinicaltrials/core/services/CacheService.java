package com.glpg.clinicaltrials.core.services;

import com.google.common.cache.Cache;

public interface CacheService {
    Cache<Object, Object> get();
}
