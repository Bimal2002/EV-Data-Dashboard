import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const EVAdoptionTrend = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="text-center text-gray-500">No Data Available</p>;

  // Aggregate EV count by year
  const yearlyData = data.reduce((acc, ev) => {
    acc[ev.model_year] = (acc[ev.model_year] || 0) + 1;
    return acc;
  }, {});

  // Convert object to sorted array
  const formattedData = Object.entries(yearlyData)
    .map(([year, count]) => ({ year: parseInt(year, 10), count }))
    .sort((a, b) => a.year - b.year);

  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <h2 className="text-xl font-semibold text-center mb-3">
        📈 EV Adoption Over the Years
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={formattedData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#6366F1"
            strokeWidth={2.5}
            dot={{ fill: "#4F46E5", r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EVAdoptionTrend;
