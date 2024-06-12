"use client";
import { useEffect, useState } from "react";
import Banner from "./_components/Banner";
import ProductSection from "./_components/ProductSection";
import ProductsApis from "./_utils/ProductsApis";
import Image from "next/image";
import Categories from "./_components/_category/Categories";

export default function Home() {
  const [categoriesList, setCategoriesList] = useState([]);
  useEffect(() => {
    getCategories_();
  }, []);
  const getCategories_ = () => {
    ProductsApis.getCategories().then((res) => {
      setCategoriesList(res.data.data);
    });
  };

  return (
    <div className="container mx-auto">
      <Banner />
      <Categories categoriesList={categoriesList} />
      <ProductSection />
    </div>
  );
}
