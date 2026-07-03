import express from 'express';
import { getUser, updateUser } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const userRoutes = express.Router();

userRoutes.get('/getUser', authMiddleware, getUser);
userRoutes.post('/updateUser', authMiddleware, updateUser);

export default userRoutes;