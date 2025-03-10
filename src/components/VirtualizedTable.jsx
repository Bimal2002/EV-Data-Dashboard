import React, { memo } from "react";
import { FixedSizeList as List } from "react-window";

const Row = memo(({ index, style, data }) => {
  const item = data[index];
  return (
    <div
      style={{ ...style, display: "flex", padding: "10px", borderBottom: "1px solid #ddd" }}
      className={`text-sm ${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100 transition`}
    >
      <div className="w-1/6 truncate">{item.make}</div>
      <div className="w-1/6 truncate">{item.model}</div>
      <div className="w-1/12">{item.model_year}</div>
      <div className="w-1/12">{item.electric_range} mi</div>
      <div className="w-1/6">${item.base_msrp.toLocaleString()}</div>
      <div className="w-1/6 truncate">{item.city}, {item.state}</div>
      <div className="w-1/12">{item.postal_code}</div>
    </div>
  );
});

const VirtualizedTable = ({ data }) => {
  if (!data || data.length === 0)
    return <p className="text-center text-gray-500">No Data Available</p>;

  return (
    <div className="bg-white shadow-lg rounded-lg p-5">
      <h2 className="text-xl font-semibold mb-3 text-center">📊 EV Data Table</h2>
      <div className="overflow-x-auto" style={{ height: "500px", width: "100%" }}>
        <List
          height={500}
          itemCount={data.length}
          itemSize={50}
          width={"100%"}
          itemData={data}
        >
          {Row}
        </List>
      </div>
    </div>
  );
};

export default VirtualizedTable;
