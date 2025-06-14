import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import setupRoutes from "#server/routes/index.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const corsConfig = {
    origin: `${process.env.HOST}`,
    methods: ['GET', 'POST', 'PUT'],
    credentials: true
}

// App middlewares
const app = express();
app.use(express.json());
app.use(cors(corsConfig));

// Routes
setupRoutes(app);
// Listener
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`)
})