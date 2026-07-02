import express from 'express';
import { loginController, registerController } from '../controllers/authControllers.js';

const authRoutes = express.Router();

authRoutes.post('/register', registerController);
authRoutes.post('/login', loginController);

export default authRoutes;