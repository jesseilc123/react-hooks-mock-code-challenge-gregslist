import React from "react";
// import ListingCard from "./ListingCard";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, setItems }) {

  function onDelete(deletedItem){
    const updatedList = items.filter((item) => item.id !== deletedItem.id)
    setItems(updatedList)
  }

  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {items.map((item) => (
          <ListingCard key={item.id} item={item} onDelete={onDelete}/>
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
