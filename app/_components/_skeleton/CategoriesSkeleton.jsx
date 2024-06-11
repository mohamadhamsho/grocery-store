import React from "react";

function CategoriesSkeleton() {
  let dataNum = [1, 2, 3, 4, 5, 6];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
      {dataNum.map((item, index) => (
        <div
          key={index}
          className="bg-slate-200 animate-pulse w-[100%] h-[100px] md:h-[130px] rounded-lg"
        ></div>
      ))}
    </div>
  );
}

export default CategoriesSkeleton;
