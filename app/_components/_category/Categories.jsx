import Image from "next/image";
import React from "react";
import CategoriesSkeleton from "../_skeleton/CategoriesSkeleton";
import MainTitle from "../_mianTitle/MainTitle";

function Categories({ categoriesList }) {
  return (
    <div className="mt-8">
      <MainTitle>Shop By Category</MainTitle>
      {categoriesList.length === 0 ? <CategoriesSkeleton /> : null}

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
        {categoriesList.map((category, index) => (
          <div
            key={index}
            className="flex justify-center items-center flex-col gap-1 bg-green-100 rounded-md py-4 hover:bg-green-300 transition-all cursor-pointer group"
          >
            <Image
              src={category?.attributes?.icon?.data?.attributes?.url}
              alt="img"
              width={50}
              height={50}
              className="md:w-16 group-hover:scale-125 transition-all mb-2"
            />
            <p className="text-xs md:text-md lg:text-lg text-green-800">
              {category?.attributes?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
