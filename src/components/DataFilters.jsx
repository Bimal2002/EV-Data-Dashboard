import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import evData from "../data/ev_data.json";

const DataFilters = ({ setFilteredData }) => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(evData);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFiltered(
        evData.filter(
          (item) =>
            item.make.toLowerCase().includes(search.toLowerCase()) ||
            item.model.toLowerCase().includes(search.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }, 300); // Debounce for better performance

    return () => clearTimeout(timeout);
  }, [search, setFilteredData]);

  return (
    <div className="p-4 bg-gray-100 shadow-lg rounded-lg flex items-center">
      <FaSearch className="text-gray-500 ml-2" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="🔍 Search by Make or Model..."
        className="w-full p-2 pl-4 border rounded-lg focus:ring-2 focus:ring-blue-500 transition-all"
      />
    </div>
  );
};

export default DataFilters;
