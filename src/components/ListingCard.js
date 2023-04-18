import React, { useState } from "react";

function ListingCard({ item, onDelete}) {
  const { id, description, image, location } = item
  const [star, setStar] = useState(true)

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDelete(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {star ? (
          <button className="emoji-button favorite active" onClick={()=> setStar(!star)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=> setStar(!star)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
