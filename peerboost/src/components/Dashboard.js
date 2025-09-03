import React from "react";
import { FaMedal } from "react-icons/fa";

export default function Dashboard({ data }) {
  const sorted = [...data].sort((a, b) => b.help - a.help);

  const getBadgeForRank = (rank) => {
    if (rank === 0) return <FaMedal className="text-yellow-500 text-2xl" />;
    if (rank === 1) return <FaMedal className="text-gray-400 text-2xl" />;
    if (rank === 2) return <FaMedal className="text-orange-500 text-2xl" />;
    return null;
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Position</th>
            <th className="border px-4 py-2">Holbies</th>
            <th className="border px-4 py-2">Help</th>
            <th className="border px-4 py-2">Badges</th>
            <th className="border px-4 py-2">Jolt Points</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((user, idx) => (
            <tr
              key={idx}
              className={`hover:bg-gray-50 ${
                idx === 0
                  ? "animate-pulse border-2 border-yellow-400"
                  : idx === 1
                  ? "animate-pulse border-2 border-gray-400"
                  : idx === 2
                  ? "animate-pulse border-2 border-orange-400"
                  : ""
              }`}
            >
              <td className="border px-4 py-2">{idx + 1}</td>
              <td className="border px-4 py-2 flex items-center gap-2">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user.name
                  )}&background=random`}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                {user.name}
              </td>
              <td className="border px-4 py-2">{user.help}</td>
              <td className="border px-4 py-2 flex justify-center">
                {getBadgeForRank(idx)}
              </td>
              <td className="border px-4 py-2">{user.jolt_points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
