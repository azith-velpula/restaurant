import React from "react";

const Shimmer = () => {
  const arr = Array(14).fill(" ");
  return (
    <div className="p-5 my-10 flex flex-wrap gap-2 justify-between">
      {arr.map((item, index) => (
        <div
          key={index}
          className="bg-gray-100 shadow-sm w-40 h-64 my-5 rounded-lg"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
