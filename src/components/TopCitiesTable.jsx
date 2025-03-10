import React from "react";

const EVTopCities = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="text-center text-gray-500">No Data Available</p>;

  // Aggregate EV count by city
  const cityData = data.reduce((acc, ev) => {
    if (ev.city) {
      acc[ev.city] = (acc[ev.city] || 0) + 1;
    }
    return acc;
  }, {});

  // Convert to array, sort, and extract top 10 cities
  const sortedCities = Object.entries(cityData)
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <h2 className="text-xl font-semibold text-center mb-3">🏙️ Top 10 Cities with Most EVs</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-blue-100 text-gray-800">
              <th className="border border-gray-300 p-3">City</th>
              <th className="border border-gray-300 p-3">EV Count</th>
            </tr>
          </thead>
          <tbody>
            {sortedCities.map((city, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-all">
                <td className="border border-gray-300 p-3">{city.city}</td>
                <td className="border border-gray-300 p-3">{city.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EVTopCities;
