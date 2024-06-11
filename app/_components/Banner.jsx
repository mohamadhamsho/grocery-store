"use client";

import { useEffect, useState } from "react";
import ProductsApis from "../_utils/ProductsApis";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

function Banner() {
  const [sliderList, setSliderList] = useState([]);
  useEffect(() => {
    getSliders_();
  }, []);
  const getSliders_ = async () => {
    await ProductsApis.getSliders().then((res) => {
      setSliderList(res.data.data);
    });
  };
  return (
    <Carousel
      className="mt-8"
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
    >
      <CarouselContent>
        {sliderList.length === 0 ? (
          <div className="w-full h-[200px] md:h-[600px] animate-pulse bg-slate-200 rounded-2xl"></div>
        ) : (
          sliderList.map((slide, index) => (
            <CarouselItem key={index}>
              <Image
                src={slide?.attributes?.image?.data?.attributes?.url}
                alt=""
                width={1000}
                height={400}
                className="w-full h-[200px] md:h-[600px] object-cover rounded-2xl"
              />
            </CarouselItem>
          ))
        )}
      </CarouselContent>
      {/* <CarouselPrevious className={"ml-4"} />
      <CarouselNext className={"mr-4"} /> */}
    </Carousel>
  );
}

export default Banner;
