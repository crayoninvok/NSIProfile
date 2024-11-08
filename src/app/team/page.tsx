import { getTeamMembers } from '@/lib/team';
import { ITeam } from '@/types/team';

export default async function TeamPage() {
  const teamMembers: ITeam[] = await getTeamMembers();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 p-8 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12 mt-[7rem]">
        <h1 className="text-5xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-lg text-gray-400">
          Discover the dedicated team members behind our success.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member) => (
          <div
            key={member.fields.name}
            className="bg-gray-800 hover:bg-gray-700 shadow-lg rounded-lg p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="overflow-hidden rounded-lg mx-auto mb-4 w-24 h-24 transform transition-transform duration-300 hover:scale-110">
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
            <button className="btn btn-primary btn-sm w-full hover:bg-blue-600">
              Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
