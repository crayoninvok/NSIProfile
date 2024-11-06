import CustomerCarousel from "@/components/ourcostumer";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkedAlt, FaUser, FaWrench } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import ProdukHome from "@/components/productoverview";
import { Cover } from "@/components/ui/cover";
import TeamHome from "@/components/teamoverview";

export default function Home() {
  return (
    <div className="flex flex-col hero min-h-screen relative">
      <div className="relative w-full h-[97vh]">
        <video 
          src="/home/inductionResize.mp4" 
          autoPlay 
          loop 
          muted 
          className="object-cover w-full h-full"
        />

        <div className="absolute flex-col top-[45%] left-[35rem] transform -translate-x-1/2 -translate-y-1/2 flex justify-start items-start rounded-2xl shadow-lg backdrop-blur-sm w-[60rem] h-[10rem] ">
          <h1 className="text-6xl font-extrabold bg-t p-2"><Cover >Nautika Sentra Indonesia</Cover></h1> 
          <p className="text-2xl font-extrabold p-2">helps you stay ahead by combining innovative maritime navigation & radiocommunication tech and hands-on support.</p>
        </div>

        <div className="absolute inset-0 flex justify-center items-end pb-10 gap-10">
          <div className="flex flex-col items-center bg-white bg-opacity-80 shadow-lg rounded-lg p-4 w-60">
            <h2 className="font-bold text-lg flex gap-2"><FaWrench className="mt-[3px]"/>Solution</h2>
            <p className="text-gray-700">From integrated bridges to individual devices. We are happy to help you finding the best solution.</p>
            <button className="mt-2 bg-teal-500 text-white py-1 px-4 rounded">Learn More</button>
          </div>
          
          <div className="flex flex-col items-center bg-white bg-opacity-80 shadow-lg rounded-lg p-4 w-60">
            <h2 className="font-bold text-lg flex gap-2"><FaUser className="mt-[3px]"/>Customers</h2>
            <p className="text-gray-700">A deepsea, inland, yachting, or other type of vessel? We have a solution for every market.</p>
            <button className="mt-2 bg-teal-500 text-white py-1 px-4 rounded">Learn More</button>
          </div>
          
          <div className="flex flex-col items-center bg-white bg-opacity-80 shadow-lg rounded-lg p-4 w-60">
            <h2 className="font-bold text-lg flex gap-2"><PiStudentFill className="mt-[3px]"/>Training</h2>
            <p className="text-gray-700">Sail safely with a well-prepared crew. Our trainers facilitate a wide range of maritime equipment courses.</p>
            <button className="mt-2 bg-teal-500 text-white py-1 px-4 rounded">Learn More</button>
          </div>
          
          <div className="flex flex-col items-center bg-white bg-opacity-80 shadow-lg rounded-lg p-4 w-60">
            <h2 className="font-bold text-lg flex gap-2"><FaMapMarkedAlt className="mt-[3px]"/>Location</h2>
            <p className="text-gray-700">Looking for immediate assistance? Contact the nearest office for 24/7 support.</p>
            <button className="mt-2 bg-teal-500 text-white py-1 px-4 rounded">Learn More</button>
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row items-center justify-center h-[70vh] bg-gray-300 p-8 mt-2">
      <div className="relative w-full md:w-1/2 lg:w-1/3 max-w-[600px] h-[400px]">
        <Image
          src="/home/fsg.jpg" 
          alt="Background Image"
          layout="fill"
          style={{ objectFit: 'cover' }}
          className="rounded-lg shadow-lg"
        />
      </div>

   
      <div className="relative z-10 w-full md:w-1/2  bg-white p-8 rounded-lg shadow-lg md:-ml-20 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">NSI Marine</h2>
        <p className="text-gray-600 mb-6">
          A renowned supplier of integrated bridge solutions, representative of the most important brands in the industry and producer of unique complementary products. Our teams consist of the best professionals in the field of development, design, engineering and commerce. Technology in the maritime world moves fast. Luckily, so do we. We are here to help your company with innovative solutions that match better with the technology and capabilities of today. And we are ready to help you, every day.
        </p>
        <Link href="/about" className="inline-block bg-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-red-700 transition duration-400">
          About NSI Marine
        </Link>
      </div>
      
  
      <div className="fixed bottom-10 right-10">
        <Link href="/service-request" className="inline-block bg-red-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-red-600 transition duration-300">
          Service Request
        </Link>
      </div>
      </div>

    {/* Rincian Produk pada Home */}

      <div className="hero h-[60vh] bg-gray-300 mt-5">
       <ProdukHome />
      </div>

    {/* Rincian Team pada Home */}

      <div className="hero h-[75vh] bg-gray-300 mt-5">
        <TeamHome />
      </div>
      
    {/* Rincian Costumer pada Home */}

      <div className="h-[60vh] bg-gray-300 mt-5 flex items-center justify-center w-full">
        <CustomerCarousel />
      </div>
    </div>
  );
}
