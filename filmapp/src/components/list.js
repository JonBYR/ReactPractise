import './../App.css'

const List = (props) => {
    if (!props.content || props.content.length === 0) return (<p>There are no items in this list</p>);
    const listItems = props.content.map(c => <li key={c.id}>{c.value}</li>);
    return (
        <>
        <section id="skills">
            <h2>{props.title}</h2>
            <ul>
                {listItems}  
            </ul>
        </section>
        </>
    );

}
export default List;


// this will work, but get an error react-dom-client.development.js:24027 Each child in a list should have a unique "key" prop.
// const List = (props) => {
//     const listItems = props.content.map(c => <li>{c}</li>);
//     return (
//         <>
//         <section id="skills">
//             <h2>{props.title}</h2>
//             <ul>
//                 {listItems}  
//             </ul>
//         </section>
//         </>
//     );

// }
// export default List;