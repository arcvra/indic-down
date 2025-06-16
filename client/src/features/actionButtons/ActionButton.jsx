"use client"
import { mutate } from "swr";
import { Button } from "@/components/Button"
import { postLog } from "@/services/logs";
import { useState, useRef, useEffect } from "react";


/**
 * Componente ActionButton
 *
 * Renderiza una lista de botones de acción, uno por cada tipo de error recibido en el array `data`
 * Al hacer clic en un botón, se ejecuta la función asíncrona `postLog` con el `id` del elemento correspondiente
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Array<{id: string|number, type: string}>} props.data - Array de objetos que contienen la información de los tipos de error
 *   Cada objeto debe tener al menos las propiedades:
 *     - id: Identificador único del tipo de error
 *     - type: Nombre del tipo de error
 * @returns {JSX.Element} Una lista de botones que permiten notificar el tipo de error seleccionado
 */

export const ActionButton = ({ data }) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const timerRef = useRef(null);

    const startCooldown = () => {
        if (timerRef.current) return;

        setIsDisabled(true);

        timerRef.current = setTimeout(() => {
            setIsDisabled(false);
            timerRef.current = null;
        }, 3000);
    };

    const handleClick = async (itemId) => {
        if (isDisabled == true) return;

        try {
            await postLog(itemId);
            mutate("logs");
        } catch (err) {
            console.error("Error: ", err.message);
        } finally {
            startCooldown();
        }
    }

    useEffect(() => {
        return () => timerRef.current && clearTimeout(timerRef.current);
    }, []);

    return (
        <>
            {data?.map((item) => (
                <Button
                    key={item.id}
                    ariaLabel={`Notificar ${item.type}`}
                    onClick={() => handleClick(item.id)}
                    className="bg-gradient-to-tr from-zinc-800 to-transparent border-[1px] border-zinc-700 rounded-md text-sm transition-transform hover:scale-95 ease-in-out cursor-pointer"
                    name={item.type}
                    id={`post-btn-${item.id}`}
                    title={item.type}
                    disabled={isDisabled}
                />
            ))}
        </>
    )
}