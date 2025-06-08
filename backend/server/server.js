import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getLogs } from "#server/routes/getLogs.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const corsConfig = {
    origin: `${process.env.HOST}:${PORT}`
}

const app = express();
app.use(express.json());
app.use(cors(corsConfig));

getLogs(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
})