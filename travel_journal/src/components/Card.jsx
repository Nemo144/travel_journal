import React from "react";
import data from "../constants/data";

export const Card = () => {
  return (
    <div className="flex flex-col flex-grow justify-between items-start">
      <div className="flex flex-row">
        {data.map((item) => (
          <div>
            <img
              src={item.imageUrl}
              alt="img"
              className="w-80 h-96 rounded-md mt-5 ml-7 "
            />
          </div>
        ))}
        {data.map((item) => (
          <div className="flex mt-12 ml-5">
            <h1>📍{item.location}</h1>
            {data.map((item) => (
              <a
                href={item.googleMapsUrl}
                className="ml-2 text-zinc-400 font-light underline"
              >
                View on google maps
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
