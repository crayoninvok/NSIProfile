
import { motion } from "framer-motion";

const timelineData = [
  { year: "Jan, 2023", title: "Started the Journey", description: "This is where it all began." },
  { year: "Oct, 2023", title: "First certification", description: "We achieved our first milestone." },
  { year: "Jan, 2024", title: "Got first Project", description: "Expanding our reach and services." },
  { year: "Jul, 2024", title: "Established as a Company", description: "Looking forward to new challenges." },
];

export default function Timeline() {
  return (
    <div className="relative p-6">
      <h2 className="text-4xl font-bold mb-10 text-white">Our <span className="text-red-500">Journey</span></h2>
      <div className="relative border-l-2 border-gray-300 pl-6 text-slate-100">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.4 }}
            className="mb-10 relative"
          >
            {/* Circle Marker */}
            <div className="absolute w-6 h-6 rounded-full bg-blue-500 -left-3 top-1"></div>
            {/* Timeline Content */}
            <div className="pl-8">
              <p className="text-sm text-gray-300">{item.year}</p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-blue-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
