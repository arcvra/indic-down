export const LogRow = ({ type, severity, date, time }) => {
    return (
        <tr>
            <th>
                {type}
            </th>
            <td>
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