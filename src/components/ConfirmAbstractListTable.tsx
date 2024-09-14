"use client";
import React, { useState } from "react";
import { abstracts } from "../../abstractData";

export interface Abstract {
  "Presentation Code": string;
  "Presenting Author": string;
  "Title of Abstract": string;
}

const AbstractListTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAbstracts = abstracts.filter((abstract) =>
    Object.values(abstract).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Abstract List</h1>
      <input
        type="text"
        placeholder="Search abstracts..."
        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">
                Presentation Code
              </th>
              <th className="py-2 px-4 border-b text-left">
                Presenting Author
              </th>
              <th className="py-2 px-4 border-b text-left">
                Title of Abstract
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredAbstracts.map((abstract, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-2 px-4 border-b">
                  {abstract["Presentation Code"]}
                </td>
                <td className="py-2 px-4 border-b">
                  {abstract["Presenting Author"]}
                </td>
                <td className="py-2 px-4 border-b">
                  {abstract["Title of Abstract"]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AbstractListTable;
