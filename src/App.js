import "./App.css";
import SeachBar from "./SearchBar";
import { useState } from "react";
import AddItem from "./AddItem";
import ItemsDisplay from "./ItemsDisplay";

function App() {
  const [filter, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    let items = data["items"];
    item.id = items.length;
    items.push(item);
    setData({ items: items });
    console.log(data);
  };

  return (
    <div className="App">
      <SeachBar updateSearchParams={updateFilters}></SeachBar>
      <ItemsDisplay items={data["items"]} />
      <AddItem addItem={addItemToData} />
    </div>
  );
}

export default App;
