import React, { useState } from "react";
import evData from "../data/ev_data.json";

const DataFilters = ({ setFilteredData }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    setFilteredData(
      evData.filter(
        (item) =>
          item.make.toLowerCase().includes(query) ||
          item.model.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div className="p-4 bg-gray-100 shadow-md">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by Make or Model..."
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default DataFilters;
