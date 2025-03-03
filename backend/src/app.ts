import express from 'express';
import flightRoutes from './routes/flightRoutes';

const app = express();

app.use(express.json());
app.use('/api', flightRoutes);

export default app;