import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

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
    <div className="bg-white shadow-lg p-4 rounded-md">
      <h2 className="text-lg md:text-xl font-semibold mb-3 text-center">🏆 Top 10 EV Manufacturers</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={topMakes} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="make" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="url(#colorUv)" barSize={30} radius={[8, 8, 0, 0]} />
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366F1" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.6} />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
