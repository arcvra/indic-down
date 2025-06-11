"use client"
import { Button } from "@/components/Button"
import { postLog } from "@/services/postLog";

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