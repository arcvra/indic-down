export const postLog = async (typeId, createdAt) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    if (typeof typeId !== "number" || typeof createdAt !== "string") {
        console.error(
            "Parámetros inválidos. Se esperaba {severityId: number, createdAt: string}."
        );
        return null;
    };

    try {
        const res = await fetch(`${API_URL}/logs`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ severityId: typeId, createdAt })
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