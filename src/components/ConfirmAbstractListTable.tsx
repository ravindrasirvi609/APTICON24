"use client";
import React, { useState } from "react";
import { abstracts } from "../../abstractData";
import { Search } from "lucide-react";

export interface Abstract {
  "Presentation Code": string;
  "Presentation Type": string;
  "Name of Presenting Author": string;
  "Paper Title": string;
}

const AbstractListTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAbstracts = abstracts.filter((abstract) =>
    Object.values(abstract).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto p-4 bg-[#C8BEB7] min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#231F20]">
        Abstract List
      </h1>
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search abstracts..."
          className="w-full p-4 pl-12 bg-white border-2 border-[#2C5F2D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C5F2D] text-[#231F20]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2C5F2D]"
          size={20}
        />
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#2C5F2D] text-white">
              <th className="py-3 px-4 text-left">Presentation Code</th>
              <th className="py-3 px-4 text-left">Presentation Type</th>
              <th className="py-3 px-4 text-left">Presenting Author</th>
              <th className="py-3 px-4 text-left">Title of Abstract</th>
            </tr>
          </thead>
          <tbody>
            {filteredAbstracts.map((abstract, index) => (
              <tr
                key={index}
                className={`border-b border-[#C8BEB7] hover:bg-[#C8BEB7] transition-colors duration-200 ${
                  index % 2 === 0 ? "bg-white" : "bg-[#F5F5F5]"
                }`}
              >
                <td className="py-3 px-4 text-[#6D2200] font-medium">
                  {abstract["Presentation Code"]}
                </td>
                <td className="py-3 px-4 text-[#231F20]">
                  {abstract["Presentation Type"]}
                </td>
                <td className="py-3 px-4 text-[#231F20]">
                  {abstract["Name of Presenting Author"]}
                </td>
                <td className="py-3 px-4 text-[#231F20]">
                  {abstract["Paper Title"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {filteredAbstracts.length === 0 && (
        <p className="text-center mt-8 text-[#6D2200] text-xl">
          No abstracts found matching your search.
        </p>
      )}
    </div>
  );
};

export default AbstractListTable;
