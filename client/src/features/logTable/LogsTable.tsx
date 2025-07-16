"use client"
import useSWR from "swr";
import { fetchLogs } from "@/services/logs";

import { RenderLogRows } from "@/features/logTable/RenderLogRows"
import { APILogResponse } from "@/services/logs";

import { TbMoodSadDizzy, TbMoodHappy, TbMoodLookDown } from "react-icons/tb";


export interface APILogState {
    error: boolean,
    isLoading: boolean,
    logs: APILogResponse,
}

export const LogsTable = () => {

    const { data: logs, error, isLoading } = useSWR("logs", fetchLogs);

    if (isLoading) return (
        <section>
            <p>Cargando registros</p>
            <TbMoodLookDown className="size-8" />
        </section>
    );

    if (error || !logs.status) return (
        <section>
            <p>No ha sido posible cargar los registros.</p>
            <p>Por favor, inténtalo más tarde.</p>
            <TbMoodSadDizzy className="size-8" />
        </section>
    );


    if (logs.content.length === 0) return (
        <section>
            <p>No hay registros aún.</p>
            <TbMoodHappy className="size-8" />
        </section>
    )

    return (
        <div id="log-table">
            <table>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Severidad</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <RenderLogRows
                        logs={logs}
                    />
                </tbody>
            </table>
        </div>
    )
}