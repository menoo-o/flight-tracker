import axios from 'axios';
import { getCachedData, setCachedData } from '../utils/cache';

const fetchFlights = async (endpoint: string, params: Record<string, string>) => {
    const cacheKey = `${endpoint}-${JSON.stringify(params)}`;
    const cachedData = getCachedData(cacheKey);
    if (cachedData) return cachedData;

    const response = await axios.get(`https://api.aviationstack.com/v1/${endpoint}`, {
        params: { access_key: process.env.AVIATIONSTACK_API_KEY, ...params },
    });

    const data = response.data;
    setCachedData(cacheKey, data);
    return data;
};

export const getArrivals = async (airportCode: string) => {
    return fetchFlights('flights', { arr_iata: airportCode });
};

export const getDepartures = async (airportCode: string) => {
    return fetchFlights('flights', { dep_iata: airportCode });
};