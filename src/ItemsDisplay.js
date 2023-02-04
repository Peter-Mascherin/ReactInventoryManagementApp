import "./ItemsDisplay.css";

function ItemsDisplay(props) {
  return (
    <div className="container">
      <div className="row">
        <h2>Items</h2>
      </div>
      <div className="row">
        <table className="table text-white">
          <thead className="tablehead">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Brand</th>
              <th scope="col">Type</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((item) => {
              return (
                <tr key={item.id} className="tablerow">
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.brand}</td>
                  <td>{item.type}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsDisplay;
