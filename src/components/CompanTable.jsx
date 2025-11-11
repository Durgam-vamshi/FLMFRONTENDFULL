



  import React from "react";

function CompanyTable({ companies }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-600">
          <tr>
            <th
              scope="col"
              className="py-3 px-6 text-left text-white uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-left text-white uppercase tracking-wider"
            >
              Location
            </th>
            <th
              scope="col"
              className="py-3 px-6 text-left text-white uppercase tracking-wider"
            >
              Industry
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {companies.map((company, index) => (
            <tr
              key={company._id}
              className={`transition duration-300 hover:bg-blue-50 ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="py-4 px-6 font-medium text-gray-800">{company.name}</td>
              <td className="py-4 px-6 text-gray-600">{company.location}</td>
              <td className="py-4 px-6 text-gray-600">{company.industry}</td>
            </tr>
          ))}
          {companies.length === 0 && (
            <tr>
              <td colSpan="3" className="text-center py-6 text-gray-500">
                No companies found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Mobile View */}
      <div className="md:hidden mt-4 space-y-4">
        {companies.map((company) => (
          <div
            key={company._id}
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <p className="text-gray-800 font-semibold">{company.name}</p>
            <p className="text-gray-500"><span className="font-medium">Location:</span> {company.location}</p>
            <p className="text-gray-500"><span className="font-medium">Industry:</span> {company.industry}</p>
          </div>
        ))}
        {companies.length === 0 && (
          <div className="text-center py-6 text-gray-500">
            No companies found.
          </div>
        )}
      </div>
    </div>
  );
}

export default CompanyTable;
