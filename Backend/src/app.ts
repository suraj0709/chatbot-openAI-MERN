import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
config();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev")); // REMOVE IN PRODUCTION
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/api/v1", appRouter);

export default app;
