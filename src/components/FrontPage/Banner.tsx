"use client";
import { Thermometer, BatteryCharging, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-full md:h-[100vh] bg-[#0B0F12]">
      <div className="w-full h-[100vh] container mx-auto md:px-0 px-4  pt-24 flex flex-col items-center justify-center text-center">
        <div className="space-y-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold"
          >
            Chose The Best Car
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl font-extrabold"
          >
            Porsche Mission E
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-3xl"
          >
            Electric Car
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8"
        >
          <Image
            src={
              "https://github.com/bedimcode/responsive-car-website/blob/main/assets/img/home.png?raw=true"
            }
            alt="Porsche Mission E"
            width={400}
            height={400}
            className="rounded-xl"
          />
        </motion.div>

        <div className="mt-8 grid grid-cols-3 gap-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="p-6 rounded-lg flex flex-col items-center"
          >
            <Thermometer size={40} />
            <h1 className="text-2xl font-bold mt-4">24</h1>
            <h2 className="text-lg">Temperature</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className=" p-6 rounded-lg flex flex-col items-center"
          >
            <MapPin size={40} />
            <h1 className="text-2xl font-bold mt-4">264</h1>
            <h2 className="text-lg">Miles</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className=" p-6 rounded-lg flex flex-col items-center"
          >
            <BatteryCharging size={40} />
            <h1 className="text-2xl font-bold mt-4">94%</h1>
            <h2 className="text-lg">Battery</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
