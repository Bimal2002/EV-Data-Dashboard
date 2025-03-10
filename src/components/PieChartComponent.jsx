import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell, Legend } from "recharts";

const colorPalette = ["#2563EB", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

const PieChartComponent = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-center text-gray-500">No Data Available</p>;
  }

  // Count EV types (BEV, PHEV, etc.), without filtering price
  const evTypeCounts = data.reduce((acc, ev) => {
    if (ev.electric_vehicle_type) {
      acc[ev.electric_vehicle_type] = (acc[ev.electric_vehicle_type] || 0) + 1;
    }
    return acc;
  }, {});

  // Convert to array for PieChart
  const evTypes = Object.entries(evTypeCounts).map(([type, count]) => ({
    name: type,
    value: count,
  }));

  // Handle empty dataset
  if (evTypes.length === 0) {
    return <p className="text-center text-red-500">No EV Type Data Available</p>;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <h2 className="text-xl font-semibold text-center mb-3">🚗 EV Type Distribution</h2>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={evTypes}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            innerRadius={50}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
          >
            {evTypes.map((entry, index) => (
              <Cell key={index} fill={colorPalette[index % colorPalette.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
