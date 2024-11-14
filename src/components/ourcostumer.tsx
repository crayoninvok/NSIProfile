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
    description: "Medco Energy is a leading Indonesian energy company with a strong focus on sustainable growth in oil, gas, and renewable energy.",
  },
  {
    name: "PT. Meratus Line",
    image: "/customerIMG/meratus1.jpg",
    description: "Shipping company that provides integrated logistics and transportation solutions across the archipelago..",
  },
  {
    name: "Pac Ship Management Pte.Ltd",
    image: "/customerIMG/PacSuhail.jpg",
    description: "Reputable maritime company dedicated to providing comprehensive shipping services and solutions across the global maritime industry.",
  },
  {
    name: "PT. Pelni",
    image: "/customerIMG/pelni1.jpg",
    description: "State-owned enterprise that plays a vital role in Indonesia's maritime transportation network..",
  },
  {
    name: "Pertamina International Shipping",
    image: "/customerIMG/pis1.jpg",
    description: "Focusing on the transportation and shipping of energy products, primarily oil and gas, to domestic and international markets.",
  },
  {
    name: "Teras Offshore Pte.Ltd",
    image: "/customerIMG/teras1.jpg",
    description: "Specializes in marine logistics and support services for the offshore oil and gas industry.",
  },
  {
    name: "Vallianz Offshore Pte.Ltd",
    image: "/customerIMG/vallianz1.jpg",
    description: "The company's fleet includes various OSVs such as anchor handling tugs, platform supply vessels, and accommodation work barges.",
  },
];

export default function OurCustomers() {
  return (
    <div className="w-full py-5 bg-transparent">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-slate-100 dark:text-neutral-200 mb-10">
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
     
            <Image
              src={customer.image}
              alt={customer.name}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0"
            />
    
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
