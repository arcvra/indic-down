"use client"
import useSWR from "swr";
import { useState } from "react";
import { fetchLogs } from "@/services/logs";

import { RenderLogRows } from "@/features/logTable/RenderLogRows"
import { APILogResponse } from "@/services/logs";

import { TbMoodSadDizzy, TbMoodHappy, TbMoodLookDown } from "react-icons/tb";
import { PaginationBar } from "../pagination/PaginationBar";


export interface APILogState {
    error: boolean,
    isLoading: boolean,
    logs: APILogResponse,
}

export const LogsTable = () => {

    const [limit, setLimit] = useState(20);
    const [offset, setOffset] = useState(0);

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLimit(Number(e.target.value));
        setOffset(0);
    };

    const handlePrev = () => setOffset(Math.max(0, offset - limit));
    const handleNext = () => setOffset(offset + limit);
    const handleFirst = () => setOffset(0);

    const { data: logs, error, isLoading } = useSWR(
        ["logs", limit, offset],
        () => fetchLogs({ limit, offset })
    );

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
            <PaginationBar
                limit={limit}
                offset={offset}
                handleSelect={handleSelect}
                onPrev={handlePrev}
                onNext={handleNext}
                onFirst={handleFirst}
                disablePrev={offset === 0}
                disableNext={logs.content.length < limit}
            />
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
            <PaginationBar
                limit={limit}
                offset={offset}
                handleSelect={handleSelect}
                onPrev={handlePrev}
                onNext={handleNext}
                onFirst={handleFirst}
                disablePrev={offset === 0}
                disableNext={logs.content.length < limit}
            />
        </div>
    )
}