/**
 * Añade nuevo error log según según el typeId del issue a notificar
 * @async 
*/

interface APINewLogResponse {
    typeId: number
}

export const postLog = async (typeId: number): Promise<APINewLogResponse | null> => {
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
            body: JSON.stringify({ typeId })
        });

        if (!res.ok) {
            const errorMessage = `Error ${res.status}: ${res.statusText}`;
            throw new Error(errorMessage);
        }

        const data: APINewLogResponse = await res.json();
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