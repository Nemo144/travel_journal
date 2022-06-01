import React from "react";
import data from "../constants/data";

export const Card = () => {
  return (
    <div className="flex flex-col flex-grow mt-12 border-b ml-7 justify-between items-start">
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
          <div className="flex flex-col mt-12 ml-5">
            <h1>📍{item.location}</h1>
            {data.map((item) => (
              <div className="absolute pl-16">
                <a
                  href={item.googleMapsUrl}
                  className="ml-2 mb-1 text-zinc-400 font-light underline"
                >
                  View on google maps
                </a>
              </div>
            ))}
          </div>
        ))}
        {data.map((item) => (
          <div className="my-20 -mx-16 pl-2">
            <h1 className="text-4xl font-bold">{item.title}</h1>
          </div>
        ))}
        {data.map((item) => (
          <div className="my-36 -mx-28 pl-0">
            <h2 className="text-sm font-bold">
              {item.startDate} - {item.endDate}
            </h2>
          </div>
        ))}
        {data.map((item) => (
          <div className=" my-44 -mx-28 pl-9 ">
            <p className="font-light">{item.description1}</p>
            <p className="font-light">{item.description2}</p>
            <p className="font-light">{item.description3}</p>
          </div>
        ))}
      </div>

      {/* <div className="flex flex-row">
        {data.map((item) => (
          <div>
            <img
              src={item.imageUrl1}
              alt="img"
              className="w-80 h-96 rounded-md mt-5 ml-7 "
            />
          </div>
        ))}
        {data.map((item) => (
          <div className="flex flex-col mt-12 ml-5">
            <h1>📍{item.location1}</h1>
            {data.map((item) => (
              <div className="absolute pl-16">
                <a
                  href={item.googleMapsUrl1}
                  className="ml-2 mb-1 text-zinc-400 font-light underline"
                >
                  View on google maps
                </a>
              </div>
            ))}
          </div>
        ))}
        {data.map((item) => (
          <div className="my-20 -mx-16 pl-2">
            <h1 className="text-4xl font-bold">{item.title1}</h1>
          </div>
        ))}
        {data.map((item) => (
          <div className="my-36 -mx-28 pl-0">
            <h2 className="text-sm font-bold">
              {item.startDate1} - {item.endDate1}
            </h2>
          </div>
        ))}
        {data.map((item) => (
          <div className=" my-44 -mx-28 pl-9 ">
            <p className="font-light">{item.description4}</p>
            <p className="font-light">{item.description5}</p>
            <p className="font-light">{item.description6}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};
