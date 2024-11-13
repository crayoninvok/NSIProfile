"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  position: string;
  description: string;
  image: string;
}

interface ApiUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
}

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();

        const fetchedMembers = data.results.map((user: ApiUser) => ({
          name: `${user.name.first} ${user.name.last}`,
          position: "Team Member",
          description: `${user.name.first} is a dedicated team member contributing to our project.`,
          image: user.picture.large,
        }));

        setTeamMembers(fetchedMembers);
      } catch (error) {
        console.error("Failed to fetch team members:", error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="hero flex flex-col items-center bg-transparent py-5 sm:py-12 md:py-16 gap-4 md:gap-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-4 sm:mb-6 md:mb-10">
        Team Overview
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-200 text-center mb-6 sm:mb-8 md:mb-10 px-4 sm:px-8 lg:px-16 max-w-3xl">
        Our team consists of skilled professionals who are passionate about delivering the best solutions for maritime navigation, communication, and support. Get to know the people behind our success.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 px-4 sm:px-8 lg:px-16 w-full max-w-6xl">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="card bg-base-100 shadow-lg rounded-lg p-4 sm:p-5 md:p-6 flex flex-col items-center text-center"
          >
            <Image src={member.image} alt={member.name} width={100} height={100} className="rounded-full mb-4" />
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-800">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-500">
              {member.position}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-2">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 sm:mt-8">
        <Link href="/team" className="btn glass bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out hover:bg-blue-700">
          Meet Our Team Here
        </Link>
      </div>
    </div>
  );
}
