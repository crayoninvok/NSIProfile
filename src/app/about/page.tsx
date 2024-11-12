"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Testimoni from "@/components/teamoverview2";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.2 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

export default function About() {
  return (
    <motion.div
      className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen py-10 px-4 md:px-10 lg:px-20 gap-5"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Logo and About Us Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center h-[40vh] py-10 mt-[13rem] mb-[7rem] md:mb-[0rem] md:mt-[3rem]"
        variants={fadeInUp}
      >
        <div className="flex items-center justify-center w-full md:w-1/2 mb-4 md:mb-0">
          <Image src="/about/LOGONSI.png" alt="NSI Logo" width={200} height={200} />
        </div>
        <div className="text-center md:text-left w-full md:w-1/2 px-4">
          <h1 className="text-5xl font-bold text-gray-100 mb-4 mt-3">About us</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Founded in 2024, Nautika Sentra Indonesia was established with a vision to revolutionize
            the maritime industry through advanced technology and innovative solutions. Starting as
            a small team of maritime professionals and tech enthusiasts, the company recognized the
            growing need for enhanced navigation, communication, and operational efficiency in the
            maritime sector.
          </p>
        </div>
      </motion.div>

      {/* Mission and Values Section */}
      <motion.section
        className="flex flex-col md:flex-row items-center gap-10 bg-blue-300 shadow-lg rounded-lg p-8 my-10 w-full max-w-5xl"
        variants={fadeInLeft}
      >
        <div className="w-full md:w-1/2 ">
          <Image
            src="/about/about3.jpg"
            alt="Our Mission"
            width={500}
            height={200}
            className="rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At Nautika Sentra Indonesia, our mission is to drive innovation in the maritime industry
            by providing state-of-the-art solutions that ensure safety, efficiency, and connectivity
            for our clients around the globe.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-2">Our Values</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Integrity and Transparency</li>
            <li>Commitment to Quality</li>
            <li>Customer-Centric Approach</li>
            <li>Continuous Innovation</li>
          </ul>
        </div>
      </motion.section>

      {/* Team Overview Section */}
      <motion.section
        className="items-center justify-center text-center w-full md:w-[40vw] bg-blue-300 py-5 rounded-3xl"
        variants={fadeInRight}
      >
        <p className="text-slate-100 font-semibold text-[30px]">Our Team Quotes & Overview</p>
        <Testimoni />
        <Link href={"/team"}>
          <p className="btn glass bg-gray-500">Load More</p>
        </Link>
      </motion.section>

      {/* Approved Classification Section */}
      <motion.section
        className="text-center py-10 w-full max-w-5xl"
        variants={fadeInUp}
      >
        
        <section className="text-center py-10 w-full max-w-5xl">
        <h2 className="text-4xl font-bold text-gray-100 mb-6">Our Approved Classification</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
          We work closely with industry leaders and meet the highest standards of classification. Our certifications and approvals reflect our commitment to excellence in maritime solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <Image src="/classIAX/BV.svg" alt="Classification" width={120} height={120} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Bureau Veritas <i>(BV)</i></h3>
            <p className="text-gray-500 text-center">Top standards in maritime safety and efficiency.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <Image src="/classIAX/NK.svg" alt="Classification" width={120} height={120} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Nippon Kaiji Kyokai <i>(NK)</i></h3>
            <p className="text-gray-500 text-center">Certified excellence in maritime operations.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <Image src="/classIAX/DNV.svg" alt="Classification" width={150} height={120} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Det Norske Veritas <i>(DNV)</i></h3>
            <p className="text-gray-500 text-center">Advanced standards in maritime service.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <Image src="/classIAX/LR.png" alt="Classification" width={120} height={120} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Lloyds Register <i>(LR)</i></h3>
            <p className="text-gray-500 text-center">Advanced standards in maritime service.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <Image src="/classIAX/BKI.svg" alt="Classification" width={120} height={120} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Biro Klassifikasi Indonesia <i>(BKI)</i></h3>
            <p className="text-gray-500 text-center">Advanced standards in maritime service.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
            <Image src="/classIAX/ABS.png" alt="Classification" width={160} height={120} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold">American Bureau of Shipping <i>(ABS)</i></h3>
            <p className="text-gray-500 text-center">Advanced standards in maritime service.</p>
          </div>
        </div>
        </section>
      </motion.section>

      {/* Manufacture Partner Section */}
      <motion.section
        className="w-full py-10 bg-gray-400 text-white text-center"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-4">Manufacture Partner</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          We are proud to partner with leading manufacturers, bringing you the
          most reliable and innovative maritime solutions.
        </p>
        
          <div className="overflow-hidden w-full mt-8">
          <div className="flex w-full space-x-8 animate-loop-scroll">
            <Image
              src="/manufacturloop/furuno.png"
              alt="Furuno"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/garmin.png"
              alt="Garmin"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/jotron.svg"
              alt="Jotron"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/jrc.svg"
              alt="JRC"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/mcmurdo.svg"
              alt="McMurdo"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/samyung.svg"
              alt="Samyung"
              width={100}
              height={50}
            />

            <Image
              src="/manufacturloop/furuno.png"
              alt="Furuno"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/garmin.png"
              alt="Garmin"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/jotron.svg"
              alt="Jotron"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/jrc.svg"
              alt="JRC"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/mcmurdo.svg"
              alt="McMurdo"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/samyung.svg"
              alt="Samyung"
              width={100}
              height={50}
            />

            <Image
              src="/manufacturloop/furuno.png"
              alt="Furuno"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/garmin.png"
              alt="Garmin"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/jotron.svg"
              alt="Jotron"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/jrc.svg"
              alt="JRC"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/mcmurdo.svg"
              alt="McMurdo"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/samyung.svg"
              alt="Samyung"
              width={100}
              height={50}
            />

            <Image
              src="/manufacturloop/furuno.png"
              alt="Furuno"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/garmin.png"
              alt="Garmin"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/jotron.svg"
              alt="Jotron"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/jrc.svg"
              alt="JRC"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/mcmurdo.svg"
              alt="McMurdo"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/samyung.svg"
              alt="Samyung"
              width={100}
              height={50}
            />

            <Image
              src="/manufacturloop/furuno.png"
              alt="Furuno"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/garmin.png"
              alt="Garmin"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/jotron.svg"
              alt="Jotron"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/jrc.svg"
              alt="JRC"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/mcmurdo.svg"
              alt="McMurdo"
              width={100}
              height={50}
            />
            <Image
              src="/manufacturloop/samyung.svg"
              alt="Samyung"
              width={100}
              height={50}
            />
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
