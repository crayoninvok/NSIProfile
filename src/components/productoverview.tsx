"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProdukHome() {
  const products = [

  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 py-16">
  <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Offerings</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
    
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <Image src="/path/to/navigation.jpg" alt="Maritime Navigation" width={80} height={80} className="rounded-full mb-4"/>
      <h3 className="text-2xl font-semibold text-gray-800">Marine Navigation Equipment</h3>
      <p className="text-gray-600 mt-2 mb-4">
        High-precision navigation systems for safe and efficient maritime journeys.
      </p>
      <Link href="/products/navigation" className="text-teal-500 font-semibold hover:underline">Learn More</Link>
    </div>
    
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <Image src="/path/to/communication.jpg" alt="Communication Systems" width={80} height={80} className="rounded-full mb-4"/>
      <h3 className="text-2xl font-semibold text-gray-800">Radiocommunication GMDSS Equipment</h3>
      <p className="text-gray-600 mt-2 mb-4">
        Reliable radiocommunication solutions to keep your vessels connected at sea.
      </p>
      <Link href="/products/communication" className="text-teal-500 font-semibold hover:underline">Learn More</Link>
    </div>
    
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <Image src="/path/to/bridge.jpg" alt="Integrated Bridge Systems" width={80} height={80} className="rounded-full mb-4"/>
      <h3 className="text-2xl font-semibold text-gray-800">Radio Inspection and APT VDR</h3>
      <p className="text-gray-600 mt-2 mb-4">
        Seamlessly integrated systems for efficient bridge operations and control.
      </p>
      <Link href="/products/bridge-systems" className="text-teal-500 font-semibold hover:underline">Learn More</Link>
    </div>
    
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
      <Image src="/path/to/training.jpg" alt="Training and Support" width={80} height={80} className="rounded-full mb-4"/>
      <h3 className="text-2xl font-semibold text-gray-800">Training & Support</h3>
      <p className="text-gray-600 mt-2 mb-4">
        Comprehensive training programs to ensure safe and skilled operation of maritime systems.
      </p>
      <Link href="/services/training" className="text-teal-500 font-semibold hover:underline">Learn More</Link>
    </div>
    
  </div>
</div>

  );
}
