import { ActionButton } from "@/features/actionButtons/ActionButton";
import { fetchTypes } from "@/services/types";

export const ButtonsSection = async () => {
    const data = await fetchTypes();
    return (
        <section className="grid grid-cols-3 grid-rows-2 gap-2 max-h-[200px] md:gap-5 md:grid-cols-6 md:grid-rows-1">
            <ActionButton data={data} />
        </section>
    )
}