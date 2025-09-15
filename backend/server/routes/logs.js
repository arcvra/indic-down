import express from "express";
import { insertLog } from "#server/models/logs.model.js";
import { listLogsController } from "#server/controllers/logs.controller.js";

const router = express.Router();

router.get("/", listLogsController);

router.post("/", async (req, res) => {
    try {
        const { typeId } = req.body;

        if (typeof typeId !== "number") {
            return res.status(400).json({
                status: false,
                message: "Parámetros inválidos. Se esperaba {typeId: number}."
            });
        }

        const result = await insertLog(typeId);
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