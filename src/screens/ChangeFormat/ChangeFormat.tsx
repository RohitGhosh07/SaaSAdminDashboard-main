import React, { useState } from "react";

export const ChangeFormat = (): JSX.Element => {
  const [selectedFormat, setSelectedFormat] = useState("standard");
  
  const formats = [
    {
      id: "standard",
      name: "Standard Format",
      description: "Default layout with sidebar navigation",
      preview: "Grid-based dashboard layout"
    },
    {
      id: "compact",
      name: "Compact Format",
      description: "Condensed layout for smaller screens",
      preview: "Minimalistic single column layout"
    },
    {
      id: "expanded",
      name: "Expanded Format",
      description: "Full-width layout with detailed views",
      preview: "Wide layout with advanced features"
    }
  ];

  const handleFormatChange = (formatId: string) => {
    setSelectedFormat(formatId);
    // Here you would implement the actual format change logic
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Change Format</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {formats.map((format) => (
          <div
            key={format.id}
            className={`bg-white rounded-lg shadow p-6 cursor-pointer border-2 ${
              selectedFormat === format.id ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => handleFormatChange(format.id)}
          >
            {/* Format Preview */}
            <div className="h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">{format.preview}</span>
            </div>
            
            {/* Format Details */}
            <h3 className="text-lg font-semibold mb-2">{format.name}</h3>
            <p className="text-gray-600 text-sm">{format.description}</p>
            
            {/* Selection Indicator */}
            <div className="mt-4 flex items-center">
              <div
                className={`w-4 h-4 rounded-full border-2 mr-2 ${
                  selectedFormat === format.id
                    ? "border-blue-500 bg-blue-500"
                    : "border-gray-300"
                }`}
              />
              <span className="text-sm text-gray-500">
                {selectedFormat === format.id ? "Selected" : "Click to select"}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Apply Button */}
      <div className="mt-6">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => {
            // Here you would implement the apply changes logic
            alert("Format changes will be applied");
          }}
        >
          Apply Changes
        </button>
      </div>

      {/* Format Settings */}
      <div className="mt-6 bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Additional Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-700">Enable animations</span>
            </label>
          </div>
          
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-700">Show detailed statistics</span>
            </label>
          </div>
          
          <div>
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-700">Compact navigation menu</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};