import express from 'express';
import { loginController, logoutController, registerController } from '../controllers/authController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const authRoutes = express.Router();

authRoutes.post('/register', registerController);
authRoutes.post('/login', loginController);
authRoutes.post('/logout', authMiddleware,  logoutController);

export default authRoutes;