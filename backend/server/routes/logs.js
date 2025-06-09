import express from "express";
import { insertLog, listLogs } from "#server/models/logs.model.js";

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

router.post("/", async (req, res) => {
    try {
        const { typeId, createdAt } = req.body;

        if (typeof typeId !== "number" || typeof createdAt !== "string") {
            return res.status(400).json({
                status: false,
                message: "Parámetros inválidos. Se esperaba {typeId: number, createdAt: string}."
            });
        }

        const result = await insertLog(typeId, createdAt);
        return res.status(201).json({
            status: true,
            content: result.rows[0]
        });

    } catch (err) {
        console.error("No se ha podido completar la solicitud: ", err);
        return res.status(500).json({
            status: false,
            message: "Error al acceder a la base de datos.",
            error: err.message
        })
    }
})

export default router;