import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Tooltip);

const EVGrowthTrend = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="text-center text-gray-500">No Data Available</p>;

  // Aggregate EV counts by model year
  const yearlyEVSales = data.reduce((acc, item) => {
    acc[item.model_year] = (acc[item.model_year] || 0) + 1;
    return acc;
  }, {});

  const years = Object.keys(yearlyEVSales).map(Number).sort((a, b) => a - b);
  const evCounts = years.map((year) => yearlyEVSales[year]);

  const chartData = {
    labels: years,
    datasets: [
      {
        label: "EVs Sold Per Year",
        data: evCounts,
        borderColor: "#2563eb",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        pointBackgroundColor: "#1d4ed8",
        pointBorderColor: "#ffffff",
        tension: 0.3, // Smooth curve effect
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: "#1e40af",
        titleColor: "#ffffff",
        bodyColor: "#f3f4f6",
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-bold mb-3 text-center">📅 EV Growth Trend</h2>
      <div className="overflow-x-auto">
        <Line data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default EVGrowthTrend;
