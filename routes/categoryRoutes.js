import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createCategory, getAllCategories, updateCategory } from '../controllers/categoryController.js';

const categoryRoutes = express.Router();

categoryRoutes.post('/create-category', authMiddleware, createCategory);
categoryRoutes.get('/get-all-categories', getAllCategories);
categoryRoutes.post('/update-category/:id', authMiddleware, updateCategory);

export default categoryRoutes;