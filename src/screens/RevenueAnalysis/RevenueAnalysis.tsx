import React from "react";

export const RevenueAnalysis = (): JSX.Element => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Revenue Analysis</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Revenue Overview Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Total Revenue</h3>
          <div className="text-3xl font-bold text-blue-600">₹1,234,567</div>
          <div className="text-sm text-gray-500 mt-2">+12.5% from last month</div>
        </div>

        {/* Monthly Trend Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Monthly Trend</h3>
          <div className="h-40 flex items-end space-x-2">
            {[60, 45, 75, 50, 80, 65].map((height, index) => (
              <div key={index} className="flex-1">
                <div 
                  className="bg-blue-500 rounded-t"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
          </div>
        </div>

        {/* Top Products Card */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Top Revenue Sources</h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Mutual Funds</span>
              <span className="font-semibold">₹450,000</span>
            </div>
            <div className="flex justify-between">
              <span>Insurance</span>
              <span className="font-semibold">₹320,000</span>
            </div>
            <div className="flex justify-between">
              <span>Stocks</span>
              <span className="font-semibold">₹280,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};