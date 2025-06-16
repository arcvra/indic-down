"use client"
import useSWR from "swr";
import { LogRow } from "@/components/LogRow";
import { fetchLogs } from "@/services/logs";

export const RenderLogRows = () => {
    const { data: logs, error, isLoading } = useSWR("logs", fetchLogs);

    if (isLoading) return <p>Cargando registros...</p>;
    if (error) return <p>No ha sido posible cargar los registros :/</p>

    if (!logs || logs.length === 0) return <p> No hay registros aún. </p>;


    return (
        <>
            {logs?.map((log) => (
                <LogRow
                    key={log.id}
                    type={log.type}
                    severity={log.severity}
                    createdAt={log.created_at}
                />
            ))}
        </>
    )
}