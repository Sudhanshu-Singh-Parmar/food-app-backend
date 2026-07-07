import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createFood, getAllFoods, getFoodById } from '../controllers/foodControllers.js';

const foodRoutes = express.Router();

foodRoutes.post('/create-food', authMiddleware, createFood);
foodRoutes.get('/get-all-foods', getAllFoods );
foodRoutes.get('/get-food/:id', getFoodById );

export default foodRoutes;