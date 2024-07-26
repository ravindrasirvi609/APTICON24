"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface PaymentDetail {
  label: string;
  value: string;
}

const SuccessPageClient: React.FC = () => {
  const searchParams = useSearchParams();
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetail[]>([]);

  useEffect(() => {
    const msg = searchParams.get("msg");
    if (msg) {
      const decodedMsg = decodeURIComponent(msg);
      const detailsArray = decodedMsg.split("|");

      const importantFields = [
        "Status",
        "Transaction ID",
        "Amount",
        "Currency",
        "Payment Mode",
        "Transaction Date",
      ];

      const labels = [
        "Status",
        "Response Code",
        "Merchant ID",
        "Product Info",
        "Transaction ID",
        "Reference Number",
        "Amount",
        "Currency",
        "Payment Mode",
        "Transaction Date",
        "Bank Ref Number",
        "Payment Gateway Transaction ID",
        "Auth Status",
        "Custom Field 1",
        "Custom Field 2",
        "Custom Field 3",
        "Custom Field 4",
        "Custom Field 5",
        "Checksum",
      ];

      const details = detailsArray
        .map((detail, index) => ({
          label: labels[index] || `Field ${index + 1}`,
          value: detail,
        }))
        .filter((detail) => importantFields.includes(detail.label));

      setPaymentDetails(details);
    }
  }, [searchParams]);

  if (!paymentDetails.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <h1 className="text-3xl font-extrabold text-center text-gray-900">
                  Payment Successful
                </h1>
                <svg
                  className="w-20 h-20 text-green-500 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                {paymentDetails.map((detail, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="font-medium">{detail.label}:</span>
                    <span className="text-gray-900">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPageClient;
