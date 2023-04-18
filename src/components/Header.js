import React from "react";
import Search from "./Search";

function Header({ items, setItems, initial}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setItems={setItems} initial={initial}/>
    </header>
  );
}

export default Header;
