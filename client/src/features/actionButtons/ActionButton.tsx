"use client"
import { mutate } from "swr";
import { Button } from "@/components/Button"
import { postLog } from "@/services/logs";
import { useState, useRef, useEffect } from "react";
import { TypeItem } from "@/services/types";


/**
 * Componente ActionButton
 *
 * Renderiza una lista de botones de acción, uno por cada tipo de error recibido en el array `data`
 * Al hacer clic en un botón, se ejecuta la función asíncrona `postLog` con el `id` del elemento correspondiente
 * @component
*/

interface ActionButtonProps {
    data: TypeItem[]
};

export const ActionButton = ({ data }: ActionButtonProps) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const startCooldown = () => {
        if (timerRef.current) return;

        timerRef.current = setTimeout(() => {
            setIsDisabled(false);
            timerRef.current = null;
        }, 3000);
    };

    const handleClick = async (itemId: number) => {
        if (isDisabled) return;
        setIsDisabled(true);

        try {
            await postLog(itemId);
            mutate(["logs", { limit: 20, offset: 0 }]);
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.error("Error: ", err.message);
            } else {
                console.error("Error desconocido", err);
            }
        } finally {
            startCooldown();
        }
    }

    useEffect(() => {
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current)
        };
    }, []);

    return (
        <>
            {data?.map((item) => (
                <Button
                    key={item.id}
                    ariaLabel={`Notificar ${item.type}`}
                    onClick={() => handleClick(item.id)}
                    className="bg-gradient-to-tr from-zinc-800 to-transparent border-[1px] border-zinc-700 rounded-md text-sm transition-transform hover:scale-95 ease-in-out cursor-pointer disabled:bg-zinc-950 disabled:text-zinc-800 disabled:border-zinc-900 disabled:cursor-not-allowed"
                    name={item.type}
                    disabled={isDisabled}
                >
                    {item.type}
                </Button>
            ))}
        </>
    )
}