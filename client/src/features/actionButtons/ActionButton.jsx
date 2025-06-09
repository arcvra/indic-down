"use client"
import { Button } from "@/components/Button"
import { useState } from "react";

export const ActionButton = ({ data }) => {
    const [types, setTypes] = useState(data);
    
    return (
        <>
            {types?.map((item) => (
                <Button
                    key={item.id}
                    ariaLabel="potato"
                    className="bg-indigo-950 transition-transform hover:scale-95 ease-in-out cursor-pointer"
                    name={item.type}
                    id={item.id}
                    title={item.type}
                />
            ))}
        </>
    )
}