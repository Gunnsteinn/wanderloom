"use client";

import Image from "next/image";
import { Typography, Carousel } from "@material-tailwind/react";

export function CarouselFeatures() {
  return (

<>
    <div className=" place-items-center bg-black/50 z-10">
      <div className="w-3/4 text-center md:w-2/4">
        <Typography
          variant="h1"
          color="white"
          className="mb-4 text-3xl md:text-4xl lg:text-5xl"
        >
          The Beauty of Nature
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="mb-12 opacity-80"
        >
          It is not so much for its beauty that the forest makes a claim
          upon men&apos;s hearts, as for that subtle something, that quality
          of air that emanation from old trees, that so wonderfully changes
          and renews a weary spirit.
        </Typography>
    
      </div>
    </div>
    
    <Carousel className="rounded-xl w-9/12 h-96 m-auto mt-10 mb-10 z-0"
      transition={{duration:2}}
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
        <img
          src="/image/carousel/photo-1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="/image/carousel/photo-2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
      <img
          src="/image/carousel/photo-3.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="/image/carousel/photo-4.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative h-full w-full">
        <img
          src="/image/carousel/photo-5.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
    </>
  );
}

export default CarouselFeatures;
