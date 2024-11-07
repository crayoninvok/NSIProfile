"use client";

import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const customerData = [
  { id: 1, title: "PT. Samudera Indonesia", img: "/customerIMG/Samin1.png" },
  { id: 2, title: "Teras Offshore Pte.Ltd", img: "/customerIMG/teras1.jfif" },
  { id: 3, title: "Vallianz Pte.Ltd", img: "/customerIMG/vallianz1.jfif" },
  { id: 4, title: "PT. Pelni", img: "/customerIMG/pelni1.jpg" },
  { id: 5, title: "PT. Pertamina International Shipping", img: "/customerIMG/pis1.jfif" },
  { id: 5, title: "PT. Pertamina International Shipping", img: "/customerIMG/pis1.jfif" },
  { id: 5, title: "PT. Pertamina International Shipping", img: "/customerIMG/pis1.jfif" },
];

export default function CustomerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customerData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customerData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-10 bg-gray-200 text-center w-full">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our Customers</h2>
      
      <div className="relative flex items-center justify-center w-full">
        <button
          onClick={handlePrev}
          className="absolute left-2 md:left-6 p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition z-20"
        >
          <FaArrowLeft size={20} />
        </button>

        <div className="flex overflow-hidden w-full justify-center px-4">
          {customerData.map((customer, index) => (
            <div
              key={customer.id}
              className={`relative flex-shrink-0 w-44 h-60 sm:w-52 sm:h-72 md:w-60 md:h-80 bg-cover bg-center rounded-lg overflow-hidden transition-transform duration-300 ${
                index === currentIndex ? "scale-100" : "scale-90 opacity-50"
              } hover:opacity-75 cursor-pointer mx-1 sm:mx-2`}
              style={{ backgroundImage: `url(${customer.img})` }}
              onClick={() => handleImageClick(index)}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <h3 className="text-white font-semibold text-lg sm:text-xl">{customer.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-2 md:right-6 p-2 bg-red-500 rounded-full text-white hover:bg-red-600 transition"
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {customerData.map((customer, index) => (
          <div
            key={customer.id}
            className={`h-1 w-8 rounded-full transition-colors ${
              index === currentIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}
