import React from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = (): JSX.Element => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <div className="bg-white w-full min-h-screen flex">
      <div className="w-1/2 bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center p-12">
        <h1 className="text-4xl font-semibold text-gray-700 mb-8 self-start ml-12">
          One Click To go All Digital
        </h1>
        <img
          className="w-[500px] h-auto"
          alt="Digital illustration"
          src="/8174450-3857424-1.svg"
        />
      </div>

      <div className="w-1/2 bg-gradient-to-br from-blue-100 via-purple-50 to-blue-50 flex flex-col items-center justify-start pt-12 relative">
        <img
          className="w-[400px] h-auto mb-8"
          alt="E-learning"
          src="/c-e-learning--converted--01-1.png"
        />

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 w-[500px] shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
            Sign In
          </h2>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-800 font-semibold text-lg mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter user name"
              className="w-full h-12 bg-white/80 rounded-xl border-0 px-5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-800 font-semibold text-lg mb-2"
            >
              Password*
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              className="w-full h-12 bg-white/80 rounded-xl border-0 px-5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <button className="text-blue-600 font-semibold text-sm hover:underline">
              Forgot Password?
            </button>
            <button
              onClick={handleSignIn}
              className="bg-blue-600 text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              SignIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
