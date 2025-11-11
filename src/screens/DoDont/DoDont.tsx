import React from "react";

const adherenceList = [
  "The Notice Board is to be displayed on the outside premises or place of the seat.",
  "The certificate of registration / the letter of recognition to be displayed on your office premises.",
  "The trading terminals provided are located at the registered location only and are strictly operated by approved and Certified Users.",
  "Do not execute KYC directly with clients in your name.",
  "Do not deal in cash with clients.",
  "Do not issue bills/ contract notes to the clients in your name.",
  "Do not be involved in any fund-based activities of collecting money from investors/ public and promising them highperiodic returns.",
  "Do not involve in illegal trades or dabba trades i.e. trades executed outside the exchange mechanism.",
  "Do not deal with any other trading member of the same exchange for proprietary trading except with the prior permission from the stock exchange/ Main Broker.",
  "Do not issue any advertisement soliciting business in newspapers/pamphlets/journals /magazines etc. without obtaining requisite approval from stock exchanges. The application for the same shall be routed through the main broker.",
  "Do surrender/deactivate inactive terminals where no trading has been done during the last 6 months.",
  "Do intimate any change in the address to stock exchanges through the main broker immediately.",
  "Do maintain the IG register for the complaints received from clients."
];

const DoDont = (): JSX.Element => {
  return (
    <div className="p-8 bg-[#f6fbff] min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">Adherence of Do’s & Don’t</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-base">
          {adherenceList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default DoDont;