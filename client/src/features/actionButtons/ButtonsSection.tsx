import { ActionButton } from "@/features/actionButtons/ActionButton";
import { APItypeResponse, fetchTypes, TypeItem } from "@/services/types";

export const ButtonsSection = async () => {
    const data: APItypeResponse = await fetchTypes();

    if (!data.status || !Array.isArray(data.content) || data.content.length == 0 || data == null) {
        return (
            <section>
                <p>No hemos podido cargar la información de esta sección. Por favor, inténtalo más tarde.</p>
            </section>
        )
    }

    const issuesTypes: TypeItem[] = data.content;

    return (
        <section className="grid grid-cols-3 grid-rows-2 gap-2 max-h-[200px] md:gap-5 md:grid-cols-6 md:grid-rows-1">
            <ActionButton data={issuesTypes} />
        </section>
    )
}