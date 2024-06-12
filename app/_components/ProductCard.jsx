import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductCard({ product }) {
  console.log(product);
  return (
    <Link
      href={`/product_details/${product.id}`}
      className="border text-center border-gray-200 hover:border-secondary transition-all hover:shadow-md rounded-lg cursor-pointer pb-2"
    >
      <Image
        src={product.attributes.images.data[0].attributes.url}
        alt="product"
        width={200}
        height={350}
        className="mx-auto rounded-t-lg  h-auto md:h-[170px] object-cover"
      />
      <div className="px-2 mt-4">
        <h2 className="font-medium text-sm line-clamp-1">
          {product?.attributes?.name}
        </h2>
        <div className="flex justify-between items-center mt-1">
          <p className="text-[12px] text-gray-400">
            {product.attributes.category.data.attributes.name}
          </p>
          <p className="font-bold text-[15px]">${product.attributes.mrp}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
