// src/components/OurCustomers.tsx

"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Define the structure of customer data
interface Customer {
  name: string;
  image: string;
  description: string;
}

// List of customers
const customers: Customer[] = [
  {
    name: "Medco Energi",
    image: "/customerIMG/Medco.jpeg",
    description: "Leading company in technology solutions.",
  },
  {
    name: "PT. Meratus Line",
    image: "/customerIMG/meratus1.jpg",
    description: "Innovative provider of cloud-based solutions.",
  },
  {
    name: "Pac Ship Management Pte.Ltd",
    image: "/customerIMG/PacSuhail.jpg",
    description: "Trusted by millions worldwide for their reliability.",
  },
  {
    name: "PT. Pelni",
    image: "/customerIMG/pelni1.jpg",
    description: "Pioneers in AI and machine learning.",
  },
  {
    name: "Pertamina International Shipping",
    image: "/customerIMG/pis1.jfif",
    description: "Pioneers in AI and machine learning.",
  },
  {
    name: "Teras Offshore Pte.Ltd",
    image: "/customerIMG/teras1.jfif",
    description: "Pioneers in AI and machine learning.",
  },
  {
    name: "Vallianz Offshore Pte.Ltd",
    image: "/customerIMG/vallianz1.jfif",
    description: "Pioneers in AI and machine learning.",
  },
];

export default function OurCustomers() {
  return (
    <div className="w-full py-10 bg-transparent dark:bg-neutral-900">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-300 dark:text-neutral-200 mb-10">
        Our Customers
      </h2>
      <div className="flex gap-4 overflow-x-auto px-4">
        {customers.map((customer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative flex-shrink-0 w-60 md:w-80 h-80 p-4 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Background image */}
            <Image
              src={customer.image}
              alt={customer.name}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            />
            {/* Overlay for text */}
            <div className="relative z-10 flex flex-col justify-center items-center bg-black/60 w-full h-full p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{customer.name}</h3>
              <p className="text-sm text-center">{customer.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
