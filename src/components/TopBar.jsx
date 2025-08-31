import React, { useState } from "react";

export default function TopBar({ onSearch, onFilter }) {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilterValue(value);
    onFilter(value);
  };

  const clearFilters = () => {
    setSearchValue("");
    setFilterValue("");
    onSearch("");
    onFilter("");
  };

  return (
    <div className="flex wrap bg-slate-300 dark:bg-slate-800 p-2 justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:justify-center max-sm:items-center">
      <div className="flex items-center gap-2">
        <label htmlFor="search">Search : </label>
        <input
          type="text"
          name="search"
          id="search"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search for items..."
          className="bg-slate-500 p-2 border-2 focus:outline-2 focus:outline-cyan-500 text-white placeholder-gray-300"
        />
        {searchValue && (
          <button
            onClick={() => {
              setSearchValue("");
              onSearch("");
            }}
            className="text-gray-400 hover:text-white px-2"
            title="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="filter">Filter : </label>
        <select
          id="filter"
          name="filter"
          value={filterValue}
          onChange={handleFilterChange}
          className="border-slate-50 p-2 bg-slate-500 text-white"
        >
          <option value="">All Products</option>
          <option value="inc">Price: Low to High</option>
          <option value="dec">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
          <option value="promotion">Highly Rated (4+ stars)</option>
          <option value="new">Popular (100+ reviews)</option>
        </select>

        {(searchValue || filterValue) && (
          <button
            onClick={clearFilters}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-sm"
            title="Clear all filters"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
}
