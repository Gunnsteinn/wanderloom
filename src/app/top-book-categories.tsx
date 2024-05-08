"use client";

import React from "react";
import CategoryCard from "@/components/category-card";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: HeartIcon,
    title: "Results",
    desc: "Delivering tangible efficiency and profitability.",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: PuzzlePieceIcon,
    title: "SEO",
    desc: "Optimice and boost your website visibility",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Quality",
    desc: "Prioritizing performance, reliability, excellence."
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: UserGroupIcon,
    title: "Support",
    desc: "Ensuring seamless operations, round-the-clock assistance.",
  },
];

export function TopBookCategories() {
  return (
    <section className="container mx-auto px-8 pb-20 pt-20 lg:pt-0">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Top Services
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
          Explore our diverse range of services and embark on planning
          your journey that suits your mood, passion and curiosity.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            
            {/*
            <Typography color="white" className="text-xs font-bold opacity-50">
              up to 40% OFF
            </Typography>
            */}
            
            <Typography variant="h4" className="mt-9" color="white">
              Bestselling Products
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Our software is designed to streamline operations and 
              enhance customer experience for travel agencies and transportation services. 
            </Typography>
  
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBookCategories;
