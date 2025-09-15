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


export interface LogData {
    id: number,
    created_at: string,
    type: string,
    severity: string,
    level: number
}
export interface APILogResponse {
    status: boolean,
    content: LogData[],
    pagination: PaginationTypes
}

export interface PaginationTypes {
    limit: number,
    offset: number,
}

/** 
 * Obtiene los registros de errores notificados.
 * 
 * - De forma predeterminada recibe únicamente la cantidad especificada por el servidor (limit 20, offset 10)
 * @async
 */
export const fetchLogs = async ({ limit, offset }: PaginationTypes): Promise<APILogResponse | null> => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
        // Se construye la query string según los valores recibidos
        const params = new URLSearchParams();
        if (typeof limit === "number") params.append("limit", limit.toString());
        if (typeof offset === "number") params.append("offset", offset.toString());

        // Se construye la URL y se hace fetch
        const url = params.toString()
            ? `${API_URL}/logs?${params.toString()}`
            : `${API_URL}/logs`;

        const res = await fetch(url);

        if (!res.ok) {
            const text = await res.text();
            throw new Error("Error de servidor:" + res.status + text);
        }

        const data: APILogResponse = await res.json();
        return data;
    } catch (err) {
        console.error("Error al hacer fetch: ", err);
        const data: APILogResponse = { status: false, content: null, pagination: null }
        return data;
    }
}