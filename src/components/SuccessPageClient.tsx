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
      // Decode the URL-encoded string
      const decodedMsg = decodeURIComponent(msg);
      // Split the string by '|' to extract individual pieces of information
      const detailsArray = decodedMsg.split("|");

      // Define labels for the payment details
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

      // Create an array of objects with labels and values
      const details = detailsArray.map((detail, index) => ({
        label: labels[index] || `Field ${index + 1}`,
        value: detail,
      }));

      setPaymentDetails(details);
    }
  }, [searchParams]);

  if (!paymentDetails.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Payment Successful</h1>
      <ul>
        {paymentDetails.map((detail, index) => (
          <li key={index}>
            <strong>{detail.label}:</strong> {detail.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessPageClient;
