import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createResturant } from '../controllers/resturantControllers.js';


const resturantRoutes = express.Router();

resturantRoutes.post('/create', authMiddleware, createResturant);

export default resturantRoutes;