import React from "react";

const Item = ({ item }) => {
  const { name, price, description, imageId } = item?.card?.info;
  const IMAGE_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="flex bg-white p-4 m-2 rounded-xl justify-between">
      <div className="">
        <p className="font-bold text-lg">{name}</p>
        <p className="font-bold">Cost : {price / 100}</p>
        <p className="italic">{description.slice(0, 100)}</p>
      </div>
      <img
        src={IMAGE_URL + imageId}
        className="w-40 rounded-lg"
        alt="restaurantitem"
      />
    </div>
  );
};

export default Item;
