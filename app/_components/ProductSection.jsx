"use client";
import { useEffect, useState } from "react";
import ProductsApis from "../_utils/ProductsApis";
import ProductList from "./ProductList";
import MainTitle from "./MainTitle";

function ProductSection() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getLatestProducts_();
  }, []);
  const getLatestProducts_ = () => {
    ProductsApis.getLatestProducts().then((res) => {
      setProductList(res.data.data);
    });
  };

  return (
    <div className="px-4 md:px-6">
      <MainTitle />
      <ProductList productList={productList} />
    </div>
  );
}

export default ProductSection;
