function ItemContent({ id, userId, title, body }) {
    return (
        <tr key={id}>
            <td>{userId}</td>
            <td>{title}</td>
            <td>{body}</td>
        </tr>
    )
}

export default ItemContent