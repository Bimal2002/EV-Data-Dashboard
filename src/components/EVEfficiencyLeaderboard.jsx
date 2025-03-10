import React from "react";

const EVEfficiencyLeaderboard = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="text-center text-gray-500">No Data Available</p>;

  const efficientEVs = data
    .filter((item) => item.base_msrp >= 0 && item.electric_range >= 0) // Avoid division by zero
    .map((item) => ({
      make: item.make,
      model: item.model,
      year: item.model_year,
      range: item.electric_range,
      // efficiency: (item.electric_range / item.base_msrp).toFixed(4),
    }))
    // .sort((a, b) => b.efficiency - a.efficiency)
    .slice(0, 5);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-2 text-center">⚡ Most Energy-Efficient EVs</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-blue-100 text-gray-700">
              <th className="border border-gray-300 p-3">Make</th>
              <th className="border border-gray-300 p-3">Model</th>
              <th className="border border-gray-300 p-3">Year</th>
              <th className="border border-gray-300 p-3">Range (mi)</th>
              {/* <th className="border border-gray-300 p-3">Range/$</th> */}
            </tr>
          </thead>
          <tbody>
            {efficientEVs.map((item, index) => (
              <tr
                key={index}
                className="text-center hover:bg-gray-100 transition-all"
              >
                <td className="border border-gray-300 p-3">{item.make}</td>
                <td className="border border-gray-300 p-3">{item.model}</td>
                <td className="border border-gray-300 p-3">{item.year}</td>
                <td className="border border-gray-300 p-3">{item.range} mi</td>
                {/* <td className="border border-gray-300 p-3 font-semibold text-blue-600">
                  {item.efficiency}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EVEfficiencyLeaderboard;
