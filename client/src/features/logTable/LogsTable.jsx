import { RenderLogRows } from "@/features/logTable/RenderLogRows"

export const LogsTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Severidad</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <RenderLogRows />
            </tbody>
        </table>
    )
}