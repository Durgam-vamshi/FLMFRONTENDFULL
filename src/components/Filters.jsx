



import React from "react";

function Filters({
  search,
  setSearch,
  locationFilter,
  setLocationFilter,
  industryFilter,
  setIndustryFilter,
  locations,
  industries,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6 justify-center items-center">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="px-4 py-2 w-full md:w-1/3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
      />

      {/* Location Dropdown */}
      <select
        value={locationFilter}
        onChange={(e) => setLocationFilter(e.target.value)}
        className="px-4 py-2 w-full md:w-1/4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
      >
        <option value="">All Locations</option>
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* Industry Dropdown */}
      <select
        value={industryFilter}
        onChange={(e) => setIndustryFilter(e.target.value)}
        className="px-4 py-2 w-full md:w-1/4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition shadow-sm"
      >
        <option value="">All Industries</option>
        {industries.map((ind) => (
          <option key={ind} value={ind}>
            {ind}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;
