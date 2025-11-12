import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { BackendStatus } from "../../components/BackendStatus";

export const SignIn = (): JSX.Element => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.detail || "Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // Validate password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      setLoading(false);
      return;
    }

    try {
      await register(email, name, password);
      setSuccess("Account created successfully! You can now sign in.");
      // Clear form and switch to sign-in mode
      setName("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setIsSignUp(false);
        setSuccess("");
      }, 2000);
    } catch (err: any) {
      setError(err.response?.data?.detail || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setError("");
    setSuccess("");
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
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
        {/* Backend Status Indicator */}
        <div className="absolute top-4 right-4">
          <BackendStatus />
        </div>

        <img
          className="w-[400px] h-auto mb-8"
          alt="E-learning"
          src="/c-e-learning--converted--01-1.png"
        />

        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 w-[500px] shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
            {isSignUp ? "Create Account" : "Sign In"}
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              {success}
            </div>
          )}

          <form onSubmit={isSignUp ? handleSignUp : handleSignIn}>
            {isSignUp && (
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold text-lg mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-12 bg-white/80 rounded-xl border-0 px-5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            )}

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
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 bg-white/80 rounded-xl border-0 px-5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-800 font-semibold text-lg mb-2"
              >
                Password{isSignUp ? " (min 6 characters)" : "*"}
              </label>
              <input
                id="password"
                type="password"
                placeholder={isSignUp ? "Create a password (min 6 characters)" : "Enter Your Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 bg-white/80 rounded-xl border-0 px-5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
                minLength={isSignUp ? 6 : undefined}
              />
            </div>

            {isSignUp && (
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-gray-800 font-semibold text-lg mb-2"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-12 bg-white/80 rounded-xl border-0 px-5 text-sm text-gray-600 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            )}

            <div className="flex justify-between items-center mt-6">
              {!isSignUp ? (
                <button type="button" className="text-blue-600 font-semibold text-sm hover:underline">
                  Forgot Password?
                </button>
              ) : (
                <div></div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-8 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading
                  ? isSignUp
                    ? "Creating Account..."
                    : "Signing In..."
                  : isSignUp
                  ? "Create Account"
                  : "Sign In"
                }
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
              <button
                type="button"
                onClick={toggleMode}
                className="ml-2 text-blue-600 font-semibold hover:underline"
                disabled={loading}
              >
                {isSignUp ? "Sign In" : "Create Account"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
