"use client";

import Image from "next/image";
import { Typography, Carousel } from "@material-tailwind/react";

export function CarouselFeatures() {
  return (
    <div className="flex justify-center align-middle place-items-center mb-10">
      <div className="flex absolute justify-center align-middle place-items-center z-10 w-full">
        <div className="w-3/4 text-center md:w-2/4">
          <h1 className="text-white mb-4 text-3xl md:text-4xl lg:text-5xl">
            Are you ready?
          </h1>
          <h2 className="text-white ">
            We know how to make the most suitable option for you,
            following your company ideals and style
          </h2>
        </div>
      </div>

      <Carousel
        className="rounded-xl w-9/12 h-96 m-auto mt-10 mb-10 z-0 opacity-80"
        transition={{ duration: 2 }}
        autoplay={true}
        loop={true}
        prevArrow={()=>{}}
        nextArrow={()=>{}}
        placeholder="Loading..."
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="relative h-full w-full">
          <Image
            src="/image/carousel/photo-8.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
            fill
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/image/carousel/photo-2.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
            fill
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/image/carousel/photo-6.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
            fill
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/image/carousel/photo-9.jpg"
            alt="image 4"
            className="h-full w-full object-cover"
            fill
          />
        </div>
        <div className="relative h-full w-full">
          <Image
            src="/image/carousel/photo-5.jpg"
            alt="image 5"
            className="h-full w-full object-cover"
            fill
          />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselFeatures;
