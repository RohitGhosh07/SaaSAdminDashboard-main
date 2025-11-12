import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { UserAvatar } from "../components/UserAvatar";

const Profile: React.FC = () => {
  const { user } = useAuth();

  // Split the name into first and last name
  const fullName = user?.name || "";
  const nameParts = fullName.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <div className="p-8 bg-[#f6fbff] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl h-32 mb-10 flex items-end justify-end">
          <button className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow text-blue-600 font-medium flex items-center gap-2 border border-blue-200 hover:bg-blue-50">
            <span className="material-icons">photo_camera</span> Change Cover
          </button>
          <div className="absolute -bottom-16 left-8 flex flex-col items-center">
            <div className="w-36 h-44 rounded-xl border-4 border-white shadow-lg overflow-hidden bg-white flex items-center justify-center">
              <UserAvatar
                name={fullName}
                size="xl"
                className="w-full h-full rounded-lg"
              />
            </div>
            <span className="mt-2 font-semibold text-lg text-blue-900">{fullName}</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-16">
          <div className="flex-1 flex flex-col gap-4">
            <label className="font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              value={firstName}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              readOnly
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <label className="font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              value={lastName}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              readOnly
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex-1 flex flex-col gap-4">
            <label className="font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={user?.email || ""}
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
              readOnly
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 max-w-md">
          <label className="font-medium text-gray-700">Password</label>
          <div className="relative">
            <input
              type="password"
              value="password"
              className="border rounded-lg px-4 py-2 w-full pr-10 focus:outline-none focus:ring-2 focus:ring-blue-200"
              readOnly
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M4.5 4.5A9.77 9.77 0 003 12c2.25 4.5 7.5 7.5 9 7.5 1.02 0 2.52-.6 4.02-1.62M9.88 9.88A3 3 0 0112 9c1.66 0 3 1.34 3 3 0 .41-.08.8-.22 1.16" />
              </svg>
            </span>
          </div>
          <a href="#" className="text-blue-600 text-sm font-medium hover:underline">Change password</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
