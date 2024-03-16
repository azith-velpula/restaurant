import React, { useEffect, useState } from "react";
import Card, { promotedCard } from "./Card";
import Search from "./Search";
import { API_URL } from "./utils/URL";
import Shimmer from "./Shimmer";
const Content = () => {
  const [cardData, setCardData] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    setCardData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (cardData === null) {
    return <Shimmer />;
  }
  const PromotedItemCard = promotedCard(Card);
  const handleFilter = () => {
    const data = cardData.filter((item) => item.info.avgRating > 4);
    setFilteredData(data);
  };
  const handleSearch = (searchText) => {
    const data = cardData.filter((item) =>
      item.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(data);
  };
  return (
    <main>
      <div className="flex">
        <button
          className="bg-green-300 rounded-lg p-3 font-bold m-4"
          onClick={handleFilter}
        >
          TOP RATED RESTAURANTS
        </button>
        <Search handleSearch={handleSearch} />
      </div>
      <div className="flex flex-wrap p-5 gap-6 ">
        {filteredData.length ? (
          filteredData.map((item) =>
            item.info.avgRating > 4.4 ? (
              <PromotedItemCard
                key={item.info.id}
                id={item.info.id}
                restaurant={item.info}
              />
            ) : (
              <Card
                key={item.info.id}
                id={item.info.id}
                restaurant={item.info}
              />
            )
          )
        ) : (
          <div className="fond-bold text-3xl flex justify-center items-center w-full h-96">
            <p className="italic text-lg">Opps!! No Restaurant Found...</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Content;
