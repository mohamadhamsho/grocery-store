import React from "react";
import { ShoppingCart, BadgeCheck } from "lucide-react";
import ProductInfoSkeleton from "../_skeleton/ProductInfoSkeleton";

function SingleProdInfo({ product }) {
  return (
    <div className="flex-1">
      {product?.attributes ? (
        <div>
          <h2 className="font-bold text-3xl line-clamp-1">
            {product?.attributes?.title}
          </h2>
          <p className="text-[14px] text-gray-400">
            {product?.attributes?.category}
          </p>
          <p className="">
            {product?.attributes?.description[0]?.children[0]?.text}
          </p>
          <div className="flex items-center gap-2 pt-2">
            <BadgeCheck color="#080" size={18} />
            <p className="text-sm text-gray-400">
              Eligible for instant delivery
            </p>
          </div>
          <p className="py-2 text-primary font-bold text-2xl">
            {product?.attributes?.price}$
          </p>
          <div className="w-full md:w-56 flex justify-center items-center gap-2 bg-primary hover:bg-secondary text-center text-white py-3 rounded-md font-bold cursor-pointer">
            <ShoppingCart />
            <span>add to cart</span>
          </div>
        </div>
      ) : (
        // <div className="w-[380px] h-[260px] bg-slate-200 animate-pulse"></div>
        <ProductInfoSkeleton />
      )}
    </div>
  );
}

export default SingleProdInfo;
