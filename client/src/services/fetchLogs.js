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
            throw new Error("Error de servidor: " + res.status);
        }

        const data = await res.json();
        return data.content;
    } catch (err) {
        console.error("Error al hacer fetch: ", err);
        return null;
    }

}