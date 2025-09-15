import { listLogs } from "#server/models/logs.model.js";

export const listLogsController = async (req, res) => {
    try {
        const data = await listLogs();
        return res.status(200).json({ status: true, content: data.rows });
    } catch (err) {
        console.error("No se han podido obtener los datos: ", err);
        return res.status(500).json({
            status: false,
            message: "Error al acceder a la base de datos:",
            error: err.message
        })
    }
}
