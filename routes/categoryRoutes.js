import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createCategory } from '../controllers/categoryController.js';

const categoryRoutes = express.Router();

categoryRoutes.post('/create-category', authMiddleware, createCategory);

export default categoryRoutes;