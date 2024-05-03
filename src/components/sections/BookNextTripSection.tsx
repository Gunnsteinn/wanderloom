import React from "react";
import TripStepCard from "../cards/TripStepCard";

function BookNextTripSection() {
  const steps = [
    {
      id: 0,
      iconUrl: "/images/destination-icon.png",
      title: "Choose the Option that Suits Your Needs",
      description:
        "Explore a range of tailored web design solutions crafted specifically for tourism and transportation agencies. Select the design that aligns perfectly with your brand identity and caters to your target audience's preferences. ",
    },
    {
      id: 1,
      iconUrl: "/images/payment-icon.png",
      title: "Define the Payment Method",
      description:
        "Choose the payment integration that best suits your agency's requirements. Select from a variety of secure options to ensure smooth and hassle-free transactions for your clients. ",
    },
    {
      id: 2,
      iconUrl: "/images/airport-icon.png",
      title: "Enjoy Our Implementation and Support",
      description:
        "Experience seamless implementation of your chosen web design, supported by our expert team every step of the way. Benefit from ongoing assistance and optimization to maximize your online presence and achieve success in the travel and transportation industry. ",
    },
  ];
  return (
    <section className="flex justify-between flex-col md:flex-row items-center mt-[-10rem]">
      <div>
        <p className="text-lightGray text-[1.125rem] font-[600] text-left">
          Easy and Fast
        </p>
        <p className="volkhov text-[3.125rem] text-title font-[700] text-left">
          Book your next trip in 3 easy steps
        </p>

        <div className="flex flex-col gap-[3rem] mt-[1.94rem]">
          {steps.map((step) => (
            <TripStepCard
              key={step.id}
              title={step.title}
              description={step.description}
              iconUrl={step.iconUrl}
            />
          ))}
        </div>
      </div>
      <div>
        <img src="/images/next-trip.png" alt="card with a girl on a wall" />
      </div>
    </section>
  );
}

export default BookNextTripSection;
