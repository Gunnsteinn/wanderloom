"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
  CurrencyDollarIcon,
  ClipboardDocumentIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";

const FEATURES = [
  {
    icon: ClipboardDocumentIcon,
    title: "Choose the Option that Suits Your Needs",
    description:
      "Explore a range of tailored web design solutions crafted specifically for tourism and transportation agencies. Select the design that aligns perfectly with your brand identity and caters to your target audience's preferences.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Define the Payment Method",
    description:
      "Choose the payment integration that best suits your agency's requirements. Select from a variety of secure options to ensure smooth and hassle-free transactions for your clients.",
  },
  {
    icon: FaceSmileIcon,
    title: "Forget about implementation hassles",
    description:
      "Experience seamless implementation of your chosen web design, supported by our expert team every step of the way. Benefit from ongoing assistance and optimization to maximize your online presence and achieve success in the travel and transportation industry.",
  },
];

export function GetYourBookFromUs() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-16 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Get your website Easy and Fast!
        </Typography>
        {/* <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-5/12"
        >
          Book your next trip in 3 easy steps.
        </Typography> */}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default GetYourBookFromUs;
