

import React, { useEffect, useState } from "react";
import { fetchCompanies } from "../api/CompanyService";
import Filters from "../components/Filters";
import CompanyTable from "../components/CompanTable";

function CompaniesPage() {
  const [companies, setCompanies] = useState([]);
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load companies from API with filters
  const loadCompanies = async () => {
    try {
      setLoading(true);
      const data = await fetchCompanies({
        search,
        location: locationFilter,
        industry: industryFilter,
      });
      setCompanies(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load companies");
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCompanies();
  }, [search, locationFilter, industryFilter]);

  // Unique filter values for dropdowns
  const locations = [...new Set(companies.map((c) => c.location))];
  const industries = [...new Set(companies.map((c) => c.industry))];

  if (loading)
    return (
      <div className="text-center mt-10 text-gray-600 font-semibold">
        Loading companies...
      </div>
    );
  if (error)
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">{error}</div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      {/* Page Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
        Companies Directory
      </h1>

      {/* Filters */}
      <div className="max-w-6xl mx-auto">
        <Filters
          search={search}
          setSearch={setSearch}
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          industryFilter={industryFilter}
          setIndustryFilter={setIndustryFilter}
          locations={locations}
          industries={industries}
        />
      </div>

      {/* Companies Table */}
      <div className="max-w-6xl mx-auto mt-4">
        <CompanyTable companies={companies} />
      </div>
    </div>
  );
}

export default CompaniesPage;
