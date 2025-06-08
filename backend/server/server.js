import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getLogs } from "#server/routes/getLogs.js";
import { getTypes } from "#server/routes/getTypes.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const corsConfig = {
    origin: `${process.env.HOST}:${PORT}`
}

const app = express();
app.use(express.json());
app.use(cors(corsConfig));

getLogs(app);
getTypes(app);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
})