import React from "react";

export const ClientActivity = (): JSX.Element => {
  const activities = [
    {
      clientName: "Rahul Sharma",
      action: "Investment Made",
      amount: "₹50,000",
      type: "Mutual Fund",
      timestamp: "2 hours ago"
    },
    {
      clientName: "Priya Patel",
      action: "Portfolio Review",
      amount: "-",
      type: "Consultation",
      timestamp: "4 hours ago"
    },
    {
      clientName: "Amit Kumar",
      action: "Insurance Renewal",
      amount: "₹12,000",
      type: "Insurance",
      timestamp: "Yesterday"
    },
    {
      clientName: "Neha Singh",
      action: "Stock Purchase",
      amount: "₹25,000",
      type: "Equity",
      timestamp: "Yesterday"
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Client Activity</h1>
      
      {/* Activity Filters */}
      <div className="mb-6 flex gap-4">
        <select className="border rounded-lg px-4 py-2">
          <option>All Activities</option>
          <option>Investments</option>
          <option>Consultations</option>
          <option>Insurance</option>
        </select>
        <select className="border rounded-lg px-4 py-2">
          <option>Last 24 Hours</option>
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
        </select>
      </div>

      {/* Activity List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Time
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {activities.map((activity, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {activity.clientName}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{activity.action}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{activity.amount}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    {activity.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {activity.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};