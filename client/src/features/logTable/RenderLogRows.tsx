"use client"
import { LogRow } from "@/components/LogRow";
import { APILogResponse, LogData } from "@/services/logs";
import { parseTimestamp } from "@/lib/parseTimestamp";

interface APILogState {
    logs: APILogResponse
}

export const RenderLogRows = ({ logs }: APILogState) => {

    return (
        <>
            {logs.content?.map((log: LogData) => {
                const { date, time } = parseTimestamp(log.created_at);
                return (
                    <LogRow
                        key={log.id}
                        type={log.type}
                        severity={log.severity}
                        date={date}
                        time={time}
                    />
                )
            })}
        </>
    )
}