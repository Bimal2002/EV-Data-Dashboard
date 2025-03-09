import React from "react";

const MostAffordableEVs = ({ data }) => {
  if (!data || data.length === 0) return <p className="text-center">No Data Available</p>;

  const affordableEVs = data
    .map((item) => ({
      make: item.make,
      model: item.model,
      model_year: item.model_year,
      price: item.base_msrp,
      range: item.electric_range,
      priceToRange: (item.base_msrp / item.electric_range).toFixed(2),
    }))
    .filter((item) => item.range > 0 && item.price > 0) 
    .sort((a, b) => a.priceToRange - b.priceToRange) 
    .slice(0, 5);

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-xl font-bold mb-2">💰 Top 5 Most Affordable Long-Range EVs</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Make</th>
            <th className="border border-gray-300 p-2">Model</th>
            <th className="border border-gray-300 p-2">Year</th>
            <th className="border border-gray-300 p-2">MSRP ($)</th>
            <th className="border border-gray-300 p-2">Range (mi)</th>
            <th className="border border-gray-300 p-2">$/Mile</th>
          </tr>
        </thead>
        <tbody>
          {affordableEVs.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 p-2">{item.make}</td>
              <td className="border border-gray-300 p-2">{item.model}</td>
              <td className="border border-gray-300 p-2">{item.model_year}</td>
              <td className="border border-gray-300 p-2">${item.price}</td>
              <td className="border border-gray-300 p-2">{item.range} mi</td>
              <td className="border border-gray-300 p-2">${item.priceToRange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MostAffordableEVs;
