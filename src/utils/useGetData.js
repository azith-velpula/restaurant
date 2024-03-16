import { useState, useEffect } from "react";
const useGetData = (id) => {
  const [data, setData] = useState(null);
  const resID = id;
  const API_URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=";
  const fetchData = async () => {
    const response = await fetch(API_URL + resID);
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default useGetData;
