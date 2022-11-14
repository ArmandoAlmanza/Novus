import express from "express";
import morgan from "morgan";
import cors from "cors";
import productRoutes from "./routes/";

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routes
app.use("/api", productRoutes);

export default app;
