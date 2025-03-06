import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";
import { dirname } from "path";
import "dotenv/config";

import friendsRouter from "./routes/friends.js";
import expensesRouter from "./routes/expenses.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "frontend/dist")));

app.use("/api/friends", friendsRouter);
app.use("/api/expenses", expensesRouter);

export default app;
