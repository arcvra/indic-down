import { listLogs, insertLog } from "#server/models/logs.model.js";

export const listLogsController = async (req, res) => {
    try {
        // Se extraen los parámetros de la query string con valores por defecto (20, 0)
        let { limit = 20, offset = 0 } = req.query;

        // Se convierten parámetros a números enteros
        limit = parseInt(limit, 10);
        offset = parseInt(offset, 10);

        /* Se validan los valores recibidos. 
        En caso de no ser válidos, revierte al predeterminado */
        if (isNaN(limit) || limit < 1) limit = 20;
        if (isNaN(offset) || offset < 0) offset = 0;

        // Consulta de la base de datos
        const data = await listLogs(limit, offset);

        // Se devuelve respuesta con datos de paginación
        return res.status(200).json({
            status: true,
            content: data.rows,
            pagination: { limit, offset }
        });
    } catch (err) {
        console.error("No se han podido obtener los datos: ", err);
        return res.status(500).json({
            status: false,
            message: "Error al acceder a la base de datos:",
            error: err.message
        })
    }
}

export const insertLogsController = async (req, res) => {
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
}
