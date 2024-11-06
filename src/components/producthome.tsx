"use client";

import Image from "next/image";

export default function ProdukHome() {
  const products = [
    { id: 1, name: "Product 1", price: "???", image: "/customerIMG/meratus1.jpg" },
    { id: 2, name: "Product 2", price: "???", image: "/customerIMG/pelni1.jpg" },
    { id: 3, name: "Product 3", price: "???", image: "/customerIMG/pis1.jfif" },
    { id: 4, name: "Product 4", price: "???", image: "/customerIMG/samin1.png" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-5">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            width={320}   // Set width as needed for layout
            height={160}  // Set height as needed for layout
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
