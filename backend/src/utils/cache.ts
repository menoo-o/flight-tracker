import NodeCache from 'node-cache';

const cache = new NodeCache({ stdTTL: parseInt(process.env.CACHE_TTL || '3600', 10) });

export const getCachedData = (key: string) => {
    return cache.get(key);
};

export const setCachedData = (key: string, value: any) => {
    cache.set(key, value);
};