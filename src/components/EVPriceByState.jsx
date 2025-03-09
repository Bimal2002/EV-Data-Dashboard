// import React from "react";

// const EVPriceByState = ({ data }) => {
//   if (!data || data.length === 0) return <p className="text-center">No Data Available</p>;

//   const statePrices = data.reduce((acc, item) => {
//     acc[item.state] = acc[item.state] || { total: 0, count: 0 };
//     acc[item.state].total += item.base_msrp;
//     acc[item.state].count++;
//     return acc;
//   }, {});

//   const avgPrices = Object.entries(statePrices)
//     .map(([state, values]) => ({
//       state,
//       avgPrice: (values.total / values.count).toFixed(2),
//     }))
//     .sort((a, b) => b.avgPrice - a.avgPrice) // Sort by highest price
//     .slice(0, 10);

//   return (
//     <div className="bg-white shadow-md p-4 rounded">
//       <h2 className="text-xl font-bold mb-2">🏆 EV Price Distribution by State (Top 10)</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 p-2">State</th>
//             <th className="border border-gray-300 p-2">Avg MSRP ($)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {avgPrices.map((item, index) => (
//             <tr key={index} className="text-center">
//               <td className="border border-gray-300 p-2">{item.state}</td>
//               <td className="border border-gray-300 p-2">${item.avgPrice}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default EVPriceByState;



import React from "react";

const EVPriceByState = ({ data }) => {
  if (!data || data.length === 0) return <p className="text-center">No Data Available</p>;

  // Grouping EVs by state and calculating average MSRP
  const statePrices = data.reduce((acc, item) => {
    if (item.base_msrp && item.base_msrp > 5000) { // Ignore invalid prices
      const state = item.state?.trim() || "Unknown"; // Handle missing state names
      if (!acc[state]) {
        acc[state] = { total: 0, count: 0 };
      }
      acc[state].total += item.base_msrp;
      acc[state].count++;
    }
    return acc;
  }, {});

  // Compute Average Prices per State
  const avgPrices = Object.entries(statePrices)
    .map(([state, values]) => ({
      state,
      avgPrice: (values.total / values.count).toFixed(2),
    }))
    .filter((item) => !isNaN(item.avgPrice)) // Remove NaN values
    .sort((a, b) => b.avgPrice - a.avgPrice) // Sort by highest price
    .slice(0, 10); // Show top 10 states

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-xl font-bold mb-2">🏆 EV Price Distribution by State (Top 10)</h2>
      {avgPrices.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">State</th>
              <th className="border border-gray-300 p-2">Avg MSRP ($)</th>
            </tr>
          </thead>
          <tbody>
            {avgPrices.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 p-2">{item.state}</td>
                <td className="border border-gray-300 p-2">${item.avgPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-red-500">No valid price data available.</p>
      )}
    </div>
  );
};

export default EVPriceByState;
