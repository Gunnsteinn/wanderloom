// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import TopBookCategories from "./top-book-categories";
import BackToSchoolBooks from "./back-to-school-books";
import OtherBookOffers from "./other-book-offers";
import CarouselFeatures from "./carousel-features";
import GetYourBookFromUs from "./get-your-book-from-us";
import Faq from "./faq";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <RevealOnScroll>
        <Hero />
      </RevealOnScroll>

      <RevealOnScroll>
        <TopBookCategories />
      </RevealOnScroll>

      {/* <RevealOnScroll>
        <TopBookCategories />
      </RevealOnScroll> */}

      <RevealOnScroll>
        <BackToSchoolBooks />
      </RevealOnScroll>

      <RevealOnScroll>
        {/*<OtherBookOffers />*/}
        <CarouselFeatures />
      </RevealOnScroll>

      <RevealOnScroll>
        <GetYourBookFromUs />
      </RevealOnScroll>

      <RevealOnScroll>
        <Faq />
      </RevealOnScroll>

      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
    </>
  );
}
