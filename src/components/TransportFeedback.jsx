import React, { useState } from "react";

const FeedbackDashboard = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleFilterClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-2 text-black">Citizen Feedback Analysis</h1>
      <p className="text-gray-600 mb-8">Real-time analysis of public sentiment and concerns</p>

      <div className="relative flex justify-between mb-8">
        {/* Filter Button */}
        <div className="relative">
          <button
            className="flex items-center gap-2 bg-white p-2 rounded-md border shadow-sm text-gray-600"
            onClick={handleFilterClick}
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
            Filter
          </button>
          {/* Dropdown */}
          {showDropdown && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-black">
                Sort by Date
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-black">
                Sort by Sentiment
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-black">
                Sort by Category
              </button>
            </div>
          )}
        </div>

        {/* Generate Report Button */}
        <button className="flex items-center gap-2 bg-purple-500 p-2 rounded-md text-white font-medium">
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sentiment Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-black">Sentiment Analysis</h2>
          <div>
            <div className="flex justify-between text-sm mb-2 text-black">
              <span>Positive</span>
              <span>45%</span>
            </div>
            <div className="bg-gray-200 h-2 rounded-full mb-4">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <div className="flex justify-between text-sm mb-2 text-black">
              <span>Neutral</span>
              <span>30%</span>
            </div>
            <div className="bg-gray-200 h-2 rounded-full mb-4">
              <div className="bg-gray-500 h-2 rounded-full" style={{ width: "30%" }}></div>
            </div>
            <div className="flex justify-between text-sm mb-2 text-black">
              <span>Negative</span>
              <span>25%</span>
            </div>
            <div className="bg-gray-200 h-2 rounded-full">
              <div className="bg-red-500 h-2 rounded-full" style={{ width: "25%" }}></div>
            </div>
          </div>
        </div>

        {/* Category Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-black">Category Distribution</h2>
          <div>
            <div className="flex justify-between text-sm mb-2 text-black">
              <span>Transport</span>
              <span>40%</span>
            </div>
            <div className="bg-gray-200 h-2 rounded-full mb-4">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "40%" }}></div>
            </div>
            <div className="flex justify-between text-sm mb-2 text-black">
              <span>Cleanliness</span>
              <span>35%</span>
            </div>
            <div className="bg-gray-200 h-2 rounded-full mb-4">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: "35%" }}></div>
            </div>
            <div className="flex justify-between text-sm mb-2 text-black">
              <span>Infrastructure</span>
              <span>25%</span>
            </div>
            <div className="bg-gray-200 h-2 rounded-full">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: "25%" }}></div>
            </div>
          </div>
        </div>

        {/* Activity Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-black">Activity Overview</h2>
          <div className="flex justify-between items-center text-sm mb-4">
            <span className="text-blue-500 font-semibold text-black">Total Feedback</span>
            <span>0</span>
          </div>
          <div className="flex justify-between items-center text-sm mb-4">
            <span className="text-green-500 font-semibold text-black">Trending Topics</span>
            <span>0</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-red-500 font-semibold text-black">Alerts</span>
            <span>0</span>
          </div>
        </div>
      </div>

      {/* Recent Feedback */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-8">
        <h2 className="text-xl font-semibold mb-4 text-black">Recent Feedback</h2>
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center justify-between text-sm mb-2 text-black">
            <span className="text-gray-500">Twitter</span>
            <span className="text-gray-500">15/03/2024, 14:00:00</span>
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs">negative</span>
          </div>
          <p className="text-gray-800">Buses are always late during peak hours. Need better scheduling! #publictransport</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDashboard;