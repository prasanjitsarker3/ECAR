"use client";

import Image from "next/image";
import { useState } from "react";

const FeaturedProduct: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");
  const carData = [
    {
      id: 1,
      model: "Porsche Turbo S",
      acceleration: "3.7 Sec",
      topSpeed: "456 Km/h",
      type: "Electric",
      range: "2340",
      img: "/car1.png",
    },
    {
      id: 2,
      model: "Tesla Model S Plaid",
      acceleration: "2.1 Sec",
      topSpeed: "322 Km/h",
      type: "Electric",
      range: "6370",
      img: "/car2.png",
    },
    {
      id: 3,
      model: "Audi e-Tron GT",
      acceleration: "3.9 Sec",
      topSpeed: "245 Km/h",
      type: "Electric",
      range: "4880",
      img: "/car3.png",
    },
    {
      id: 4,
      model: "Lucid Air Dream",
      acceleration: "2.5 Sec",
      topSpeed: "270 Km/h",
      type: "Electric",
      range: "8360",
      img: "/car4.png",
    },
    {
      id: 5,
      model: "BMW i4 M50",
      acceleration: "3.9 Sec",
      topSpeed: "225 Km/h",
      type: "Electric",
      range: "5100",
      img: "/car5.png",
    },
    {
      id: 6,
      model: "Mercedes EQS 580",
      acceleration: "4.3 Sec",
      topSpeed: "210 Km/h",
      type: "Electric",
      range: "7700",
      img: "/car6.png",
    },
    {
      id: 7,
      model: "Rimac Nevera",
      acceleration: "1.9 Sec",
      topSpeed: "4120",
      type: "Electric",
      range: "547 Km",
      img: "/car7.png",
    },
    {
      id: 8,
      model: "Nio ET7",
      acceleration: "3.8 Sec",
      topSpeed: "200 Km/h",
      type: "Electric",
      range: "7000",
      img: "/car8.png",
    },
    {
      id: 9,
      model: "Ford Mustang Mach-E GT",
      acceleration: "3.5 Sec",
      topSpeed: "200 Km/h",
      type: "Electric",
      range: "5000",
      img: "/car1.png",
    },
  ];

  const filteredData =
    activeTab === "All"
      ? carData
      : activeTab === "High Range"
      ? carData.filter((car) => parseInt(car.range) > 5000)
      : activeTab === "Fast Acceleration"
      ? carData.filter((car) => parseFloat(car.acceleration) < 3.0)
      : activeTab === "High Top Speed"
      ? carData.filter((car) => parseInt(car.topSpeed) > 300)
      : carData;

  return (
    <div className="w-full container mx-auto md:px-0 px-8 py-12">
      <h1 className="vigaRegular uppercase font-medium text-xl md:text-2xl text-center text-white pb-4">
        Featured Product
      </h1>
      <div className="flex justify-center items-center space-x-4  pb-8">
        {["All", "High Range", "Fast Acceleration", "High Top Speed"].map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl ${
                activeTab === tab
                  ? " bg-white text-blue-700"
                  : " border border-white text-white"
              }`}
            >
              {tab}
            </button>
          )
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-4 text-white">
        {filteredData.map((car) => (
          <div key={car.id} className="border p-5 rounded shadow-md">
            <h2 className="text-lg font-semibold">{car.model}</h2>
            <div className=" flex justify-center items-center">
              <Image
                src={car.img}
                alt={car.model}
                width={300}
                height={300}
                className=" object-cover mb-4"
              />
            </div>

            <div className=" flex justify-between items-center pb-3">
              <p>Acceleration: {car.acceleration}</p>
              <p>Speed: {car.topSpeed}</p>
            </div>
            <button className=" border border-white rounded-full w-full py-2 ">
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
