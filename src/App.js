import "./App.css";
import SeachBar from "./SearchBar";
import { useState } from "react";

function App() {
  const [data, setData] = useState({});
  const updateData = (searchParams) => {
    setData(searchParams);
  };
  return (
    <div className="App">
      <SeachBar callback={updateData}></SeachBar>
      <p>Name: {"name" in data ? data["name"] : "No name to display"}</p>
      <p>
        Max Price: {"price" in data ? data["price"] : "No price to display"}
      </p>
      <p>Type: {"type" in data ? data["type"] : "No type to display"}</p>
      <p>Brand: {"brand" in data ? data["brand"] : "No brand to display"}</p>
    </div>
  );
}

export default App;
