import express from 'express';
import { getUser } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const userRoutes = express.Router();

userRoutes.get('/getUser', authMiddleware, getUser);

export default userRoutes;