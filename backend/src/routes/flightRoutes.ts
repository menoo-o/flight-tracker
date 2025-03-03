import { Router } from 'express';
import { getArrivalsHandler, getDeparturesHandler } from '../controllers/flightController';

const router = Router();

router.get('/arrivals', getArrivalsHandler);
router.get('/departures', getDeparturesHandler);

export default router;