import React from "react";

export default function TopBar() {
  return (
    <div className="flex wrap bg-slate-300 dark:bg-slate-800 p-2 justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:justify-center max-sm:items-center">
      <div>
        <label for="Search">Search : </label>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search For items"
          className="bg-slate-500 p-2 border-2 focus:outline-2 focus:outline-cyan-500"
        />
      </div>

      <div className="flex-wrap items-center justify-center">
        <label for="filter">Filter : </label>
        <select
          id="filter"
          name="filter"
          className="border-slate-50 p-2 bg-slate-500"
        >
          <option value="">Please choose an option</option>
          <option value="dec">Increasing Price</option>
          <option value="inc">Decreasing Price</option>
          <option value="name">Name</option>
          <option value="promotion">Promotion</option>
          <option value="new">New</option>
        </select>
      </div>
    </div>
  );
}
