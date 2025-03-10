import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const EVPriceHistogram = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="text-center text-gray-500">No Data Available</p>;

  // Define price brackets
  const priceRanges = ["<20k", "20k-40k", "40k-60k", "60k-80k", "80k+"];
  const priceBuckets = priceRanges.reduce((acc, range) => ({ ...acc, [range]: 0 }), {});

  // Categorize EVs into price ranges
  // data.forEach((ev) => {
  //   if (ev.base_msrp < 20000) priceBuckets["<20k"]++;
  //   else if (ev.base_msrp < 40000) priceBuckets["20k-40k"]++;
  //   else if (ev.base_msrp < 60000) priceBuckets["40k-60k"]++;
  //   else if (ev.base_msrp < 80000) priceBuckets["60k-80k"]++;
  //   else priceBuckets["80k+"]++;
  // });
  data.forEach((ev) => {
    if (ev.base_msrp > 0) { // ✅ Fixed condition
      if (ev.base_msrp < 20000) priceBuckets["<20k"]++;
      else if (ev.base_msrp < 40000) priceBuckets["20k-40k"]++;
      else if (ev.base_msrp < 60000) priceBuckets["40k-60k"]++;
      else if (ev.base_msrp < 80000) priceBuckets["60k-80k"]++;
      else priceBuckets["80k+"]++;
    }
  });

  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <h2 className="text-xl font-semibold mb-3 text-center">📊 EV Price Distribution</h2>
      <div className="h-[250px] w-full">
        <Bar
          data={{
            labels: priceRanges,
            datasets: [
              {
                label: "EV Count",
                data: Object.values(priceBuckets),
                backgroundColor: ["#4f46e5", "#22c55e", "#f59e0b", "#ef4444", "#8b5cf6"],
                borderRadius: 5, // Rounded bars for a modern look
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                callbacks: {
                  label: (tooltipItem) => `EVs: ${tooltipItem.raw}`,
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: { stepSize: 10 },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default EVPriceHistogram;
