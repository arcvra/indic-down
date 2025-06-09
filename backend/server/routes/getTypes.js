import { listTypes } from "#server/models/types.model.js";


export const getTypes = (app) => app.get("/types", async (req, res) => {
    try {
        const data = await listTypes();
        res.status(200).json({ status: true, content: data.rows });
    } catch (err) {
        console.error("No se han podido obtener los datos: ", err);
        res.status(500).json({
            status: false,
            message: "Error al acceder a la base de datos:",
            error: err
        })
    }
})