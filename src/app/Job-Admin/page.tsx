"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SuccessPage = () => {
  const router = useRouter();
  const [paymentDetails, setPaymentDetails] = useState<string[]>([]);

  useEffect(() => {
    if (router.isReady) {
      const { msg } = router.query;
      if (msg && typeof msg === "string") {
        // Decode the URL-encoded string
        const decodedMsg = decodeURIComponent(msg);
        // Split the string by '|' to extract individual pieces of information
        const detailsArray = decodedMsg.split("|");
        setPaymentDetails(detailsArray);
      }
    }
  }, [router.isReady, router.query]);

  if (!paymentDetails.length) {
    return <div>Loading...</div>;
  }

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

  return (
    <div>
      <h1>Payment Successful</h1>
      <ul>
        {paymentDetails.map((detail, index) => (
          <li key={index}>
            <strong>{labels[index]}:</strong> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuccessPage;
