"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaMapMarkedAlt, FaUser, FaWrench } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import ProdukHome from "@/components/productoverview";
import { Cover } from "@/components/ui/cover";
import { HiArrowCircleDown } from "react-icons/hi";
import OurCustomers from "@/components/ourcostumer";
import "aos/dist/aos.css";
import CustomerTestimoni from "@/components/react-slickTestimoni";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const cards = [
    {
      title: "Solution",
      icon: FaWrench,
      text: "From integrated bridges to individual devices. We help you find the best solution.",
    },
    {
      title: "Customers",
      icon: FaUser,
      text: "Deepsea, inland, yachting, or other vessels—we have solutions for every market.",
    },
    {
      title: "Training",
      icon: PiStudentFill,
      text: "Sail safely with a well-prepared crew. Our trainers provide a wide range of courses.",
    },
    {
      title: "Location",
      icon: FaMapMarkedAlt,
      text: "Looking for assistance? Contact the nearest office for 24/7 support.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-radial-gradient from-darkBlue to-darkNavy">
      <div className="relative w-full h-[80vh] sm:h-[85vh] md:h-[90vh] lg:h-[97vh]">
        <video
          src="/home/intro01.mp4"
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          preload="auto"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4 flex flex-col justify-center items-center bg-opacity-80 backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 w-[90%] sm:w-[80%] md:w-[60rem] lg:w-[90rem] max-w-[100%] z-10 lg:mt-[7rem]">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-extrabold text-center text-white mb-5">
            <Cover>Nautika Sentra Indonesia</Cover>
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-extrabold text-center text-white px-4">
            Helping you stay ahead by combining innovative maritime navigation &
            radiocommunication tech and hands-on support.
          </p>
        </div>

        <div className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 pb-8 px-4 md:px-8 lg:px-16 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            {cards.map(({ title, icon: Icon, text }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center bg-white bg-opacity-80 shadow-lg rounded-lg p-4 text-center"
              >
                <h2 className="font-bold text-lg flex gap-2 items-center text-teal-500">
                  <Icon className="text-teal-500" aria-hidden="true" /> {title}
                </h2>
                <p className="text-gray-700 text-sm mt-2">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden absolute bottom-10 left-1/2 transform -translate-x-1/2 pb-8 px-4 md:px-8 lg:px-16 z-10">
          <div className="flex flex-col items-center bg-white bg-opacity-80 shadow-lg rounded-lg p-4 w-64">
            <h2 className="font-bold text-lg text-teal-500 text-center">
              View Our Services
            </h2>
            <p className="text-gray-700 text-sm text-center mt-2">
              Tap to explore our solutions, customers, training, and location
              options.
            </p>
            <button
              className="mt-2 bg-teal-500 text-white py-1 px-4 rounded"
              onClick={openModal}
              aria-label="Open Services Modal"
            >
              <HiArrowCircleDown />
            </button>
          </div>
        </div>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h2 className="text-xl font-bold mb-4 text-center">
                Our Services
              </h2>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Explore various solutions, training options, and customer
                support locations.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {cards.map(({ title, icon: Icon, text }, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-4"
                  >
                    <h3 className="font-bold text-lg flex gap-2 items-center text-teal-500">
                      <Icon className="text-teal-500" aria-hidden="true" />{" "}
                      {title}
                    </h3>
                    <p className="text-gray-700 text-sm text-center mt-2">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={closeModal}
                className="mt-4 bg-red-500 text-white py-1 px-4 rounded w-full"
                aria-label="Close Services Modal"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center p-6 mt-6 space-y-8 md:space-y-0 md:space-x-8 ">
        <div className="relative w-full md:w-1/2 lg:w-1/3 h-64 sm:h-80">
          <Image
            src="/home/fsg.jpg"
            alt="NSI Marine"
            layout="fill"
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>

        <div className="relative z-10 w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            NSI Marine
          </h2>
          <p className="text-gray-600 lg:text-[30px] mb-6">
            A renowned supplier of integrated bridge solutions, representing top
            brands in the industry and producing unique complementary products.
            We assist your company with innovative solutions that match todays
            technology, ensuring you stay at the forefront of maritime
            advancements.
          </p>
          <Link
            href="/about"
            className="inline-block bg-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-red-700 transition duration-400"
          >
            About NSI Marine
          </Link>
        </div>
      </div>

      <div className="h-auto bg-transparent py-10">
        <ProdukHome />
      </div>

      <div className="bg-transparent py-5 flex items-center justify-center hero w-full">
        <OurCustomers />
      </div>
      <div
        className="w-full py-10 bg-transparent text-white text-center">
      <CustomerTestimoni />
      </div>
      
    </div>
  );
}
