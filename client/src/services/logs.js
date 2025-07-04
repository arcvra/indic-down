/**
 * Añade nuevo error log según nivel de seguridad y con fecha de creación
 * 
 * @async
 * @function postLog
 * @param {number} typeId - Identificador único del tipo de error
 * @returns {Promise<Object|null>} Objeto con la respuesta del servidor si tiene éxito o "null" si hay algún error
 */

export const postLog = async (typeId) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (typeof typeId !== "number") {
        console.error(
            "Parámetros inválidos. Se esperaba {typeId: number}."
        );
        return null;
    };

    try {
        const res = await fetch(`${API_URL}/logs`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ typeId: typeId })
        });

        if (!res.ok) {
            const errorMessage = `Error ${res.status}: ${res.statusText}`;
            throw new Error(errorMessage);
        }

        const data = await res.json();
        return data;

    } catch (err) {
        console.error("Hubo un error en el POST:", err.message);
        return null;
    }
}

/** 
 * Obtiene todos los registros de error.
 * 
 * @async
 * @function fetchLogs
 * @returns {Promise<Object|null>}
 */

export const fetchLogs = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
        const res = await fetch(`${API_URL}/logs`);
        if (!res.ok) {
            const text = await res.text();
            throw new Error("Error de servidor:" + res.status + text);
        }

        const data = await res.json();
        return data.content;
    } catch (err) {
        console.error("Error al hacer fetch: ", err);
        return null;
    }

}