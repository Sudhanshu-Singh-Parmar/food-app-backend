import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createCategory, deleteCategory, getAllCategories, updateCategory } from '../controllers/categoryControllers.js';

const categoryRoutes = express.Router();

categoryRoutes.post('/create-category', authMiddleware, createCategory);
categoryRoutes.get('/get-all-categories', getAllCategories);
categoryRoutes.put('/update-category/:id', authMiddleware, updateCategory);
categoryRoutes.delete('/delete-category/:id', authMiddleware, deleteCategory);

export default categoryRoutes;