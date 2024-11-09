"use client";

import { useState, useEffect } from 'react';
import { getTeamMembers } from '@/lib/team';
import { ITeam } from '@/types/team';

export default function TeamPage() {
  const [teamMembers, setTeamMembers] = useState<ITeam[]>([]);
  const [selectedMember, setSelectedMember] = useState<ITeam | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const members = await getTeamMembers();
        setTeamMembers(members);
      } catch (error) {
        console.error('Failed to fetch team members:', error);
      }
    };

    fetchMembers();
  }, []);

  // Separate the director from the rest of the team members
  const director = teamMembers.find((member) => member.fields.role === 'Director');
  const otherMembers = teamMembers.filter((member) => member.fields.role !== 'Director');

  const openModal = (member: ITeam) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 p-8 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12 mt-[7rem]">
        <h1 className="text-5xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-lg text-gray-400">
          Discover the dedicated team members behind our success.
        </p>
      </div>

      {/* Director Section */}
      {director && (
        <div className="flex justify-center mb-8">
          <div
            key={director.fields.name}
            className="bg-gray-800 hover:bg-gray-700 shadow-lg rounded-lg p-6 text-center w-[25rem] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="overflow-hidden rounded-lg mx-auto mb-4 w-36 h-36">
              <img
                src={`https:${director.fields.image.fields.file.url}`}
                alt={director.fields.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              {director.fields.name}
            </h2>
            <p className="text-gray-400 mb-4">{director.fields.role}</p>
            <button
              className="btn btn-primary btn-sm w-full hover:bg-blue-600"
              onClick={() => openModal(director)}
            >
              Connect
            </button>
          </div>
        </div>
      )}
      <div>
        <h1>Core Team</h1>
      </div>
      {/* Other Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {otherMembers.map((member) => (
          <div
            key={member.fields.name}
            className="bg-gray-800 hover:bg-gray-700 shadow-lg rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-110 hover:shadow-2xl"
          >
            <div className="overflow-hidden rounded-lg mx-auto mb-4 w-28 h-28 transform transition-transform duration-300 hover:scale-125">
              <img
                src={`https:${member.fields.image.fields.file.url}`}
                alt={member.fields.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">
              {member.fields.name}
            </h2>
            <p className="text-gray-400 mb-4">{member.fields.role}</p>
            <button
              className="btn btn-primary btn-sm w-full hover:bg-blue-600"
              onClick={() => openModal(member)}
            >
              Connect
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMember && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 rounded-lg p-8 w-96 text-center relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-lg"
            >
              ✕
            </button>
            <img
              src={`https:${selectedMember.fields.image.fields.file.url}`}
              alt={selectedMember.fields.name}
              className="w-48 h-48 mx-auto rounded-lg mb-4 transition-transform duration-300 hover:scale-150"
            />
            <h2 className="text-3xl font-bold text-white mb-2">
              {selectedMember.fields.name}
            </h2>
            <p className="text-lg text-gray-400 mb-4">{selectedMember.fields.role}</p>
            <p className="text-gray-300 mb-4">
              Additional details about the team member can go here. You could display a short bio or contact information if available.
            </p>
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
