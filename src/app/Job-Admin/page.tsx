"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  useEffect(() => {
    const processPaymentData = async () => {
      if (typeof window !== "undefined") {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const msg = urlSearchParams.get("msg");

        if (msg) {
          const [
            status,
            code,
            merchantId,
            purpose,
            orderId,
            customerId,
            amount,
            currency,
            paymentMethod,
            timestamp,
            referenceId,
            transactionId,
            resultIndicator,
            ...staticValues
          ] = msg.split("|");

          setPaymentData({
            status,
            code,
            merchantId,
            purpose,
            orderId,
            customerId,
            amount,
            currency,
            paymentMethod,
            timestamp,
            referenceId,
            transactionId,
            resultIndicator,
            staticValues,
          });
        } else {
          // If there's no msg parameter, it might be a POST request
          try {
            const formData = await new Promise<FormData>((resolve) => {
              const form = document.createElement("form");
              form.style.display = "none";
              document.body.appendChild(form);
              form.onsubmit = (e) => {
                e.preventDefault();
                resolve(new FormData(form));
              };
              form.submit();
            });

            const msg = formData.get("msg") as string;
            if (msg) {
              // Redirect to the same page with the msg as a query parameter
              router.replace(`/success?msg=${encodeURIComponent(msg)}`);
              return;
            }
          } catch (error) {
            console.error("Error processing form data:", error);
          }
        }
      }
      setIsLoading(false);
    };

    processPaymentData();
  }, [router]);

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
