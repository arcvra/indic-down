export const LogRow = ({ type, severity, date, time }) => {
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