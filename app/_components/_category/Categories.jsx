import Image from "next/image";
import React from "react";
import CategoriesSkeleton from "../_skeleton/CategoriesSkeleton";

function Categories({ categoriesList }) {
  return (
    <div className="mt-8">
      <h3 className="text-green-600 font-bold text-xl mb-3">
        Shop By Category
      </h3>
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
              className="md:w-16 group-hover:scale-125 transition-all"
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
