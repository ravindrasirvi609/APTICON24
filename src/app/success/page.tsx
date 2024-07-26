"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface ParsedData {
  status: string;
  code: string;
  merchantId: string;
  purpose: string;
  orderId: string;
  customerId: string;
  amount: string;
  currency: string;
  paymentMethod: string;
  timestamp: string;
  referenceId: string;
  transactionId: string;
  resultIndicator: string;
  staticValues: string[];
}

export default function SuccessPage() {
  const [paymentData, setPaymentData] = useState<ParsedData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const data = searchParams.get("data");
    if (data) {
      try {
        setPaymentData(JSON.parse(decodeURIComponent(data)));
      } catch (error) {
        console.error("Error parsing payment data:", error);
      }
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!paymentData) {
    return <div>No payment data available.</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <div className="space-y-2">
          <p>
            <strong>Amount:</strong> {paymentData.amount} {paymentData.currency}
          </p>
          <p>
            <strong>Transaction ID:</strong> {paymentData.transactionId}
          </p>
          <p>
            <strong>Payment Method:</strong> {paymentData.paymentMethod}
          </p>
          <p>
            <strong>Date:</strong> {paymentData.timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}
