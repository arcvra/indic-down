export const LogRow = ({ type, severity, createdAt }) => {
    return (
        <tr>
            <th>
                {type}
            </th>
            <th>
                {severity}
            </th>
            <th>
                {createdAt}
            </th>
        </tr>
    )
}