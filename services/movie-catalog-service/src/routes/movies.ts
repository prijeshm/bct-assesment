import express from 'express';
import * as moviesController from '../controllers/moviesController';

const router = express.Router();

router.get('/', moviesController.getAllMovies);
router.post('/', moviesController.addMovie);

export default router;
