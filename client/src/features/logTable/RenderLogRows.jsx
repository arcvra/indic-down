import { LogRow } from "@/components/LogRow";
import { fetchLogs } from "@/services/logs";

export const RenderLogRows = async () => {
    const logs = await fetchLogs();
    return (
        <>
            {logs?.map((log) => (
                <LogRow
                    key={log.id}
                    type={log.type}
                    severity={log.severity}
                    createdAt={log.created_at}
                />
            ))}
        </>
    )
}