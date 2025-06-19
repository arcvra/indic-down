"use client"
import useSWR from "swr";
import { LogRow } from "@/components/LogRow";
import { fetchLogs } from "@/services/logs";
import { TbMoodLookDown, TbMoodSadDizzy, TbMoodHappy } from "react-icons/tb";
import { parseTimestamp } from "@/lib/parseTimestamp";

export const RenderLogRows = () => {
    const { data: logs, error, isLoading } = useSWR("logs", fetchLogs);

    if (isLoading) return (
        <LogRow
            type="Cargando registros."
            severity={<TbMoodLookDown className="size-8" />}
            createdAt="--"
        />
    )

    if (error) return (
        <LogRow
            type="No ha sido posible cargar los registros."
            severity={<TbMoodSadDizzy className="size-8" />}
            createdAt="--"
        />
    )


    if (!logs || logs.length === 0) return (
        <LogRow
            type="No hay registros aún."
            severity={<TbMoodHappy className="size-8" />}
            createdAt="--"
        />
    )

    return (
        <>
            {logs?.map((log) => {
                const { date, time } = parseTimestamp(log.createdAt);
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