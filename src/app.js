import express, { json } from 'express';
import cors from 'cors';
import sportsRouter from './routes/routes.js';

const app = express();
app.use(json());
app.use(cors());
app.use(sportsRouter);

export default app;
