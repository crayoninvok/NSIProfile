"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProdukHome() {
  const products = [
    {
      title: "Marine Navigation Equipment",
      description: "High-precision navigation systems for safe and efficient maritime journeys.",
      images: [
        "/overviewnavequip/fa-170.jpg",
        "/overviewnavequip/FAR2880.jpg", 
        "/overviewnavequip/jmamini.jpg"
      ],
      link: "/products/navigation"
    },
    {
      title: "Radiocommunication GMDSS Equipment",
      description: "Reliable radiocommunication solutions to keep your vessels connected at sea.",
      images: [
        "/overviewcomequip/epirb.jpg",
        "/overviewcomequip/fm-8800.png",
        "/overviewcomequip/FM8900S.png",
        "/overviewcomequip/jue87.jpg"
      ],
      link: "/products/communication"
    },
    {
      title: "Radio Inspection and APT VDR",
      description: "Seamlessly integrated systems for efficient bridge operations and control.",
      images: [
        "/overviewsurveyvdr/rs.jpg",
        "/overviewsurveyvdr/VR3000.jpg",
        "/overviewsurveyvdr/VR7000.jpg"
      ],
      link: "/products/bridge-systems"
    },
    {
      title: "Training & Support",
      description: "Comprehensive training programs to ensure safe and skilled operation of maritime systems.",
      images: [
        "/overviewtraining/tr1.jpg",
        "/overviewtraining/tr2.jpg", 
        "/overviewtraining/tr3.jpg"
      ],
      link: "/services/training"
    }
  ];

  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    Array(products.length).fill(0)
  );

  const [fadeClass, setFadeClass] = useState("opacity-100");

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger fade-out effect
      setFadeClass("opacity-0");

      // After fade-out, update the image and then fade-in
      setTimeout(() => {
        setCurrentImageIndexes((prevIndexes) =>
          prevIndexes.map((index, i) => (index + 1) % products[i].images.length)
        );
        setFadeClass("opacity-100"); // Fade-in effect
      }, 1000); // Duration of fade-out
    }, 3000); // Interval for image change

    return () => clearInterval(interval);
  }, [products]);

  return (
    <div className="flex flex-col items-center bg-transparent py-16">
      <h2 className="text-4xl font-bold text-gray-300 mb-10">Our Offerings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
        
        {products.map((product, productIndex) => (
          <div key={productIndex} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
            <div className={`transition-opacity duration-500 ${fadeClass}`}>
              <Image
                src={product.images[currentImageIndexes[productIndex]]}
                alt={product.title}
                width={150}
                height={150}
                className="rounded-md mb-4"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">{product.title}</h3>
            <p className="text-gray-600 mt-2 mb-4">{product.description}</p>
            <Link href={product.link} className="text-teal-500 font-semibold hover:underline">
              Learn More
            </Link>
          </div>
        ))}
        
      </div>
    </div>
  );
}
