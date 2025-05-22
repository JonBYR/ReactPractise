import './../App.css';
 
const Table = (props ) => {
 
  const columns = Object.keys(props.data[0]);

  return (
    <>
    <section >
      <h2 id={props.title}>{props.title}</h2>
      <table className="table table-hover text-light bg-primary">
        <caption>{props.caption}</caption>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </th>
            ))}
 
          </tr>
        </thead>
        <tbody>
          {
            props.data.map((row) =>
              <tr key={row.id}>
                { columns.map((col) => (
                  <td key={col}>{row[col]}</td>
                ))}
              </tr>
            )}
        </tbody>
      </table>
    </section>
    </>
  );
};
 
 
export default Table;