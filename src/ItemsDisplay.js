function ItemsDisplay(props) {
  return (
    <div>
      {props.items.map((item) => {
        return (
          <div key={item.id}>
            <p>Id: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Brand: {item.brand}</p>
            <p>Type: {item.type}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ItemsDisplay;
