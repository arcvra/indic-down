"use client"
import { Button } from "@/components/Button"
import { useState } from "react";

export const ActionButton = ({ data }) => {
    const [types, setTypes] = useState(data);
    
    const handleClick = (e) => {
        e.preventDefault;
        alert("Click")
    }
    
    return (
        <>
            {types?.map((item) => (
                <Button
                    key={item.id}
                    ariaLabel="potato"
                    onClick={handleClick}
                    className="bg-indigo-950 transition-transform hover:scale-95 ease-in-out cursor-pointer"
                    name={item.type}
                    id={item.id}
                    title={item.type}
                />
            ))}
        </>
    )
}