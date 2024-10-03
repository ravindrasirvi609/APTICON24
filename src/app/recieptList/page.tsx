"use client"; // This makes the component a Client Component

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { feesRecipt } from "@/recieptlist";

export interface FeeReceipt {
  Title?: string | null; // Optional and can be null explicitly
  "Name of Delegate": string; // Required field
  Affiliation: string; // Required field
  "Link to Download Fee Receipt": string; // Required field
}

const FeeReceiptTable: React.FC = () => {
  // Add state for the search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Function to handle search query changes
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filtered list based on search query
  const filteredReceipts = feesRecipt.filter((receipt) => {
    const delegateName = receipt["Name of Delegate"].toLowerCase();
    const affiliation = receipt.Affiliation.toLowerCase();
    return (
      delegateName.includes(searchQuery) || affiliation.includes(searchQuery)
    );
  });

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Conference Fee Receipts</h1>
        <p className="text-gray-600">
          Below is a list of delegates for the conference. You can search by
          delegate name or affiliation and download their fee receipt.
        </p>
      </div>

      {/* Search Feature */}
      <div className="mb-6">
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Search by Name or Affiliation"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Table Section */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Name of Delegate</TableHead>
            <TableHead>Affiliation</TableHead>
            <TableHead>Download Receipt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredReceipts.length > 0 ? (
            filteredReceipts.map((receipt: FeeReceipt, index: number) => (
              <TableRow key={index}>
                <TableCell>{receipt.Title || "N/A"}</TableCell>
                <TableCell>{receipt["Name of Delegate"]}</TableCell>
                <TableCell>{receipt.Affiliation}</TableCell>
                <TableCell>
                  <Button
                    onClick={() =>
                      window.open(
                        receipt["Link to Download Fee Receipt"],
                        "_blank"
                      )
                    }
                  >
                    Download
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default FeeReceiptTable;
