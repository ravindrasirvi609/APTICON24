"use client";
import React, { useState, useEffect, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

interface RegistrationData {
  Title: string;
  FullName: string;
  Institution: string;
  FeeType: string;
  "Regn No": string;
}

interface RegistrationTableProps {
  data: RegistrationData[];
}

const RegistrationTable: React.FC<RegistrationTableProps> = ({ data }) => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(25);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredData = useMemo(() => {
    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-[#C8BEB7]">
      <h1 className="text-3xl font-bold mb-6 text-[#231F20] text-center">
        Confirmed Registrations
      </h1>

      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 pr-10 border text-[#231F20] border-[#6D2200] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search
            className="absolute right-3 top-2.5 text-[#6D2200]"
            size={20}
          />
        </div>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-[#2C5F2D] text-white">
            <tr>
              {[
                "Title",
                "Full Name",
                "Institution",
                "Registration No.",

                "Fee Type",
              ].map((header) => (
                <th
                  key={header}
                  className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-[#C8BEB7]">
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row: RegistrationData, index: number) => (
                <tr
                  key={index}
                  className="hover:bg-[#C8BEB7] transition-colors duration-200"
                >
                  {Object.values(row).map((value, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="px-4 py-3 whitespace-nowrap text-sm text-[#231F20]"
                    >
                      {String(value)}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <button
            onClick={() => handleChangePage(page - 1)}
            disabled={page === 0}
            className="px-3 py-1 bg-[#B5814F] text-white rounded hover:bg-[#C75400] disabled:opacity-50 transition-colors duration-200 flex items-center"
          >
            <ChevronLeft size={16} className="mr-1" /> Previous
          </button>
          <button
            onClick={() => handleChangePage(page + 1)}
            disabled={page >= totalPages - 1}
            className="px-3 py-1 bg-[#B5814F] text-white rounded hover:bg-[#C75400] disabled:opacity-50 transition-colors duration-200 flex items-center"
          >
            Next <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            className="px-2 py-1 bg-white border border-[#6D2200] rounded focus:outline-none focus:ring-2 focus:ring-[#2C5F2D]"
          >
            {[5, 10, 25].map((value) => (
              <option key={value} value={value}>
                {value} rows
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default RegistrationTable;
