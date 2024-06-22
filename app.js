import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { DB_HOST, DB_PORT, DB_DATABASE } from "./config/config.js";
import router from "./routes/Routes.js";

const connection = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;

mongoose.connect(connection);

mongoose.connection.on("connected", () => {
  console.log("Connected to Database successfully".bgBlue);
});

mongoose.connection.on("error", (err) => {
  console.error("Error connecting to Database:".red, err.message);
});

const app = express();

app.use(cookieParser());

app.use(
  cors({
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());

app.use("/api", router);

export default app;
