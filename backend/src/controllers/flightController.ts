import { Request, Response } from 'express';
import { getArrivals, getDepartures } from '../services/aviationStackService';

export const getArrivalsHandler = async (req: Request, res: Response) => {
    try {
        const airportCode = req.query.airport_code || 'LCY'; // Default to London City Airport
        const data = await getArrivals(airportCode as string);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch arrivals' });
    }
};

export const getDeparturesHandler = async (req: Request, res: Response) => {
    try {
        const airportCode = req.query.airport_code || 'LCY'; // Default to London City Airport
        const data = await getDepartures(airportCode as string);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch departures' });
    }
};