import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const EVPriceHistogram = ({ data }) => {
  if (!data || data.length === 0) return <p className="text-center">No Data Available</p>;

  const priceBuckets = { "<20k": 0, "20k-40k": 0, "40k-60k": 0, "60k-80k": 0, "80k+": 0 };

  data.forEach((item) => {
    if (item.base_msrp < 20000) priceBuckets["<20k"]++;
    else if (item.base_msrp < 40000) priceBuckets["20k-40k"]++;
    else if (item.base_msrp < 60000) priceBuckets["40k-60k"]++;
    else if (item.base_msrp < 80000) priceBuckets["60k-80k"]++;
    else priceBuckets["80k+"]++;
  });

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-xl font-bold mb-2">📊 EV Price Distribution</h2>
      <Bar
        data={{
          labels: Object.keys(priceBuckets),
          datasets: [
            {
              label: "EV Count",
              data: Object.values(priceBuckets),
              backgroundColor: "#4f46e5",
            },
          ],
        }}
        options={{ responsive: true }}
      />
    </div>
  );
};

export default EVPriceHistogram;
