import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export const BrokingCommission = (): JSX.Element => {
  const tableData = [
    {
      slNo: "01",
      date: "01-01-2024",
      document: "SBI CB 00333",
      particular: "To HDFC Bank LTD(SBI) Billing Amount Paid Towards Incentive Up to The Month Of 2024",
      debit: "384165.00",
      credit: "46077.48",
      balance: "-46077.48"
    },
    {
      slNo: "01",
      date: "01-01-2024",
      document: "SBI CB 00333",
      particular: "To HDFC Bank LTD(SBI) Billing Amount Paid Towards Incentive Up to The Month Of 2024",
      debit: "384165.00",
      credit: "46077.48",
      balance: "-46077.48"
    },
    {
      slNo: "01",
      date: "01-01-2024",
      document: "SBI CB 00333",
      particular: "To HDFC Bank LTD(SBI) Billing Amount Paid Towards Incentive Up to The Month Of 2024",
      debit: "384165.00",
      credit: "46077.48",
      balance: "-46077.48"
    },
    {
      slNo: "01",
      date: "01-01-2024",
      document: "SBI CB 00333",
      particular: "To HDFC Bank LTD(SBI) Billing Amount Paid Towards Incentive Up to The Month Of 2024",
      debit: "384165.00",
      credit: "46077.48",
      balance: "-46077.48"
    },
    {
      slNo: "01",
      date: "01-01-2024",
      document: "SBI CB 00333",
      particular: "To HDFC Bank LTD(SBI) Billing Amount Paid Towards Incentive Up to The Month Of 2024",
      debit: "384165.00",
      credit: "46077.48",
      balance: "-46077.48"
    },
    {
      slNo: "01",
      date: "01-01-2024",
      document: "SBI CB 00333",
      particular: "To HDFC Bank LTD(SBI) Billing Amount Paid Towards Incentive Up to The Month Of 2024",
      debit: "384165.00",
      credit: "46077.48",
      balance: "-46077.48"
    },
    {
      slNo: "01",
      date: "01-01-2024",
      document: "SBI CB 00333",
      particular: "To HDFC Bank LTD(SBI) Billing Amount Paid Towards Incentive Up to The Month Of 2024",
      debit: "384165.00",
      credit: "46077.48",
      balance: "-46077.48"
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex gap-4 mb-6">
              <button className="px-6 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200">
                Mutual Found
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg">
                Broking
              </button>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search By client name & idnumber..."
                    className="w-full pl-10 pr-4 py-2 bg-blue-50 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Email
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download EXCL
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDF
                </button>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Commission</option>
                  </select>
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Sl No</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Document</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Particular</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Debit</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Credit</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 text-sm text-gray-600">{row.slNo}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{row.date}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{row.document}</td>
                      <td className="py-3 px-4 text-sm text-gray-600 max-w-md">{row.particular}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{row.debit}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{row.credit}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{row.balance}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium text-sm">
                1
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm">
                2
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm">
                3
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm">
                4
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 text-sm">
                5
              </button>
              <span className="text-gray-400">...</span>
              <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
