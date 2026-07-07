import express from 'express';
import { deleteUser, getUser, resetPassword, updatePassword, updateUser } from '../controllers/userControllers.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const userRoutes = express.Router();

userRoutes.get('/getUser', authMiddleware, getUser);
userRoutes.put('/updateUser', authMiddleware, updateUser);
userRoutes.post('/resetPassword', authMiddleware, resetPassword);
userRoutes.post('/updatePassword', authMiddleware, updatePassword);
userRoutes.delete('/deleteUser', authMiddleware, deleteUser);

export default userRoutes;