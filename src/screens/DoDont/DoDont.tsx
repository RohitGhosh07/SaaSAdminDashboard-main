import React from "react";

export const DoDont = (): JSX.Element => {
  const dos = [
    "Always verify client identity before processing transactions",
    "Keep detailed records of all client interactions",
    "Follow up with clients regularly about their investment goals",
    "Stay updated with market trends and regulations",
    "Maintain client confidentiality at all times"
  ];

  const donts = [
    "Never share client information with unauthorized parties",
    "Don't make investment decisions without client approval",
    "Don't provide guarantees about investment returns",
    "Don't mix personal and client funds",
    "Don't ignore client complaints or feedback"
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">DO's & DON'Ts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* DO's Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-green-600 mb-4">DO's</h2>
          <ul className="space-y-4">
            {dos.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* DON'Ts Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-red-600 mb-4">DON'Ts</h2>
          <ul className="space-y-4">
            {donts.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Guidelines */}
      <div className="mt-6 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">Important Note</h3>
        <p className="text-blue-700">
          These guidelines are designed to ensure the best service for our clients while maintaining
          compliance with regulatory requirements. Always prioritize client interests and maintain
          professional standards in all interactions.
        </p>
      </div>
    </div>
  );
};