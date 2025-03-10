import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const EVRangeVsPrice = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="text-center text-gray-500">No Data Available</p>;

  // Process data using reduce() for uniqueness
  const processedData = data.reduce((acc, ev) => {
    if (ev.base_msrp && ev.electric_range) {
      acc.push({ x: ev.base_msrp, y: ev.electric_range });
    }
    return acc;
  }, []);

  const scatterData = {
    datasets: [
      {
        label: "EV Price vs Range",
        data: processedData,
        backgroundColor: "rgba(99, 102, 241, 0.7)", // Elegant blue-violet color
        borderColor: "rgba(99, 102, 241, 1)",
        pointRadius: 5, // Larger points for better visibility
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) =>
            `MSRP: $${tooltipItem.raw.x.toLocaleString()} | Range: ${tooltipItem.raw.y} mi`,
        },
      },
      legend: { position: "top" },
    },
    scales: {
      x: {
        title: { display: true, text: "Base MSRP ($)", font: { size: 14 } },
        ticks: { callback: (value) => `$${value / 1000}k` }, // Shorten labels
      },
      y: {
        title: { display: true, text: "Electric Range (miles)", font: { size: 14 } },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <h2 className="text-xl font-semibold text-center mb-3">
        📊 EV Price vs Electric Range
      </h2>
      <div className="h-[500px] w-full">
        <Scatter data={scatterData} options={options} />
      </div>
    </div>
  );
};

export default EVRangeVsPrice;
