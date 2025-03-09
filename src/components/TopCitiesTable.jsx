import React from "react";

const TopCitiesTable = ({ data }) => {
  if (!data || data.length === 0) return <p className="text-center">No Data Available</p>;

  const cityCounts = data.reduce((acc, item) => {
    acc[item.city] = (acc[item.city] || 0) + 1;
    return acc;
  }, {});

  const topCities = Object.entries(cityCounts)
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-xl font-bold mb-2">🔝 Top 10 Cities with Most EVs</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">City</th>
            <th className="border border-gray-300 p-2">EV Count</th>
          </tr>
        </thead>
        <tbody>
          {topCities.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{item.city}</td>
              <td className="border border-gray-300 p-2">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopCitiesTable;
