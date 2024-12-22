"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ViewProductInformation from "@/components/Common/ViewProductInformation";
import { Rating } from "@smastrom/react-rating";
import { Progress } from "@nextui-org/react";
import {
  carDataArray,
  productInformationData,
} from "@/components/UtlitiFunction/ProductData";
import { getCartLength } from "@/components/UtlitiFunction/AddProduct";

const ProductView = ({ params }: { params: any }) => {
  const cardId = parseInt(params.id, 10);

  const carData = carDataArray.find((car) => car.id === cardId);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    if (carData) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carData.imageUrl.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const handlePrev = () => {
    if (carData) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? carData.imageUrl.length - 1 : prevIndex - 1
      );
    }
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const [activeTab, setActiveTab] = useState(2);

  const handleTabChange = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className=" bg-[#0B0F12] text-white">
      <div className="w-full container mx-auto md:px-0 px-4">
        <h1 className="font-medium text-lg  py-3 pt-20">
          Feature Product / <span className="text-white">New Arrival</span>
        </h1>

        <div className="grid grid-cols-12 gap-6 md:gap-12">
          {/* Image & Thumbnail Section */}
          <div className="col-span-12 md:col-span-6 flex flex-col items-center p-3">
            <div className="relative w-full flex items-center justify-center overflow-hidden">
              {/* Left Button */}
              <button
                onClick={handlePrev}
                className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 h-8 w-8 z-10 flex justify-center items-center border border-white text-white rounded-full"
              >
                <ArrowLeft />
              </button>

              {/* Product Image */}
              <div className="h-64 md:h-80 2xl:h-96 w-full relative flex justify-center items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={
                      carData
                        ? carData.imageUrl[currentImageIndex]
                        : "placeholder"
                    }
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-auto h-full flex justify-center items-center"
                  >
                    {carData && (
                      <Image
                        src={carData.imageUrl[currentImageIndex]}
                        alt="Product"
                        width={500}
                        height={500}
                        className="rounded-lg h-full w-auto max-h-full"
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Button */}
              <button
                onClick={handleNext}
                className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 z-10 flex justify-center items-center border border-white text-white rounded-full"
              >
                <ArrowRight />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex mt-4 space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide">
              {carData &&
                carData.imageUrl.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`cursor-pointer transition-all ${
                      index === currentImageIndex
                        ? "border-2 border-[#8f71e1] bg-[#ece9fe] rounded-lg"
                        : "border-2 border-transparent bg-[#ece9fe] rounded-lg"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={80}
                      height={80}
                      className="rounded-lg h-16 w-16"
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="col-span-12 md:col-span-6 px-4 md:px-6">
            <ViewProductInformation carData={carData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
