"use client";
import { ArrowLeft, ArrowRight, Link, ThumbsUp } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ViewProductInformation, {
  customStyles,
} from "@/components/Common/ViewProductInformation";
import { Rating } from "@smastrom/react-rating";
import { Progress } from "@nextui-org/react";
import { FiShoppingBag } from "react-icons/fi";
import RelatedProduct from "@/components/FrontPage/ReleventProduct";
import { productInformationData } from "@/components/UtlitiFunction/ProductData";
import { getCartLength } from "@/components/UtlitiFunction/AddProduct";

const ProductView = () => {
  const [cartCount, setCartCount] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productData = {
    id: 1,
    img: [
      {
        id: 1,
        image:
          "https://img.freepik.com/free-photo/medium-shot-smiley-guy-with-beard-headphones_23-2148328993.jpg?ga=GA1.1.406508785.1728154460",
      },
      {
        id: 2,
        image:
          "https://img.freepik.com/free-photo/medium-shot-guy-with-red-jacket-looking-away_23-2148328996.jpg?ga=GA1.1.406508785.1728154460",
      },
      {
        id: 3,
        image:
          "https://img.freepik.com/free-photo/medium-shot-smiley-guy-with-headphones-sitting-bench_23-2148329004.jpg?ga=GA1.1.406508785.1728154460",
      },
      {
        id: 4,
        image:
          "https://img.freepik.com/free-photo/medium-shot-guy-with-headphones-copy-space_23-2148329030.jpg?ga=GA1.1.406508785.1728154460",
      },
    ],
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === productData.img.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? productData.img.length - 1 : prevIndex - 1
    );
  };
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const [activeTab, setActiveTab] = useState(2);

  const handleTabChange = (id: number) => {
    setActiveTab(id);
  };

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartLength());
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    const intervalId = setInterval(updateCartCount, 1000);

    return () => {
      window.removeEventListener("storage", updateCartCount);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="bg-[#F4F8FF]">
      <div className="w-full container mx-auto  md:px-0 px-4 ">
        <div className="primaryColorBg flex flex-col justify-center items-center p-2 md:p-6 text-white fixed top-1/2 right-0 transform -translate-y-1/2 rounded-l-xl z-10">
          <FiShoppingBag />
          <h1>Your Bug</h1>
          <h1>{cartCount}</h1>
        </div>

        <h1 className="font-medium text-lg text-slate-900 py-3 pt-20">
          Feature Product / <span className="primaryColor">New Arrival</span>
        </h1>

        <div className="grid grid-cols-12 gap-6 md:gap-12 py-8">
          {/* Image & Thumbnail Section */}
          <div className="col-span-12 md:col-span-6 flex flex-col items-center bg-[#f6f5fd] py-6 md:py-8">
            <div className="relative w-full flex items-center justify-center overflow-hidden">
              {/* Left Button */}
              <button
                onClick={handlePrev}
                className="absolute left-1 md:left-2 top-1/2 transform -translate-y-1/2 h-8 w-8 z-10 flex justify-center items-center border border-[#8f71e1] hover:bg-[#8f71e1] hover:text-white text-[#8f71e1] rounded-full"
              >
                <ArrowLeft />
              </button>

              {/* Product Image */}
              <div className="h-64 md:h-80 2xl:h-96 w-full relative flex justify-center items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={productData.img[currentImageIndex].id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute w-auto h-full flex justify-center items-center"
                  >
                    <Image
                      src={productData.img[currentImageIndex].image}
                      alt="Product"
                      width={500}
                      height={500}
                      className="rounded-lg h-full w-auto max-h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Button */}
              <button
                onClick={handleNext}
                className="absolute right-1 md:right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 z-10 flex justify-center items-center border border-[#8f71e1] hover:bg-[#8f71e1] hover:text-white text-[#8f71e1] rounded-full"
              >
                <ArrowRight />
              </button>
            </div>
            {/* Thumbnails */}
            <div className="flex mt-4 space-x-4 md:space-x-8 overflow-x-auto scrollbar-hide">
              {productData.img.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => handleThumbnailClick(index)}
                  className={`cursor-pointer transition-all ${
                    index === currentImageIndex
                      ? "border-2 border-[#8f71e1] bg-[#ece9fe] rounded-lg"
                      : "border-2 border-transparent bg-[#ece9fe] rounded-lg"
                  }`}
                >
                  <Image
                    src={item.image}
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
            <ViewProductInformation />
          </div>
        </div>

        <div className="w-full">
          {/* Tab Navigation */}
          <div className="flex items-center text-lg text-slate-700 space-x-2 md:space-x-8  pb-2">
            {productInformationData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "text-[#8f71e1] font-semibold"
                    : "text-slate-600 hover:text-[#8f71e1]"
                } pb-1`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="py-4">
            {productInformationData.map(
              (tab) =>
                activeTab === tab.id && (
                  <div key={tab.id}>
                    {tab.id === 1 && <p>{tab.details}</p>}
                    {tab.id === 2 && (
                      <div className=" grid grid-cols-12 gap6 md:gap-12">
                        <div className=" col-span-12 md:col-span-8 ">
                          <div className=" grid grid-cols-1 gap-4">
                            {tab?.users?.map((user, index) => (
                              <div key={user.id} className=" space-y-3">
                                <div className=" flex items-center gap-2">
                                  <Image
                                    src={
                                      "https://img.freepik.com/free-photo/portrait-happy-girl-standing-with-arm-hips_171337-3604.jpg?ga=GA1.1.406508785.1728154460&semt=ais_hybrid"
                                    }
                                    alt=""
                                    width={100}
                                    height={100}
                                    className=" h-12 w-12 rounded-full"
                                  />
                                  <div>
                                    <h1>{tab.name} 3days</h1>
                                    <Rating
                                      style={{ maxWidth: 120 }}
                                      value={4}
                                      readOnly
                                      itemStyles={customStyles}
                                    />
                                  </div>
                                </div>
                                <h1>Very Much !!</h1>
                                <div className=" flex items-center gap-3">
                                  <ThumbsUp size={20} />
                                  {user.like}
                                </div>
                                <div
                                  className={`border border-b border-dashed border-gray-200 ${
                                    index === tab?.users?.length - 1
                                      ? "hidden"
                                      : ""
                                  }`}
                                ></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className=" col-span-12 md:col-span-4 space-y-3">
                          <h1 className=" font-medium vigaRegular text-slate-800 text-xl ">
                            Product Review{" "}
                            <span className=" primaryColor">121 reviews</span>
                          </h1>
                          <div className=" flex items-center justify-between ">
                            <Rating
                              style={{ maxWidth: 180 }}
                              value={4}
                              readOnly
                              itemStyles={customStyles}
                            />
                            <h1>(4.0)</h1>
                          </div>
                          <div className=" border border-b border-dashed border-gray-200"></div>
                          <div className=" grid grid-cols-1 gap-3">
                            {tab?.userFeedBack?.map((feed, index) => (
                              <div
                                key={index}
                                className=" flex items-center gap-2"
                              >
                                <h1>{feed.id}</h1>
                                <Progress
                                  aria-label="Loading..."
                                  value={feed.value}
                                  classNames={{
                                    indicator: "bg-[#FFCF11]",
                                  }}
                                />
                                <h1>{feed.value}</h1>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {tab.id === 3 && <p>{tab.details}</p>}
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div>
        <RelatedProduct />
      </div>
    </div>
  );
};

export default ProductView;
