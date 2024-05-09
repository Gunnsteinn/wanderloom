"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import MasonryGallery from "@/components/MasonryGallery";

function Hero() {
  return (
    <header id="home" className="mt-20 bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full sm:grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 sm:row-auto lg:-mt-40">
          <Typography
            variant="h1"
            color="red"
            className="text-3xl !leading-snug"
          >
            Elevate your travel agency&apos;s presence
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"
          >
            Transform with cutting-edge solutions
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
          >
            Empower your travel agency with custom web designs tailored to your brand. Say goodbye to outdated platforms and welcome a new era of digital success. Let us craft your online identity while you focus on delivering unforgettable travel experiences.
          </Typography>
        </div>
          
        <div className="row-start-2 sm:row-auto lg:-mt-40">
          <MasonryGallery />


          {/*
          className="mt-40 grid gap-6 lg:mt-0"
          <div className="grid grid-cols-3 gap-6">
            <Image
              width={768}
              height={768}
              src="/image/places/globe.jpg"
              className="rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/places/airport.jpeg"
              className="-mt-28 rounded-lg shadow-md"
              alt="flowers"
            />
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div></div>
            <Image
              width={768}
              height={768}
              src="/image/places/books.jpg"
              className="-mt-10 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/places/houses.jpg"
              className="-mt-40 rounded-lg shadow-md"
              alt="flowers"
            />
            <Image
              width={768}
              height={768}
              src="/image/places/family.jpg"
              className="-mt-14 rounded-lg shadow-lg"
              alt="flowers"
            />
          </div>
        */}
        </div>
      </div>
    </header>
  );
}
export default Hero;
