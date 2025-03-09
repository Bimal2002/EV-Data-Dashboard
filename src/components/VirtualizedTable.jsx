import React from "react";
import { FixedSizeList as List } from "react-window";

const VirtualizedTable = ({ data }) => {
  if (!data || data.length === 0) return <p className="text-center">No Data Available</p>;

  return (
    <div className="bg-white shadow-md p-4 rounded">
      <h2 className="text-xl font-bold mb-2">EV Data Table</h2>
      <div style={{ height: "500px", width: "100%" }}>
        <List height={500} itemCount={data.length} itemSize={50} width={"100%"}>
          {({ index, style }) => {
            const item = data[index];
            return (
              <div
                style={{ ...style, display: "flex", padding: "10px", borderBottom: "1px solid #ddd" }}
                className="text-sm"
              >
                <div className="w-1/6">{item.make}</div>
                <div className="w-1/6">{item.model}</div>
                <div className="w-1/12">{item.model_year}</div>
                <div className="w-1/12">{item.electric_range} mi</div>
                <div className="w-1/6">${item.base_msrp}</div>
                <div className="w-1/6">{item.city}, {item.state}</div>
                <div className="w-1/12">{item.postal_code}</div>
              </div>
            );
          }}
        </List>
      </div>
    </div>
  );
};

export default VirtualizedTable;
