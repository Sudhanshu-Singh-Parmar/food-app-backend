import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createFood } from '../controllers/foodControllers.js';

const foodRoutes = express.Router();

foodRoutes.post('/create-food', authMiddleware, createFood);

export default foodRoutes;