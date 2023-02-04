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

  const filterData = (data) => {
    const fData = [];

    if (!filter.name && !filter.price && !filter.brand && !filter.type) {
      return data;
    }

    for (const item of data) {
      if (filter.name !== "" && item.name !== filter.name) {
        continue;
      }

      if (filter.price !== 0 && item.price !== filter.price) {
        continue;
      }

      if (filter.brand !== "" && item.brand !== filter.brand) {
        continue;
      }

      if (filter.type !== "" && item.type !== filter.type) {
        continue;
      }

      fData.push(item);
    }

    return fData;
  };

  return (
    <div className="container bg-dark text-white">
      <div className="row mt-3">
        <AddItem addItem={addItemToData} />
      </div>
      <div className="row mt-3">
        <SeachBar updateSearchParams={updateFilters}></SeachBar>
      </div>
      <div className="row mt-3">
        <ItemsDisplay items={filterData(data["items"])} />
      </div>
    </div>
  );
}

export default App;
