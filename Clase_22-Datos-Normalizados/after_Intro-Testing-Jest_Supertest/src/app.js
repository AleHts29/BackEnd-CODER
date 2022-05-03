import "./db.js";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

import MessagesRouter from "./routers/messages.routes.js";

dotenv.config();

const app = express();

// midlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/messages", MessagesRouter);
export default app;
