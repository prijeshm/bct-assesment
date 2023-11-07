import express from 'express';
import * as showtimesController from '../controllers/showtimesController';

const router = express.Router();

router.get('/:movieId', showtimesController.getShowtimesForMovie);

export default router;
