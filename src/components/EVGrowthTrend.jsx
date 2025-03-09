import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

const EVGrowthTrend = ({ data }) => {
  if (!data || data.length === 0) return <p className="text-center">No Data Available</p>;

  const evByYear = data.reduce((acc, item) => {
    acc[item.model_year] = (acc[item.model_year] || 0) + 1;
    return acc;
  }, {});

  const years = Object.keys(evByYear).map(Number).sort((a, b) => a - b);
  const counts = years.map((year) => evByYear[year]);

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-xl font-bold mb-2">📅 EV Growth Trend</h2>
      <Line
        data={{
          labels: years,
          datasets: [{ label: "EVs Sold", data: counts, borderColor: "#4f46e5" }],
        }}
        options={{ responsive: true }}
      />
    </div>
  );
};

export default EVGrowthTrend;
