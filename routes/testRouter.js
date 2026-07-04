import express from "express";
import { testUserController } from "../controllers/testControllers.js";

const testRouter = express.Router();

testRouter.get('/', testUserController)

export default testRouter;