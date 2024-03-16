import React from "react";
import { Link } from "react-router-dom";
const Card = ({ id, restaurant }) => {
  return (
    <Link to={`/restaurant/${id}`}>
      <div className="w-60 h-full p-3 bg-green-100 shadow-lg hover:bg-orange-500 rounded-lg">
        <div>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`}
            alt="restaurant card"
            className="rounded-lg w-56 h-60"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold py-2">{restaurant.name}</h1>
          <p className="text-lg">
            <span className="item-dd">Cuisine:</span>{" "}
            {restaurant.cuisines.join(" , ")}
          </p>
          <p className="item-rating">
            <span className="item-dd">Rating:</span> {restaurant.avgRating}
          </p>
          <p className="item-cost">
            <span className="item-dd">Cost :</span> {restaurant.costForTwo}
          </p>
        </div>
      </div>
    </Link>
  );
};
export const promotedCard = (Card) => {
  return ({ id, restaurant }) => {
    return (
      <div>
        <label className="absolute bg-orange-400 text-black p-2 m-2 rounded-lg text-white">
          High Rated
        </label>
        <Card id={id} restaurant={restaurant} />
      </div>
    );
  };
};
export default Card;
