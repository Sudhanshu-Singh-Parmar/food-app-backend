import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createFood, getAllFoods, getFoodById, getFoodByResturant, updateFood } from '../controllers/foodControllers.js';

const foodRoutes = express.Router();

foodRoutes.post('/create-food', authMiddleware, createFood);
foodRoutes.get('/get-all-foods', getAllFoods);
foodRoutes.get('/get-food/:id', getFoodById);
foodRoutes.get('/get-food-by-resturant/:id', getFoodByResturant);
foodRoutes.put('/update-food/:id', authMiddleware, updateFood);

export default foodRoutes;