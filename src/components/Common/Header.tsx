/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Search,
  ShoppingBag,
  UserRound,
  X,
} from "lucide-react";
import { RiMenu2Fill } from "react-icons/ri";
import { getCartLength } from "../UtlitiFunction/getCartLength";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <motion.header
      className={`${
        scrolling
          ? "bg-[#0B0F12] fixed dark:bg-slate-800 w-full z-40"
          : "w-full z-40 fixed bg-[#0B0F12]"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full container mx-auto py-3 flex justify-between items-center md:px-0 px-0">
        <div className="w-full flex justify-between items-center md:px-0 px-2">
          <div className="flex-1 flex justify-start items-center md:pl-0 pl-3">
            <div className="flex items-center gap-3">
              <Link
                href={"/"}
                className="text-2xl md:text-3xl font-bold vigaRegular text-white"
              >
                ECar
              </Link>
            </div>
          </div>

          {/* Second Div */}
          <div className="  flex-1 flex justify-end items-center">
            <div className="flex justify-center items-center text-center gap-3">
              <h1 className="text-lg  cursor-pointer text-white">Home</h1>
              <h1 className="text-lg  cursor-pointer text-white">About</h1>
              <h1 className="text-lg  cursor-pointer text-white">Popular</h1>
              <h1 className="text-lg  cursor-pointer text-white">Feature</h1>
            </div>
          </div>
          <button className="md:hidden text-slate-800" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <RiMenu2Fill size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden md:hidden"
      >
        <div className="flex flex-col items-center bg-white dark:bg-slate-800 pb-32 space-y-3">
          <div className="flex justify-center items-center text-center gap-3">
            <h1 className="text-lg  cursor-pointer text-white">Home</h1>
            <h1 className="text-lg  cursor-pointer text-white">About</h1>
            <h1 className="text-lg  cursor-pointer text-white">Popular</h1>
            <h1 className="text-lg  cursor-pointer text-white">Feature</h1>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
