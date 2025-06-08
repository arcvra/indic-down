import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { initDatabase } from "#database/config.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const corsConfig = {
    origin: `${process.env.HOST}:${PORT}`
}

// Inicia la DB
initDatabase();

const app = express();
app.use(express.json());
app.use(cors(corsConfig));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
})