export const LogRow = ({ type, severity, createdAt }) => {
    return (
        <tr>
            <th>
                {type}
            </th>
            <td>
                {severity}
            </td>
            <td>
                {createdAt}
            </td>
        </tr>
    )
}