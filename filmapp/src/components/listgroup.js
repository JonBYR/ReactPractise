const ListGroup = (props) => {
    const arr = props.names.map((n) => <li className = "list-group-item">{n}</li>);
    return (
        <ul className="list-group">
            {arr}
        </ul>
    );
}
export default ListGroup;