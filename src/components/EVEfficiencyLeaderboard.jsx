import React from "react";

const EVEfficiencyLeaderboard = ({ data }) => {
  if (!data || data.length === 0) return <p className="text-center">No Data Available</p>;

  const efficientEVs = data
    .map((item) => ({
      make: item.make,
      model: item.model,
      year: item.model_year,
      range: item.electric_range,
      efficiency: (item.electric_range / item.base_msrp).toFixed(4),
    }))
    .sort((a, b) => b.efficiency - a.efficiency)
    .slice(0, 5);

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-xl font-bold mb-2">⚡ Most Energy-Efficient EVs</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Make</th>
            <th className="border border-gray-300 p-2">Model</th>
            <th className="border border-gray-300 p-2">Year</th>
            <th className="border border-gray-300 p-2">Range (mi)</th>
            <th className="border border-gray-300 p-2">Range/$</th>
          </tr>
        </thead>
        <tbody>
          {efficientEVs.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{item.make}</td>
              <td className="border border-gray-300 p-2">{item.model}</td>
              <td className="border border-gray-300 p-2">{item.year}</td>
              <td className="border border-gray-300 p-2">{item.range} mi</td>
              <td className="border border-gray-300 p-2">{item.efficiency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EVEfficiencyLeaderboard;
