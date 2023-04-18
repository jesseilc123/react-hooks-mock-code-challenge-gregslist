import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [initial, setInitial] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((response) => response.json())
      .then((data) => setItems(data) || setInitial(data))
  }, [])

  return (
    <div className="app">
      <Header setItems={setItems} initial={initial}/>
      <ListingsContainer items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
