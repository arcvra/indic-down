"use client"

import { Button } from "@/components/Button"

export interface PaginationBarProps {
    limit: number,
    offset: number,
    handleSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    onPrev: () => void,
    onNext: () => void;
    onFirst: () => void;
    disablePrev?: boolean;
    disableNext?: boolean;
}

export const PaginationBar = ({
    limit,
    offset,
    handleSelect,
    onPrev,
    onNext,
    onFirst,
    disablePrev,
    disableNext
}: PaginationBarProps) => {

    const buttonStyle = "bg-rose-900 mx-5 rounded-sm text-zinc-300 hover:scale-99";
    
    return (
        <div className="bg-linear-to-bl from-gray-900 to-zinc-950 py-5 flex justify-center items-center">
            <Button
                onClick={onFirst}
                ariaLabel="Ir a inicio"
                name="Botón de inicio"
                className={buttonStyle}
                disabled={disablePrev}
                children="Inicio"
            />

            <Button
                onClick={onPrev}
                ariaLabel="Ir a la anterior página"
                name="Botón anterior"
                className={buttonStyle}
                disabled={disablePrev}
                children="Anterior"
            />

            <p className="text-zinc-400"> Página {Math.floor(offset / limit) + 1} </p>

            <Button
                onClick={onNext}
                ariaLabel="Ir a la siguiente página"
                name="Botón siguiente"
                className={buttonStyle}
                disabled={disableNext}
                children="Siguiente"
            />

            <select
                value={limit} onChange={handleSelect}
                className="p-2 border-rose-800 border-1 rounded-md  bg-custom-gradient"
            >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
            </select>
        </div >
    )
}