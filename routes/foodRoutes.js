import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createFood, deleteFood, getAllFoods, getFoodById, getFoodByResturant, placeOrder, updateFood, updateOrderStatus } from '../controllers/foodControllers.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

const foodRoutes = express.Router();

foodRoutes.post('/create-food', authMiddleware, createFood);
foodRoutes.get('/get-all-foods', getAllFoods);
foodRoutes.get('/get-food/:id', getFoodById);
foodRoutes.get('/get-food-by-resturant/:id', getFoodByResturant);
foodRoutes.put('/update-food/:id', authMiddleware, updateFood);
foodRoutes.delete('/delete-food/:id', authMiddleware, deleteFood);
foodRoutes.post('/place-order', authMiddleware, placeOrder);
foodRoutes.patch('/update-order-status/:id', authMiddleware, adminMiddleware, updateOrderStatus);

export default foodRoutes;