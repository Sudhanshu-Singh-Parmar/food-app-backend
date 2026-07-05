import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createCategory, deleteCategory, getAllCategories, updateCategory } from '../controllers/categoryController.js';

const categoryRoutes = express.Router();

categoryRoutes.post('/create-category', authMiddleware, createCategory);
categoryRoutes.get('/get-all-categories', getAllCategories);
categoryRoutes.post('/update-category/:id', authMiddleware, updateCategory);
categoryRoutes.delete('/delete-category/:id', authMiddleware, deleteCategory);

export default categoryRoutes;