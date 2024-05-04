"use client";

import NavBar from "@/components/common/NavBar";
import { RevealOnScroll } from "@/components/common/RevealOnScroll";
import BookNextTripSection from "@/components/sections/BookNextTripSection";
import CategorySection from "@/components/sections/CategorySection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import LogoGroupSection from "@/components/sections/LogoGroupSection";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import TopSellingSection from "@/components/sections/TopSellingSection";
import Features from "@/components/test/Features";

export default function Home() {
  return (
    <main className="relative poppins  md:px-[9rem]">
      <NavBar />
      <div className="px-4 flex flex-col gap-[7.69rem]">
        <HeroSection />

        <div className="absolute top-0 right-0 -z-10">
          <img src="/images/blob-shape.png" alt="blob background shape" />
        </div>

        <div className="absolute top-0 left-0 -z-10">
          <img
            src="/images/top-left-gradient.png"
            alt="blob background shape"
          />
        </div>

        <RevealOnScroll>
          <div className="relative">
            {/* <CategorySection /> */}
            <Features />
            <div className="absolute top-0 right-0">
              <img src="/images/plus-group.png" alt="blob background shape" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <TopSellingSection />
        </RevealOnScroll>
        <br />
        <RevealOnScroll>
          <BookNextTripSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <TestimonialSection />
        </RevealOnScroll>

        <LogoGroupSection />

        <RevealOnScroll>
          <NewsLetterSection />
        </RevealOnScroll>
        <FooterSection />
      </div>
    </main>
  );
}
