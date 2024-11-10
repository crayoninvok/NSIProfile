

import Image from "next/image";


export default function About() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-900 to-gray-700 min-h-screen py-10 px-4 md:px-10 lg:px-20">

      <section className="text-center py-10">
        <h1 className="text-5xl font-bold text-gray-100 mb-4 mt-3">About us</h1>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Nautika Sentra Indonesia is dedicated to providing innovative maritime solutions. Our team of professionals leverages the latest technology to enhance maritime navigation, communication, and operational efficiency for vessels of all sizes.
        </p>
      </section>


      <section className="flex flex-col md:flex-row items-center gap-10 bg-white shadow-lg rounded-lg p-8 my-10 w-full max-w-5xl">
        <div className="w-full md:w-1/2 ">
          <Image src="/about/about3.jpg" alt="Our Mission" width={500} height={200} className="rounded-lg shadow-lg transform transition-all duration-700 hover:scale-105" />
        </div>
        <div className="w-full md:w-1/2 text-gray-800">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg mb-4">
            At Nautika Sentra Indonesia, our mission is to drive innovation in the maritime industry by providing state-of-the-art solutions that ensure safety, efficiency, and connectivity for our clients around the globe.
          </p>
          <h3 className="text-2xl font-semibold mt-6 mb-2">Our Values</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Integrity and Transparency</li>
            <li>Commitment to Quality</li>
            <li>Customer-Centric Approach</li>
            <li>Continuous Innovation</li>
          </ul>
        </div>
      </section>
      
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
            <h3 className="text-xl font-semibold">Lloyd's Register <i>(LR)</i></h3>
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



          <section className="w-full py-10 bg-gray-400 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Manufacture Partner</h2>
            <p className="text-lg mb-6 max-w-xl mx-auto">
              We are proud to partner with leading manufacturers, bringing you the most reliable and innovative maritime solutions.
            </p>

            <div className="overflow-hidden w-full mt-8">
              <div className="flex space-x-8 animate-loop-scroll">

            <Image src="/manufacturloop/furuno.png" alt="Furuno" width={100} height={50} />
            <Image src="/manufacturloop/garmin.png" alt="Garmin" width={100} height={50} />
            <Image src="/manufacturloop/jotron.svg" alt="Jotron" width={100} height={50} />
            <Image src="/manufacturloop/jrc.svg" alt="JRC" width={100} height={50} />
            <Image src="/manufacturloop/mcmurdo.svg" alt="McMurdo" width={100} height={50} />
            <Image src="/manufacturloop/samyung.svg" alt="Samyung" width={100} height={50} />

            <Image src="/manufacturloop/furuno.png" alt="Furuno" width={100} height={50} />
            <Image src="/manufacturloop/garmin.png" alt="Garmin" width={100} height={50} />
            <Image src="/manufacturloop/jotron.svg" alt="Jotron" width={100} height={50} />
            <Image src="/manufacturloop/jrc.svg" alt="JRC" width={100} height={50} />
            <Image src="/manufacturloop/mcmurdo.svg" alt="McMurdo" width={100} height={50} />
            <Image src="/manufacturloop/samyung.svg" alt="Samyung" width={100} height={50} />

            <Image src="/manufacturloop/furuno.png" alt="Furuno" width={100} height={50} />
            <Image src="/manufacturloop/garmin.png" alt="Garmin" width={100} height={50} />
            <Image src="/manufacturloop/jotron.svg" alt="Jotron" width={100} height={50} />
            <Image src="/manufacturloop/jrc.svg" alt="JRC" width={100} height={50} />
            <Image src="/manufacturloop/mcmurdo.svg" alt="McMurdo" width={100} height={50} />
            <Image src="/manufacturloop/samyung.svg" alt="Samyung" width={100} height={50} />
            
            <Image src="/manufacturloop/furuno.png" alt="Furuno" width={100} height={50} />
            <Image src="/manufacturloop/garmin.png" alt="Garmin" width={100} height={50} />
            <Image src="/manufacturloop/jotron.svg" alt="Jotron" width={100} height={50} />
            <Image src="/manufacturloop/jrc.svg" alt="JRC" width={100} height={50} />
            <Image src="/manufacturloop/mcmurdo.svg" alt="McMurdo" width={100} height={50} />
            <Image src="/manufacturloop/samyung.svg" alt="Samyung" width={100} height={50} />

            <Image src="/manufacturloop/furuno.png" alt="Furuno" width={100} height={50} />
            <Image src="/manufacturloop/garmin.png" alt="Garmin" width={100} height={50} />
            <Image src="/manufacturloop/jotron.svg" alt="Jotron" width={100} height={50} />
            <Image src="/manufacturloop/jrc.svg" alt="JRC" width={100} height={50} />
            <Image src="/manufacturloop/mcmurdo.svg" alt="McMurdo" width={100} height={50} />
            <Image src="/manufacturloop/samyung.svg" alt="Samyung" width={100} height={50} />

          </div>
         </div>
          </section>
    </div>
  );
}
