"use client";
import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md"; // Lucid-style icons for arrows
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const PopularCar = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCar = () => {
    if (currentIndex < carData.length - 3) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const prevCar = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <div className="w-full container mx-auto md:px-0 px-8 py-16 pt-24">
      <h2 className="text-4xl font-bold text-center text-white">
        Choose Your Electric Car
      </h2>
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Of The Porsche Brand
      </h2>
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={prevCar}
          className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
        >
          <MdArrowBackIos size={24} />
        </button>
        <div className="grid grid-cols-3 gap-12 px-8">
          {carData.slice(currentIndex, currentIndex + 3).map((data) => (
            <Link href={`/product/${1}`} key={data.id}>
              <div className="rounded-lg overflow-hidden backdrop-blur-md bg-white/5 text-white p-5">
                <h1 className=" px-4">{data.model}</h1>
                <Image
                  src={data.img}
                  alt={data.model}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 flex justify-between items-center text-white">
                  <h3 className="text-xl font-semibold">{data.acceleration}</h3>
                  <p>{data.topSpeed}</p>
                </div>
                <div className=" flex justify-between items-center px-4">
                  <h1>$ {data.range}</h1>
                  <button className=" w-10 h-10 rounded-full flex justify-center items-center border border-white">
                    <ShoppingBag size={16} />
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <button
          onClick={nextCar}
          className="text-white bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition"
        >
          <MdArrowForwardIos size={24} />
        </button>
      </div>
    </div>
  );
};

export default PopularCar;
