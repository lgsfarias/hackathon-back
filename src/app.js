import express, { json } from 'express';
import cors from 'cors';
import db from './config/dbConnect.js';

const app = express();
app.use(json());
app.use(cors());

export default app;
