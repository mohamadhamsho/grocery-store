import React from "react";

function ProductInfoSkeleton() {
  return (
    <div>
      <h2 className="w-[350px] md:w-[600px] h-[38px] bg-slate-200 animate-pulse"></h2>
      <p className="w-[100px] h-[21px] bg-slate-200 animate-pulse my-2"></p>
      <p className="w-full h-[96px] bg-slate-200 animate-pulse"></p>
      <div className="flex items-center gap-2 pt-2">
        <p className="w-6 h-6 rounded-full bg-slate-200 animate-pulse"></p>
        <p className="w-[168px] h-[21px] bg-slate-200 animate-pulse"></p>
      </div>
      <p className="w-[100px] h-[21px] bg-slate-200 animate-pulse my-2"></p>
      <div className="w-[368px] md:w-[200px] h-[48px] bg-slate-200 animate-pulse"></div>
    </div>
  );
}

export default ProductInfoSkeleton;
