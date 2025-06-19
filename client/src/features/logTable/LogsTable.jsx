import { RenderLogRows } from "@/features/logTable/RenderLogRows"

export const LogsTable = () => {
    return (
        <div id="log-table">
            <table>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Severidad</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    <RenderLogRows />
                </tbody>
            </table>
        </div>
    )
}