"use client"
import { Button } from "@/components/Button"
import { postLog } from "@/services/postLog";
import { useState } from "react";

export const ActionButton = ({ data }) => {
    const [types, setTypes] = useState(data);

    const handleClick = async (itemId) => {
        try {
            const result = await postLog(itemId);
        } catch (err) {
            console.error("Error: ", err.message);
        }
    }

    return (
        <>
            {types?.map((item) => (
                <Button
                    key={item.id}
                    ariaLabel="potato"
                    onClick={() => handleClick(item.id)}
                    className="bg-gradient-to-tr from-zinc-800 to-transparent border-[1px] border-zinc-700 rounded-md text-sm transition-transform hover:scale-95 ease-in-out cursor-pointer"
                    name={item.type}
                    id={item.id}
                    title={item.type}
                />
            ))}
        </>
    )
}