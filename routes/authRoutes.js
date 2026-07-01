import express from 'express';
import { registerController } from '../controllers/authControllers.js';

const authRoutes = express.Router();

authRoutes.post('/register', registerController)

export default authRoutes;