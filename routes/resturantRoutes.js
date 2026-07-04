import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createResturant, getAllResturants, getResturantById } from '../controllers/resturantControllers.js';


const resturantRoutes = express.Router();

resturantRoutes.post('/create', authMiddleware, createResturant);
resturantRoutes.get('/get-all-resturants', getAllResturants);
resturantRoutes.get('/get-resturant/:id', getResturantById);

export default resturantRoutes;