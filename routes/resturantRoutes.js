import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import { createResturant, deleteResturant, getAllResturants, getResturantById } from '../controllers/resturantControllers.js';


const resturantRoutes = express.Router();

resturantRoutes.post('/create', authMiddleware, createResturant);
resturantRoutes.get('/get-all-resturants', getAllResturants);
resturantRoutes.get('/get-resturant/:id', getResturantById);
resturantRoutes.delete('/delete-resturant/:id', authMiddleware, deleteResturant);

export default resturantRoutes;