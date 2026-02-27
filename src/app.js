// src/app.js ou src/index.js
import 'dotenv/config'; 
import express, { json } from "express";
import routes from "./routes.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());
app.use(routes);

export default app;