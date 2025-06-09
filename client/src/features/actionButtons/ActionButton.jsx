import { Button } from "@/components/Button"
import { fetchTypes } from "@/utils/types"

export const ActionButton = async () => {
    const types = await fetchTypes();
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