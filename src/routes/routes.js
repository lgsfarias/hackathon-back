import { Router } from 'express';

import {
    getSportById,
    getSports,
    createSport,
} from '../controllers/sportsController.js';

const sportsRouter = Router();

sportsRouter.get('/:id', getSportById);
sportsRouter.get('/', getSports);
sportsRouter.post('/', createSport);

export default sportsRouter;
