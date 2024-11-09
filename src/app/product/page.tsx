"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProductPage() {
  return (
    <div className="hero min-h-screen flex flex-col items-center text-center bg-gradient-to-b from-gray-900 to-gray-700 py-[7rem] px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl font-bold text-gray-300 underline mb-8">Our Product</h1>

      <div className="w-full max-w-[70rem] space-y-8">
   
        <div className="card bg-blue-200 shadow-lg rounded-lg p-6 md:p-8 text-left w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Installment Product</h2>
          <p className="text-gray-600 mb-4">Explore our comprehensive range of Communication and Navigation products.</p>
          <div className="flex flex-col md:flex-row gap-8">
     
            <div className="card bg-base-100 shadow-md flex-1 transform transition-transform duration-500 hover:scale-105">
              <figure className="w-full h-[20rem] overflow-hidden">
                <Image 
                  src="/productfirst/orangeFM8900.jpg"
                  alt="Communication Product"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title text-xl font-semibold text-gray-700">Communication Products</h3>
                <p className="text-gray-500">High-quality solutions designed for seamless maritime communication.</p>
                <div className="card-actions justify-center">
                  <Link href="/products/communication" className="btn btn-primary">
                    See Cataloge
                  </Link>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-md flex-1 transform transition-transform duration-500 hover:scale-105">
              <figure className="w-full h-[20rem] overflow-hidden">
                <Image 
                  src="/productfirst/RadarVar.jpg"
                  alt="Navigation Product"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title text-xl font-semibold text-gray-700">Navigation Products</h3>
                <p className="text-gray-500">Advanced navigation tools ensuring safe and efficient maritime journeys.</p>
                <div className="card-actions justify-center">
                  <Link href="/products/navigation" className="btn btn-primary">
                    See Cataloge
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-blue-200 shadow-lg rounded-lg p-6 md:p-8 text-left">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">For Services</h2>
          <p className="text-gray-600 mb-4">Explore our Radio Survey and VDR APT for comprehensive services.</p>
          <div className="flex flex-col md:flex-row gap-8">
            
  
            <div className="card bg-base-100 shadow-md flex-1 transform transition-transform duration-500 hover:scale-105">
              <figure className="w-full h-[20rem] overflow-hidden">
                <Image 
                  src="/productfirst/rs1.jpeg"
                  alt="Survey Product"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title text-xl font-semibold text-gray-700">Marine Radio GMDSS Inspection / Survey</h3>
                <p className="text-gray-500">Our services for Radio Survey/Inspection for GMDSS are behalf IAXc Class we can provide in Indonesia.</p>
                <div className="card-actions justify-center">
                  <Link href="/products/survey" className="btn btn-primary">
                    Contact To Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-md flex-1 transform transition-transform duration-500 hover:scale-105">
              <figure className="w-full h-[20rem] overflow-hidden">
                <Image 
                  src="/productfirst/apt1.jpeg"
                  alt="VDR Product"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body text-center">
                <h3 className="card-title text-xl font-semibold text-gray-700">Voyage Data Recorder Annual Performance Test (APT VDR)</h3>
                <p className="text-gray-500">This services for doing the APT VDR required certification from manufacture and our company are authorized by Furuno, JRC and HighLander manufacture.</p>
                <div className="card-actions justify-center">
                  <Link href="/products/vdr" className="btn btn-primary">
                    Contact To Us
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
