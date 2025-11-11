import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Dashboard Overview
          </h1>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-200 to-blue-100 rounded-2xl p-6 shadow-sm">
              <div className="text-sm text-gray-700 mb-1">Account</div>
              <div className="text-lg font-semibold text-gray-800 mb-3">
                Total Revenue
              </div>
              <div className="text-3xl font-bold text-gray-900">
                ₹ 10,00,00,000 Cr
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-blue-50 rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm text-gray-700">Including brokerage fees</span>
                <span className="text-lg font-semibold text-gray-900">₹50,000.00</span>
              </div>
              <div className="bg-yellow-50 rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm text-gray-700">Commissions</span>
                <span className="text-lg font-semibold text-gray-900">₹50,000.00</span>
              </div>
              <div className="bg-green-50 rounded-xl p-4 flex justify-between items-center">
                <span className="text-sm text-gray-700">Other sources</span>
                <span className="text-lg font-semibold text-gray-900">₹50,000.00</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-lg font-semibold text-gray-800 mb-4">
                Client Activity
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total client active</span>
                  <span className="text-blue-600 font-semibold">1.5Lak</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Dormant Clients</span>
                  <span className="text-blue-600 font-semibold">50k</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Portfolio Value</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700">
                    Current FY
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200">
                    Previous FY
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  ₹10,000,00,00
                </div>
                <div className="text-sm text-gray-600">
                  Your Profit is{" "}
                  <span className="text-blue-600 font-semibold">₹ 10,000,00</span>
                </div>
              </div>

              <div className="relative h-64 mt-8">
                <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0,150 L 66,140 L 133,160 L 200,120 L 267,110 L 333,140 L 400,100 L 467,90 L 533,110 L 600,80 L 667,85 L 733,70 L 800,75 L 800,200 L 0,200 Z"
                    fill="url(#chartGradient)"
                  />
                  <path
                    d="M 0,150 L 66,140 L 133,160 L 200,120 L 267,110 L 333,140 L 400,100 L 467,90 L 533,110 L 600,80 L 667,85 L 733,70 L 800,75"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                  <circle cx="467" cy="90" r="6" fill="#3b82f6" />
                  <rect x="440" y="50" width="100" height="30" rx="4" fill="#3b82f6" />
                  <text x="490" y="70" fontSize="14" fill="white" textAnchor="middle">
                    ₹12,00,00
                  </text>
                </svg>
                <div className="flex justify-between mt-2 text-xs text-gray-500">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                  <span>Jun</span>
                  <span>Jul</span>
                  <span>Aug</span>
                  <span>Sep</span>
                  <span>Oct</span>
                  <span>Nov</span>
                  <span>Dec</span>
                </div>
              </div>

              <div className="flex gap-4 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                  <span className="text-gray-600">₹500k</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-700"></div>
                  <span className="text-gray-600">₹400k</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-gray-600">₹300k</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-300"></div>
                  <span className="text-gray-600">₹200k</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-200"></div>
                  <span className="text-gray-600">₹100k</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-100"></div>
                  <span className="text-gray-600">₹50k</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex gap-2 mb-6">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg flex-1">
                  Broker
                </button>
                <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg flex-1">
                  M/F & SIP
                </button>
              </div>

              <div className="relative w-64 h-64 mx-auto mb-6">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#1e3a8a"
                    strokeWidth="40"
                    strokeDasharray="125 377"
                    transform="rotate(-90 100 100)"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="40"
                    strokeDasharray="94 377"
                    strokeDashoffset="-125"
                    transform="rotate(-90 100 100)"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#fbbf24"
                    strokeWidth="40"
                    strokeDasharray="63 377"
                    strokeDashoffset="-219"
                    transform="rotate(-90 100 100)"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="40"
                    strokeDasharray="95 377"
                    strokeDashoffset="-282"
                    transform="rotate(-90 100 100)"
                  />
                  <text x="100" y="95" fontSize="16" fill="#1e3a8a" textAnchor="middle" fontWeight="bold">
                    45%
                  </text>
                  <text x="100" y="115" fontSize="12" fill="#6b7280" textAnchor="middle">
                    Value/Unit
                  </text>
                </svg>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                    <span className="text-gray-600">Commodity</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                    <span className="text-gray-600">Currency</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                    <span className="text-gray-600">Intraday</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                    <span className="text-gray-600">Feature</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                    <span className="text-gray-600">Delivery</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <span className="text-gray-600">Option</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
