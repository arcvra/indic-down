interface LogRowProps {
    type: string,
    severity: string,
    date: string,
    time: string
}

export const LogRow = ({ type, severity, date, time }: LogRowProps) => {
    return (
        <tr>
            <th>
                {type}
            </th>
            <td data-severity={severity}>
                {severity}
            </td>
            <td>
                {date}
            </td>
            <td>
                {time}
            </td>
        </tr>
    )
}