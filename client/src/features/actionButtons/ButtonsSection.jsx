import { ActionButton } from "@/features/actionButtons/ActionButton";
import { fetchTypes } from "@/services/types";

export const ButtonsSection = async () => {
    const data = await fetchTypes();
    return (
        <ActionButton data={data} />
    )
}