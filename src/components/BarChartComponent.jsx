import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const BarChartComponent = ({ data }) => {
  const topMakes = Object.entries(
    data.reduce((acc, item) => {
      acc[item.make] = (acc[item.make] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([make, count]) => ({ make, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Top 10 EV Manufacturers</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={topMakes}>
          <XAxis dataKey="make" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
