import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createCategory, getAllCategories } from '../controllers/categoryController.js';

const categoryRoutes = express.Router();

categoryRoutes.post('/create-category', authMiddleware, createCategory);
categoryRoutes.get('/get-all-categories', getAllCategories);

export default categoryRoutes;