import { config } from "dotenv";

config();

//Puerto app
export const PORT = process.env.PORT;

//BD Mongo
export const DB_HOST = process.env.DB_HOST;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT;

//JWT
export const JWT_SECRET = process.env.JWT_SECRET;

//CORS
export const CORS_ORIGIN = process.env.CORS_ORIGIN;
