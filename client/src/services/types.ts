export interface APItypeStatus {
    status: true | false
}

export interface TypeItem {
    id: number,
    severity_id: number,
    type: string,
    severity: string,
    level: number
}

export interface APItypeResponse {
    status: boolean,
    content: TypeItem[]
}

export const fetchTypes = async (): Promise<APItypeResponse | null> => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    try {
        const res = await fetch(`${API_URL}/types`);
        if (!res.ok) {
            throw new Error("Error de servidor: " + res.status);
        }

        const data: APItypeResponse = await res.json();
        return data;
    } catch (err) {
        console.error("Error al hacer fetch: ", err);
        return null;
    }
}