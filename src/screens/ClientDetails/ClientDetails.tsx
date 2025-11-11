import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export const ClientDetails = (): JSX.Element => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar /> */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-8">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Information</h2>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Full Name</div>
                  <div className="text-base font-medium text-gray-800">Alok Kumar Choudhary</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Back Office ID</div>
                  <div className="text-base font-medium text-gray-800">A12345</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Terminal ID</div>
                  <div className="text-base font-medium text-gray-800">A12345</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Branch Code</div>
                  <div className="text-base font-medium text-gray-800">A004</div>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">
              Registration Details
            </h3>

            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">Applicant Name</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  Alok Kumar Choudhary
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NSE CM Reg No-</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  AP17101073501
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">Trade Name</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  Alok Kumar Choudhary
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NSE CM Reg- Date</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  27-03-2019
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">PAN No</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  ACAPC1180K
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NSE FNO Reg- No</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  AP17101040401
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">Constitution</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  Individual
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NSE FNO Reg- Date</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  04-05-2009
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">RM Name</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  Santhosh Prasad
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NSE CF Reg- No</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  AP17101073501
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NSE Segment</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  CIFIX
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NSE CF Reg- Date</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  29-06-2015
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NSE CO Reg- No</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  AP17101073501
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NCDEX Reg- No</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NSE CO Reg- Date</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  27-03-2019
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">NCDEX Reg- Date</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800"></div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">BSE Segments</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  C
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">MSEI Reg- No</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  7057
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">BSE Reg- No</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  AP-010912015425
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">MSEI Segment</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  CDXICMIFO
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">BSE Reg- Date</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  19-02-2018
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-600 w-48">MSEI Reg- Date</div>
                <div className="flex-1 bg-gray-50 px-4 py-2 rounded-lg text-sm text-gray-800">
                  08-03-2023
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
