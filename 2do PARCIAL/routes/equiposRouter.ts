// routes/equiposRouter.ts
import express from 'express';
import { crearEquipo } from '../controllers/equiposController';

const router = express.Router();

router.post('/', crearEquipo);

export { router as equiposRouter };
