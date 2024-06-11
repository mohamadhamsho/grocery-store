import Image from "next/image";
import React from "react";

function SingleImgBanner({ product }) {
  return (
    <div className="flex-2">
      {product.attributes?.banner?.data?.attributes?.url ? (
        <Image
          src={
            process.env.NEXT_PUBLIC_BASE_URL +
            product.attributes.banner.data.attributes.url
          }
          alt="example"
          width={400}
          height={350}
          className="text-center mx-auto h-[260px] "
        />
      ) : (
        <div className="w-[380px] h-[260px] bg-slate-200 animate-pulse"></div>
      )}
    </div>
  );
}

export default SingleImgBanner;
