"use client";

import React from "react";
import {
  Button,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import BookCard from "@/components/book-card";

const BOOKS = [
  {
    img: `/image/books/RectangleBig-1.svg`,
    category: "Just Starting",
    title: "Hobby",
    desc: "Ideal for a smooth beginning, this plan is tailored for startup travel agencies and tour operators seeking to exhibit their side projects. It presents a straightforward landing page solution that seamlessly integrates into existing processes, enabling businesses to swiftly and effectively establish their online presence.",
  },
  {
    img: `/image/books/RectangleBig-2.svg`,
    category: "Im doing business",
    title: "Pro",
    desc: "Tailored for professional travel agencies and teams ready to take their operations to the next level. The Pro plan offers all the features of the Hobby plan with additional capabilities, including the integration of payment methods. This enables businesses to streamline transactions and provide a seamless booking experience for their customers.",
  },
  {
    img: `/image/books/RectangleBig-3.svg`,
    category: "Lets go all in!",
    title: "Enterprise",
    desc: "Ideal for larger businesses with support and compliance needs. The Enterprise plan encompasses all the features of the Pro plan while offering support from our team. It provides advanced functionality, enabling companies to manage their operations expeditiously, while ensuring compliance and customer satisfaction.",
  },
];

const BOOKS_TABS = [
  "history",
  "law",
  "math",
  "economy",
  "business",
  "communication",
];

export function BackToSchoolBooks() {
  const [activeTab, setActiveTab] = React.useState("history");

  return (
    <section className="px-8 pt-20 pb-10">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="paragraph"
          color="blue-gray"
          className="mb-3 font-bold uppercase"
        >
          Top Selling
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-2">
          Our Products
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-9/12"
        >
          Embark on a journey of discovery with our top-selling products:
          uncover a captivating array of solutions designed to meet your
          agency&apos;s needs. Delve into the realm of automated development and
          rely on our steadfast support service.
        </Typography>
        {/* <div className="mt-20 flex items-center justify-center"> */}
        {/* <Tabs value={activeTab} className="w-full lg:w-8/12"> */}
        {/*
            <TabsHeader
              className="h-12 bg-transparent"
              indicatorProps={{
                className: "!bg-gray-900 rounded-lg",
              }}
            >
              {BOOKS_TABS.map((book) => (
                <Tab
                  key={book}
                  value={book}
                  className={`!font-medium capitalize transition-all duration-300
                    ${activeTab === book ? "text-white" : "capitalize"}
                  `}
                  onClick={() => setActiveTab(book)}
                >
                  {book}
                </Tab>
              ))}
            </TabsHeader>
            */}
        {/* </Tabs> */}
        {/* </div> */}
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {BOOKS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>

      {/*
          <div className="grid place-items-center">
            <Button className="mt-32" variant="outlined">
              Show more
            </Button>
          </div>
        */}
    </section>
  );
}

export default BackToSchoolBooks;
