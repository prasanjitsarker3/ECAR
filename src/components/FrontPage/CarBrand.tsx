import Image from "next/image";
import React from "react";

const CarBrand = () => {
  const carBrandData = [
    {
      id: 1,
      name: "Toyota",
      image: "/Toyota.png",
    },
    {
      id: 2,
      name: "Honda",
      image: "/Honda1.png",
    },
    {
      id: 3,
      name: "Nissan",
      image: "/Nissan.png",
    },
    {
      id: 4,
      name: "Hyundai",
      image: "/Hyundai.png",
    },
    {
      id: 5,
      name: "Mercedes-Benz",
      image: "/Mercedes-Benz.png",
    },
  ];

  return (
    <div className=" w-full container mx-auto md:px-8 px-4 py-8">
      <div className=" grid grid-cols-2 md:grid-cols-5 gap-12">
        {carBrandData?.map((data) => (
          <div key={data.id} className="border border-white p-5">
            <div className=" h-40">
              <Image
                src={data.image}
                alt=""
                width={300}
                height={300}
                className=" object-cover h-full w-full"
              />
            </div>
            <h1 className=" text-center text-white text-lg">{data.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarBrand;