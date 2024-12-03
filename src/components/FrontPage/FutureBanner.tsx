"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const FutureBanner = () => {
  return (
    <div className="bg-[#0B0F12] py-16">
      <div className="w-full container mx-auto md:px-0 px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-white">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="col-span-11 md:col-span-6 flex justify-center items-center"
          >
            <Image
              src={
                "https://github.com/bedimcode/responsive-car-website/blob/main/assets/img/about.png?raw=true"
              }
              alt="Future Technology"
              width={500}
              height={500}
              className="rounded-xl"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="col-span-11 md:col-span-6 flex flex-col justify-center space-y-6"
          >
            <h1 className="text-4xl font-bold">Machines With</h1>
            <h1 className="text-5xl font-extrabold">Future Technology</h1>
            <p className="text-lg">
              Discover how cutting-edge technology is shaping the future of
              machines. Embrace innovation, speed, and efficiency like never
              before.
            </p>
            <button className="bg-blue-800 w-44 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Know More
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FutureBanner;
