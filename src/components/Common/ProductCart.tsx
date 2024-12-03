"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "sonner";
import { addToCart } from "../UtlitiFunction/AddProduct";
import { customStyles } from "./ViewProductInformation";
import { Rating } from "@smastrom/react-rating";
import Link from "next/link";

interface ProductCartProps {
  item: any;
  discount?: boolean;
}

const ProductCart: React.FC<ProductCartProps> = ({
  item,
  discount = false,
}) => {
  const handleAddToCart = (id: number) => {
    if (addToCart(id)) {
      toast.success("Added Successfully!");
    } else {
      toast.error("Item already in cart!");
    }
  };
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.5 },
      }}
      className=" bg-white p-3 rounded-lg cursor-pointer"
    >
      <Link href={`/product/${item.id}`}>
        <div
          className={` ${
            discount
              ? " relative overflow-hidden h-72  md:h-72  2xl:h-80 secondaryColor rounded-lg"
              : "overflow-hidden h-72  md:h-72  2xl:h-80 secondaryColor rounded-lg"
          }`}
        >
          <Image
            src={item.img}
            alt={item.name}
            width={300}
            height={300}
            className=" h-full w-full object-cover"
          />
          {discount && (
            <div className=" absolute top-0 right-2 primaryColorBg px-2 text-white text-xs rounded-b-full pb-2 flex flex-col items-center">
              <h1>Up</h1>
              <h1>To</h1>
              <h1>40%</h1>
            </div>
          )}
        </div>
        {discount && (
          <div className=" flex items-center gap-3 md:pt-2 pb-1 ">
            <Rating
              style={{ maxWidth: 120 }}
              value={3}
              readOnly
              itemStyles={customStyles}
            />
            <h1>(50)</h1>
          </div>
        )}
        <div className=" flex justify-between py-2 items-center">
          <h1 className=" text-lg  text-slate-700">{item.name}</h1>
          <h1 className=" text-lg  vigaRegular text-slate-800">
            BDT {item.price}
          </h1>
        </div>
        <button
          onClick={() => handleAddToCart(item.id)}
          className="  w-full py-2 px-4 rounded-lg bg-white border border-[#8f71e1] primaryColor hover:bg-[#8f71e1] hover:text-white "
        >
          Add To Cart
        </button>
      </Link>
    </motion.div>
  );
};

export default ProductCart;
