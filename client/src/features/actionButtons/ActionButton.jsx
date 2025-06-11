"use client"
import { Button } from "@/components/Button"
import { postLog } from "@/services/postLog";


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
    const handleClick = async (itemId) => {
        try {
            await postLog(itemId);
        } catch (err) {
            console.error("Error: ", err.message);
        }
    }

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
                />
            ))}
        </>
    )
}