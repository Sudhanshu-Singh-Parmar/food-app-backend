import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import testRouter from "./routes/testRouter.js";
import connectDB from "./config/db.js";
import validateENVs from "./config/env.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import resturantRoutes from "./routes/resturantRoutes.js";

dotenv.config(); // dotenv configuration

const app = express();

try {
    validateENVs()
} catch (error) {
    console.log(error);    
}

// middlewares -:
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use(testRouter);
app.use(authRoutes);
app.use(userRoutes);
app.use(resturantRoutes);

// app.use( (req, res) => {
    //     console.log("--------------------");
// })
    
    
const PORT = process.env.PORT;
connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})
.catch((err) => {
    console.log("DB connection error:", err);
});