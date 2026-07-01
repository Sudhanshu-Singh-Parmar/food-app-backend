import express from "express";
import { testUserController } from "../controllers/testController.js";

const testRouter = express.Router();

testRouter.get('/', testUserController)

export default testRouter;