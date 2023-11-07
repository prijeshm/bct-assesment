import express from 'express';
import * as theatersController from '../controllers/theatersController';

const router = express.Router();

router.get('/', theatersController.getAllTheaters);
router.post('/', theatersController.addTheater);

export default router;
