import React, { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ item, show, showIndex, setShowIndex, index }) => {
  const handleAccordian = () => {
    index === showIndex ? setShowIndex(null) : setShowIndex(index);
  };
  return (
    <div className="  p-4 my-5 bg-green-200  shadow-xl ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleAccordian}
      >
        <p className="text-xl font-bold">{item?.card?.card?.title}</p>
        <p className="text-2xl">🔽</p>
      </div>
      {show && (
        <div className="">
          <ItemList items={item?.card?.card?.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
