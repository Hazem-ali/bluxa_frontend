import React from "react";
import ItemCard from "./itemCard/itemCard";

const ItemCards = ({ items, onLike }) => {
  return (
    <div className="my-8 grid md:grid-cols-4 grid-cols-2  gap-4 items-center justify-items-center">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onLike={() => onLike(item)} />
      ))}
    </div>
  );
};

export default ItemCards;
