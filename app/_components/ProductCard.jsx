import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  return (
    <Link
      href={`/product_details/${product.id}`}
      className="border border-gray-200 hover:border-secondary transition-all hover:shadow-md rounded-lg cursor-pointer pb-2"
    >
      <Image
        src={product.attributes.banner.data.attributes.url}
        alt="product"
        width={400}
        height={350}
        className="rounded-t-lg h-[100px] sm:h-[170px] object-cover"
      />
      <div className="px-2 mt-4">
        <h2 className="font-medium text-sm line-clamp-1">
          {product?.attributes?.title}
        </h2>
        <div className="flex justify-between items-center mt-1">
          <p className="text-[12px] text-gray-400">
            {product.attributes.category}
          </p>
          <p className="font-bold text-[15px]">{product.attributes.price}$</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
