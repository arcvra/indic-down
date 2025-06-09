import express from "express";
import { listLogs } from "#server/models/logs.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await listLogs();
        res.status(200).json({ status: true, content: data.rows });
    } catch (err) {
        console.error("No se han podido obtener los datos: ", err);
        res.status(500).json({
            status: false,
            message: "Error al acceder a la base de datos:",
            error: err
        })
    }
});

export default router;