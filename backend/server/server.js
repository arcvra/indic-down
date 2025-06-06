import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;

const corsConfig = {
    origin: `${process.env.HOST}:${PORT}`
}

const app = express();
app.use(express.json());
app.use(cors(corsConfig));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
})