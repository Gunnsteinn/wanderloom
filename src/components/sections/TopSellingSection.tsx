import React, { useState } from "react";

interface Destination {
  id: number;
  imageUrl: string;
  title: string;
  amount: string;
  point: number;
  duration: string;
  highlighted: boolean;
  description: string;
}

function TopSellingSection() {
  const destinations: Destination[] = [
    {
      id: 0,
      imageUrl: "/images/Selection_2646.png",
      title: "Hobby",
      amount: "$5.42k",
      point: 1.0,
      duration: "10 Days Trip",
      highlighted: false,
      description:
        "Ideal for a smooth beginning, this plan is tailored for startup travel agencies and tour operators seeking to exhibit their side projects. It presents a straightforward landing page solution that seamlessly integrates into existing processes, enabling businesses to swiftly and effectively establish their online presence.",
    },
    {
      id: 1,
      imageUrl: "/images/Selection_2647.png",
      title: "Pro",
      amount: "$4.2k",
      point: 3.0,
      duration: "12 Days Trip",
      highlighted: false,
      description:
        "Tailored for professional travel agencies and teams ready to take their operations to the next level. The Pro plan offers all the features of the Hobby plan with additional capabilities, including the integration of payment methods. This enables businesses to streamline transactions and provide a seamless booking experience for their customers.",
    },
    {
      id: 2,
      imageUrl: "/images/Selection_2651.png",
      title: "Enterprise",
      amount: "$15k",
      point: 5.0,
      duration: "28 Days Trip",
      highlighted: true,
      description:
        "Ideal for larger businesses with extensive support and compliance needs. The Enterprise plan encompasses all the features of the Pro plan while offering comprehensive support from our team. It provides advanced functionality and same-day support, enabling companies to manage their operations efficiently and effectively, while ensuring compliance and customer satisfaction.",
    },
  ];

  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);

  const handleCardClick = (destination: Destination) => {
    setSelectedDestination(destination);
  };

  const handleClosePopup = () => {
    setSelectedDestination(null);
  };

  return (
    <section id="productos">
      <p className="text-lightGray text-[1.125rem] font-[600] text-center">
        Top Selling
      </p>
      <p className="volkhov text-[3.125rem] text-title font-[700] text-center">
        Ours Products
      </p>
      {/* <div className="flex flex-col gap-4 md:flex-row items-center md:justify-between mt-19 w-full"> */}
      <div className="flex flex-col gap-4 md:flex-row items-center md:justify-between mt-19 w-full h-full">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow cursor-pointer h-full flex flex-col justify-center"
            onClick={() => handleCardClick(destination)}
          >
            <img
              className="p-3 mx-auto rounded-lg"
              src={destination.imageUrl}
              alt="product image"
              style={{ maxHeight: "300px", maxWidth: "370px" }}
            />
            <div className="px-5 pb-5">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                {destination.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {destination.description}
              </p>

              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i <= destination.point
                          ? "text-yellow-300"
                          : "text-gray-400"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3">
                  {destination.point}.0
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {selectedDestination && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="max-w-lg bg-white rounded-lg p-8 divide-y">
            <img
              src={selectedDestination.imageUrl}
              alt={selectedDestination.title}
              className="w-full rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              {selectedDestination.title}
            </h2>
            {selectedDestination.title === "Hobby" && (
              <>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      2 team members
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      20GB Cloud storage
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Integration help
                    </span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                      Sketch Files
                    </span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                      API Access
                    </span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                      Complete documentation
                    </span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                      24×7 phone & email support
                    </span>
                  </li>
                </ul>
              </>
            )}
            {selectedDestination.title === "Pro" && (
              <>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      All Hobby plan features and:
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      20GB Cloud storage
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Integration help
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Sketch Files
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      API Access
                    </span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                      Complete documentation
                    </span>
                  </li>
                  <li className="flex line-through decoration-gray-500">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 ms-3">
                      24×7 phone & email support
                    </span>
                  </li>
                </ul>
              </>
            )}
            {selectedDestination.title === "Enterprise" && (
              <>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                  <li className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      All features in Hobby, Pro and:
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      20GB Cloud storage
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Integration help
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Sketch Files
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      API Access
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      Complete documentation
                    </span>
                  </li>
                  <li className="flex">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                      24×7 phone & email support
                    </span>
                  </li>
                </ul>
              </>
            )}
            <button
              className="text-gray-500 hover:text-gray-700 mt-4"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default TopSellingSection;
