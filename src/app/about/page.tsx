"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Testimoni from "@/components/teamoverview2";
import Timeline from "@/components/timeline";
import { GlobeDemo } from "@/components/globeGitTamplate";

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
      className="flex flex-col items-center bg-radial-gradient from-darkBlue to-darkNavy min-h-screen py-10 px-4 md:px-10 lg:px-20 gap-5"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
 
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center h-auto py-10 px-4 md:px-10 mt-16 md:mt-8 mb-12 md:mb-0"
        variants={fadeInUp}
      >
        <div className="flex items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/about/fotologo.jpg"
            alt="NSI Logo"
            width={200}
            height={200}
            className="max-w-[150px] md:max-w-[200px] rounded-lg"
          />
        </div>
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 mt-3">About Us</h1>
          <p className="text-base md:text-lg text-gray-200 max-w-lg md:max-w-3xl mx-auto md:mx-0 leading-relaxed">
            Welcome to NSI, Indonesia's trusted vendor for premium navigation and communication equipment since 2024. We are proud to represent renowned manufacturers like Furuno, JRC, and many others, bringing world-class marine technology to our clients. Our expertise goes beyond sales; we provide comprehensive support services, including certified radio surveys and APT VDR, ensuring that your vessels meet all safety and regulatory standards. With a commitment to reliability, quality, and customer satisfaction, NSI is here to keep your operations seamless and safe at sea.
          </p>
        </div>
      </motion.div>

  
      <div className="flex flex-col md:flex-row items-center w-full p-4 gap-10">
        <div className="w-full md:w-1/2 max-w-6xl justify-center mb-8">
          <Timeline />
        </div>
        <div className="w-full md:w-1/2 max-w-6xl">
          <GlobeDemo />
        </div>
      </div>

   
      <motion.section
        className="flex flex-col md:flex-row items-center gap-5 shadow-lg p-6 md:p-8 my-10 max-w-6xl w-full"
        variants={fadeInLeft}
      >
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/about/about3.jpg"
            alt="Our Mission"
            width={500}
            height={200}
            className="rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left text-slate-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-red-500">Mission</span>
          </h2>
          <p className="text-base md:text-lg mb-4">
            At Nautika Sentra Indonesia, our mission is to drive innovation in the maritime industry by providing state-of-the-art solutions that ensure safety, efficiency, and connectivity for our clients around the globe.
          </p>
          <h3 className="text-3xl md:text-4xl font-semibold mt-6 mb-2">
            Our <span className="text-red-500">Values</span>
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-slate-100">
            <li>Integrity and Transparency</li>
            <li>Commitment to Quality</li>
            <li>Customer-Centric Approach</li>
            <li>Continuous Innovation</li>
          </ul>
        </div>
      </motion.section>

   
      <motion.section
        className="items-center justify-center text-center w-full md:w-[47vw] md:h-[60vh] h-relative bg-gradient-to-r from-gray-300 to-gray-400 py-5 rounded-3xl"
        variants={fadeInRight}
      >
        <p className="text-white font-semibold text-[30px]">
          Our <span className="text-red-500">Team Quotes</span> & <span className="text-red-500">Overview</span>
        </p>
        <Testimoni />
      </motion.section>

   
      <motion.section
        className="text-center py-10 w-full max-w-5xl"
        variants={fadeInUp}
      >
        <section className="text-center py-10 w-full max-w-5xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Approved <span className="text-red-500">Classification</span> 
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto mb-10">
            At NSI, we collaborate with industry-leading classification
            societies and uphold the highest standards in maritime safety and
            compliance. Our certifications and approvals underscore our
            dedication to delivering reliable from the member of the IACs
            Classification and local Classification, top-quality maritime
            solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Image
                src="/classIAX/BV.svg"
                alt="Classification"
                width={120}
                height={120}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">
                Bureau Veritas <i>(BV)</i>
              </h3>
              <p className="text-gray-500 text-center">
                French IACs Class.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Image
                src="/classIAX/NK.svg"
                alt="Classification"
                width={120}
                height={120}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">
                Nippon Kaiji Kyokai <i>(NK)</i>
              </h3>
              <p className="text-gray-500 text-center">
                Japan IACs Class
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Image
                src="/classIAX/DNV.svg"
                alt="Classification"
                width={150}
                height={120}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">
                Det Norske Veritas <i>(DNV)</i>
              </h3>
              <p className="text-gray-500 text-center">
                Norway IACs Class
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Image
                src="/classIAX/LR.png"
                alt="Classification"
                width={120}
                height={120}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">
                Lloyds Register <i>(LR)</i>
              </h3>
              <p className="text-gray-500 text-center">
                British IACs Class
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Image
                src="/classIAX/BKI.svg"
                alt="Classification"
                width={120}
                height={120}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">
                Biro Klassifikasi Indonesia <i>(BKI)</i>
              </h3>
              <p className="text-gray-500 text-center">
                Indonesia local classification society
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-center">
              <Image
                src="/classIAX/ABS.png"
                alt="Classification"
                width={160}
                height={120}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">
                American Bureau of Shipping <i>(ABS)</i>
              </h3>
              <p className="text-gray-500 text-center">
                United States IACs Class
              </p>
            </div>
          </div>
        </section>
      </motion.section>

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
