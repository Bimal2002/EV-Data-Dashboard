import React, { useState } from "react";
import DataFilters from "./components/DataFilters";
import VirtualizedTable from "./components/VirtualizedTable";
import TopCitiesTable from "./components/TopCitiesTable";
import MostAffordableEVs from "./components/MostAffordableEVs";
import EVPriceByState from "./components/EVPriceByState";
import BarChartComponent from "./components/BarChartComponent";
import LineChartComponent from "./components/LineChartComponent";
import PieChartComponent from "./components/PieChartComponent";
import LargeScatterPlot from "./components/LargeScatterPlot";
import EVPriceHistogram from "./components/EVPriceHistogram";
import EVEfficiencyLeaderboard from "./components/EVEfficiencyLeaderboard";
import EVGrowthTrend from "./components/EVGrowthTrend";
import evData from "./data/ev_data.json";

const App = () => {
  const [filteredData, setFilteredData] = useState(evData);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">🚗 Electric Vehicle Data Dashboard</h1>

      {/* Search & Filter */}
      <DataFilters setFilteredData={setFilteredData} />

      {/* Charts (Visualizations) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <BarChartComponent data={filteredData} />
        <PieChartComponent data={filteredData} />
      </div>

      <LineChartComponent data={filteredData} />
      <LargeScatterPlot data={filteredData} />

      {/* Tables (Detailed Insights) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <TopCitiesTable data={filteredData} />
        {/* <EVPriceByState data={filteredData} /> */}
      </div>
       
      <MostAffordableEVs data={filteredData} />
      <EVPriceHistogram data={filteredData} />
      <EVEfficiencyLeaderboard data={filteredData} />
      <EVGrowthTrend data={filteredData} />
      <h2 className="text-xl font-bold mt-6">📊 Full EV Data Table</h2>
      <VirtualizedTable data={filteredData} />

      <div className="p-4 bg-gray-50 min-h-screen">
      
    </div>
    </div>
  );
};

export default App;
