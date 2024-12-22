"use client";
import React from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Progress } from "@nextui-org/react";
export const customStyles = {
  itemShapes: Star,
  activeFillColor: "#FFCF11",
  inactiveFillColor: "#E5E5E5",
};

const ViewProductInformation = ({ carData }: { carData: any }) => {
  return (
    <div className=" text-white p-6 rounded-lg shadow-md">
      {/* Product Title and Price */}
      <h2 className="text-2xl font-semibold">
        {carData.brand} {carData.model}
      </h2>
      <h3 className="text-xl mt-2">${carData.price}</h3>

      {/* Product Rating */}
      <div className="flex items-center mt-4">
        <div className=" flex items-center gap-3 md:pt-2 pb-1 ">
          <Rating
            style={{ maxWidth: 120 }}
            value={4}
            readOnly
            itemStyles={customStyles}
          />
          <h1>(50)</h1>
        </div>
        <span className="ml-2 text-sm ">(4/5)</span>
      </div>

      {/* Product Description */}
      <p className="text-sm  mt-4">{carData.description}</p>

      {/* Product Specifications */}
      <div className="mt-4">
        <h4 className="text-lg font-medium ">Specifications:</h4>
        <ul className="list-disc pl-6 text-sm ">
          <li>
            <strong>Range:</strong> {carData.specifications.range}
          </li>
          <li>
            <strong>Top Speed:</strong> {carData.specifications.topSpeed}
          </li>
          <li>
            <strong>Acceleration:</strong> {carData.specifications.acceleration}
          </li>
          <li>
            <strong>Horsepower:</strong> {carData.specifications.horsepower}
          </li>
        </ul>
      </div>

      {/* Product Features */}
      <div className="mt-4">
        <h4 className="text-lg font-medium ">Features:</h4>
        <ul className=" grid grid-cols-1 md:grid-cols-2">
          {carData.features.map((feature: any, index: any) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ViewProductInformation;
