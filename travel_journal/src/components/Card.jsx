import React from "react";
import data from "../constants/data";
import data1 from "../constants/data1";
import data2 from "../constants/data2";

export const Card = () => {
  return (
    <div className="flex flex-col flex-grow mt-12 ml-7 justify-between items-start">
      <div className="flex flex-row border-b">
        {data.map((item) => (
          <div>
            <img
              key={item.id}
              src={item.imageUrl}
              alt="img"
              className="w-80 h-96 rounded-md mt-5 ml-7 "
            />
          </div>
        ))}
        {data.map((item) => (
          <div className="flex flex-col mt-12 ml-5">
            <h1 key={item.id}>📍{item.location}</h1>
            {data.map((item) => (
              <div className="absolute pl-16">
                <a
                  key={item.id}
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
            <h1 key={item.id} className="text-4xl font-bold">
              {item.title}
            </h1>
          </div>
        ))}
        {data.map((item) => (
          <div className="my-36 -mx-28 pl-0">
            <h2 key={item.id} className="text-sm font-bold">
              {item.startDate} - {item.endDate}
            </h2>
          </div>
        ))}
        {data.map((item) => (
          <div className=" my-44 -mx-28 pl-9 ">
            <p key={item.id} className="font-light">
              {item.description1}
            </p>
            <p key={item.id} className="font-light">
              {item.description2}
            </p>
            <p key={item.id} className="font-light">
              {item.description3}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-row border-b">
        {data1.map((item) => (
          <div>
            <img
              key={item.id}
              src={item.imageUrl}
              alt="img"
              className="w-80 h-96 rounded-md mt-5 ml-7 "
            />
          </div>
        ))}
        {data1.map((item) => (
          <div className="flex flex-col mt-12 ml-5">
            <h1 key={item.id}>📍{item.location}</h1>
            {data1.map((item) => (
              <div className="absolute pl-16">
                <a
                  key={item.id}
                  href={item.googleMapsUrl}
                  className="ml-7 mb-1 text-zinc-400 font-light underline"
                >
                  View on google maps
                </a>
              </div>
            ))}
          </div>
        ))}
        {data1.map((item) => (
          <div className="my-20 -mx-20 pl-1">
            <h1 key={item.id} className="text-4xl font-bold">
              {item.title}
            </h1>
          </div>
        ))}
        {data1.map((item) => (
          <div className="my-36">
            <h2 key={item.id} className="text-sm font-bold -mx-72 pl-4">
              {item.startDate} - {item.endDate}
            </h2>
          </div>
        ))}
        {data1.map((item) => (
          <div className=" my-44 -mx-80 pl-12 ">
            <p key={item.id} className="font-light">
              {item.description1}
            </p>
            <p key={item.id} className="font-light">
              {item.description2}
            </p>
            <p key={item.id} className="font-light">
              {item.description3}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-row border-b">
        {data2.map((item) => (
          <div>
            <img
              key={item.id}
              src={item.imageUrl}
              alt="img"
              className="w-80 h-96 rounded-md mt-5 ml-7 "
            />
          </div>
        ))}
        {data2.map((item) => (
          <div className="flex flex-col mt-12 ml-5">
            <h1 key={item.id}>📍{item.location}</h1>
            {data2.map((item) => (
              <div className="absolute pl-16">
                <a
                  key={item.id}
                  href={item.googleMapsUrl}
                  className="ml-7 mb-1 text-zinc-400 font-light underline"
                >
                  View on google maps
                </a>
              </div>
            ))}
          </div>
        ))}
        {data2.map((item) => (
          <div className="my-20 -mx-20 pl-1">
            <h1 key={item.id} className="text-4xl font-bold pl-2">
              {item.title}
            </h1>
          </div>
        ))}
        {data2.map((item) => (
          <div className="my-36 mx-16">
            <h2 key={item.id} className="text-sm font-bold -mx-56 pl-0">
              {item.startDate} - {item.endDate}
            </h2>
          </div>
        ))}
        {data2.map((item) => (
          <div className=" my-44 -mx-80 pl-8 ">
            <p key={item.id} className="font-light">
              {item.description1}
            </p>
            <p key={item.id} className="font-light">
              {item.description2}
            </p>
            <p key={item.id} className="font-light">
              {item.description3}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
