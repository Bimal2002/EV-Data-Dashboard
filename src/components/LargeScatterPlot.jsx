// import React from "react";
// import { Scatter } from "react-chartjs-2";
// import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

// const LargeScatterPlot = ({ data }) => {
//   if (!data || data.length === 0) return <p className="text-center">No Data Available</p>;

//   const scatterData = {
//     datasets: [
//       {
//         label: "EV MSRP vs Electric Range",
//         data: data.map((item) => ({
//           x: item.base_msrp || 0,
//           y: item.electric_range || 0,
//         })),
//         backgroundColor: "rgba(75,192,192,0.5)",
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         title: { display: true, text: "Base MSRP ($)" },
//       },
//       y: {
//         title: { display: true, text: "Electric Range (mi)" },
//       },
//     },
//   };

//   return (
//     <div className="bg-white shadow-md p-4 rounded">
//       <h2 className="text-xl font-bold mb-2">MSRP vs Electric Range</h2>
//       <div style={{ height: "500px" }}>
//         <Scatter data={scatterData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default LargeScatterPlot;



import React from "react";
import { Scatter } from "react-chartjs-2";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from "chart.js";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const LargeScatterPlot = ({ data }) => {
  if (!data || data.length === 0) return <p className="text-center">No Data Available</p>;

  const scatterData = {
    datasets: [
      {
        label: "EV MSRP vs Electric Range",
        data: data.map((item) => ({
          x: item.base_msrp || 0,
          y: item.electric_range || 0,
        })),
        backgroundColor: "rgba(75,192,192,0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: { display: true, text: "Base MSRP ($)" },
      },
      y: {
        title: { display: true, text: "Electric Range (mi)" },
      },
    },
  };

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-xl font-bold mb-2">MSRP vs Electric Range</h2>
      <div style={{ height: "500px" }}>
        <Scatter data={scatterData} options={options} />
      </div>
    </div>
  );
};

export default LargeScatterPlot;
