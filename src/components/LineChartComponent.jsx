import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const LineChartComponent = ({ data }) => {
  const evByYear = Object.entries(
    data.reduce((acc, item) => {
      acc[item.model_year] = (acc[item.model_year] || 0) + 1;
      return acc;
    }, {})
  )
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => a.year - b.year);

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-xl font-bold mb-2">EV Adoption Over the Years</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={evByYear}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
