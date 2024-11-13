"use client";

import { useState, useEffect } from "react";
import { getTeamMembers } from "@/lib/team";
import { ITeam } from "@/types/team";
import { FaFacebook, FaLinkedin, FaMailBulk } from "react-icons/fa";

interface IRandomUser {
  name: { first: string; last: string };
  picture: { large: string };
}

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<ITeam[]>([]);
  const [selectedMember, setSelectedMember] = useState<ITeam | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [randomUsers, setRandomUsers] = useState<IRandomUser[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const members = await getTeamMembers();
        setTeamMembers(members);
      } catch (error) {
        console.error("Failed to fetch team members:", error);
      }
    };

    const fetchRandomUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=8");
        const data = await response.json();
        setRandomUsers(data.results);
      } catch (error) {
        console.error("Failed to fetch random users:", error);
      }
    };

    fetchMembers();
    fetchRandomUsers();
  }, []);

  const director = teamMembers.find(
    (member) => member.fields.role === "Vice President"
  );
  const otherMembers = teamMembers.filter(
    (member) => member.fields.role !== "Vice President"
  );

  const openModal = (member: ITeam) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-4 sm:p-6 md:p-8 text-white">
      <div className="max-w-6xl mx-auto text-center mb-8 mt-20 sm:mt-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
          Meet Our Team
        </h1>
        <p className="text-base sm:text-lg text-gray-400">
          Discover the dedicated team members behind our success.
        </p>
      </div>

      {/* Director Section */}
      {director && (
        <div className="flex justify-center mb-8">
          <div
            key={director.fields.name}
            className="bg-gray-800 hover:bg-gray-700 shadow-lg rounded-lg p-6 w-full max-w-4xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex flex-col md:flex-row items-center"
          >
            {/* Photo Section */}
            <div className="overflow-hidden rounded-lg w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-4 md:mb-0 mr-0 md:mr-6 flex-shrink-0">
              <img
                src={`https:${director.fields.image.fields.file.url}`}
                alt={director.fields.name}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>

            {/* Text and Button Section */}
            <div className="flex flex-col text-center md:text-left items-center md:items-start text-white space-y-4 w-full">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {director.fields.name}
              </h2>
              <p className="text-gray-400">{director.fields.role}</p>
              <p className="text-gray-300">Hello, I am Sohee, founder of PT.NSI Marine.</p>
              <button
                className="btn btn-primary btn-sm md:btn-md lg:btn-lg w-32 mt-2 hover:bg-blue-600"
                onClick={() => window.open("https://instagram.com/xeesoxee", "_blank")}
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Core Team Section */}
      <div className="flex justify-center mb-4">
  <div className="w-full max-w-3xl bg-gradient-to-r from-blue-900 to-gray-700 rounded-lg p-2 text-center">
    <h1 className="font-semibold text-lg sm:text-xl">Core Team</h1>
  </div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
  {otherMembers.map((member) => (
    <div
      key={member.fields.name}
      className="relative bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl p-2 sm:p-4"
    >
      <img
        src={`https:${member.fields.image.fields.file.url}`}
        alt={member.fields.name}
        className="object-cover w-full h-40 sm:h-52 md:h-64"
        loading="lazy"
      />

      {/* Name and Role in Top Left */}
      <div className="absolute top-2 left-2 bg-slate-500 bg-opacity-80 rounded-lg px-2 py-1 text-center">
        <h2 className="text-xs sm:text-sm font-semibold text-white">
          {member.fields.name}
        </h2>
        <p className="text-xs text-gray-300">{member.fields.role}</p>
      </div>

      {/* Overlay with Connect Button, only visible on hover */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button
          className="btn glass btn-xs sm:btn-sm hover:bg-blue-600"
          onClick={() => openModal(member)}
        >
          Connect
        </button>
      </div>
    </div>
  ))}
</div>

      {/* Other Team Section */}
      <div className="flex justify-center mt-8 mb-4">
        <div className="w-full max-w-3xl bg-gradient-to-r from-gray-700 to-blue-900 rounded-lg p-2 text-center">
          <h1 className="font-semibold text-lg sm:text-xl">Other Team</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {randomUsers.map((user, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 shadow-lg rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-110 hover:shadow-3xl"
          >
            <div className="overflow-hidden rounded-lg mx-auto mb-4 w-24 h-24">
              <img
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">
              {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-400 text-sm">Staff</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 sm:p-8 w-full max-w-md text-center relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-lg"
            >
              ✕
            </button>
            <img
              src={`https:${selectedMember.fields.image.fields.file.url}`}
              alt={selectedMember.fields.name}
              className="w-32 h-32 sm:w-48 sm:h-48 mx-auto rounded-lg mb-4 transition-transform duration-300 hover:scale-105"
              loading="lazy"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {selectedMember.fields.name}
            </h2>
            <p className="text-lg text-gray-400 mb-3">
              {selectedMember.fields.role}
            </p>
            <p className="text-gray-300 mb-4">
              {selectedMember.fields.description}
            </p>
            <div className="flex justify-center gap-6 text-2xl mb-4">
              <FaLinkedin className="cursor-pointer" />
              <FaFacebook className="cursor-pointer" />
              <FaMailBulk className="cursor-pointer" />
            </div>
            <button
              onClick={closeModal}
              className="btn btn-primary w-full hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
