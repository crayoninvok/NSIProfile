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

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    // Fetch random user data
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=4");
        const data = await response.json();

        // Map fetched data to our TeamMember interface
        const fetchedMembers = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          position: "Team Member", // Example position (you can assign specific roles here if desired)
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
    <div className="hero flex flex-col items-center bg-gray-50 py-16 gap-5">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">Team Overview</h2>
      <p className="text-lg text-gray-600 text-center mb-10 px-4 md:px-8 lg:px-16">
        Our team consists of skilled professionals who are passionate about delivering the best solutions for maritime navigation, communication, and support. Get to know the people behind our success.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className="card bg-base-100 shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
          >
            <Image src={member.image} alt={member.name} width={120} height={120} className="rounded-full mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-500">{member.position}</p>
            <p className="text-gray-600 mt-2">
              {member.description}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="w-[10rem]">
        <Link href={"/ourteam"} className="btn">Meet Our Team Here</Link>
      </div>
    </div>
  );
}
