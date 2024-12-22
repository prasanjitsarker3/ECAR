"use client";
import React from "react";
import { motion } from "framer-motion";
import { Thermometer, BatteryCharging, MapPin } from "lucide-react";

const MainBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/banerVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Centered Text */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <div className="space-y-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold"
          >
            Your Dream Car Awaits
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl font-extrabold"
          >
            Find the Perfect Match Luxury, Comfort, and Style
          </motion.h1>
        </div>
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

export default MainBanner;
