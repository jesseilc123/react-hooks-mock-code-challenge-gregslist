import React, { useState } from "react";

function Search( {setItems, initial} ) {
  const [search, setSearch] = useState("")

  function filterItem(){
    if(!search) return initial

    return initial.filter((item) => item.description.toLowerCase().includes(search.toLowerCase()))
  }

  function handleSubmit(e) {
    e.preventDefault();
    setItems(filterItem)
  }

  function onSearchChange(e){
    setSearch(() => e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={onSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
