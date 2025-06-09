import express from "express";
import { listTypes } from "#server/models/types.model.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await listTypes();
        return res.status(200).json({ status: true, content: data.rows });
    } catch (err) {
        console.error("No se han podido obtener los datos: ", err);
        return res.status(500).json({
            status: false,
            message: "Error al acceder a la base de datos:",
            error: err.message
        })
    }
});

export default router;