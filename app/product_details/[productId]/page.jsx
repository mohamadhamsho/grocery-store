"use client";
import ProductList from "@/app/_components/ProductList";
import BreadCumbs from "@/app/_components/_product_details/BreadCumbs";
import SingleImgBanner from "@/app/_components/_product_details/SingleImgBanner";
import SingleProdInfo from "@/app/_components/_product_details/SingleProdInfo";
import ProductsApis from "@/app/_utils/ProductsApis";
import React, { useEffect, useState } from "react";

function page({ params }) {
  const [product, setProduct] = useState({});
  const [productsByCategory, setProductsByCategory] = useState([]);
  const getProductByID_ = () => {
    ProductsApis.getProductByID(params?.productId).then((res) => {
      console.log(res.data.data);
      setProduct(res.data.data);
      getProductByCategory_(res.data.data);
    });
  };
  const getProductByCategory_ = (product) => {
    ProductsApis.getProductByCategory(product?.attributes?.category).then(
      (res) => {
        setProductsByCategory(res.data.data);
      }
    );
  };
  useEffect(() => {
    getProductByID_();
  }, [params?.productId]);
  return (
    <div className="container mx-auto pt-28 px-4 md:px-6">
      <BreadCumbs product={product} />
      {/* product details container */}
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-4">
        {/* product details container Image LEFT */}
        <SingleImgBanner product={product} />
        {/*  product details content RIGHT */}
        <SingleProdInfo product={product} />
      </div>
      <div className="mt-32">
        <h3 className="py-1 text-xl">Similar Products</h3>
        <ProductList productList={productsByCategory} />
      </div>
    </div>
  );
}

export default page;
