"use client"
import useSWR from "swr";
import { LogRow } from "@/components/LogRow";
import { fetchLogs, LogData } from "@/services/logs";
import { TbMoodLookDown, TbMoodSadDizzy, TbMoodHappy } from "react-icons/tb";
import { parseTimestamp } from "@/lib/parseTimestamp";

export const RenderLogRows = () => {

    const { data: logs, error, isLoading } = useSWR("logs", fetchLogs);

    if (isLoading) return (
        <div>
            <p>Cargando registros</p>
            <TbMoodLookDown className="size-8" />
        </div>
    )

    if (!logs || !logs.status || error) return (
        <div>
            <p>No ha sido posible cargar los registros.</p>
            <p>Por favor, inténtalo más tarde.</p>
            <TbMoodSadDizzy className="size-8" />
        </div>
    )


    if (logs.content.length === 0) return (
        <div>
            <p>No hay registros aún.</p>
            <TbMoodHappy className="size-8" />
        </div>
    )

    return (
        <>
            {logs.content?.map((log: LogData) => {
                const { date, time } = parseTimestamp(log.created_at);
                return (
                    <LogRow
                        key={log.id}
                        type={log.type}
                        severity={log.severity}
                        date={date}
                        time={time}
                    />
                )
            })}
        </>
    )
}