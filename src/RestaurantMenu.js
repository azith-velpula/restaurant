import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetData from "./utils/useGetData";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const { id } = useParams();
  const data = useGetData(id);
  const [showIndex, setShowIndex] = useState(null);
  if (data === null) return <Shimmer />;
  const categories =
    data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (item) =>
        item?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const { name, avgRating, cuisines, locality } =
    data?.data?.cards[0]?.card?.card?.info;
  return (
    <div className="bg-green-100 flex flex-col justify-center">
      <div className="bg-green-300 shadow-2xl p-10 rounded-xl m-10">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-lg">Rating : {avgRating}</p>
        <p className="text-lg">Cuisines : {cuisines.join(", ")}</p>
        <p className="text-lg">Address : {locality}</p>
      </div>
      <div className="p-5">
        {categories.map((item, index) => (
          <RestaurantCategory
            key={index}
            item={item}
            show={index === showIndex ? true : false}
            index={index}
            showIndex={showIndex}
            setShowIndex={(id) => {
              setShowIndex(id);
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantMenu;
