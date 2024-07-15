"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Success: React.FC = () => {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const transactionId = searchParams.get("transactionId");
  return (
    <div className="bg-ashGrey min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-green text-4xl font-bold mb-4">Payment Success!</h1>
        <p className="text-darkBrown text-lg mb-6">
          Thank you for registering for APTICON 2024. We have received your
          payment successfully.
        </p>
        <h1>Payment Successful</h1>
        <p>Order ID: {orderId}</p>
        <p>Transaction ID: {transactionId}</p>
        <Link href="https://wa.me/YourWhatsAppChannel">
          <p className="bg-green text-white px-4 py-2 rounded-full inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="h-6 w-6 mr-2 fill-current text-white"
            >
              <path d="M16 0c8.837 0 16 7.163 16 16 0 3.206-.94 6.172-2.556 8.68L32 32l-7.457-1.949A15.951 15.951 0 0116 32C7.163 32 0 24.837 0 16S7.163 0 16 0zm-.235 2C8.063 2 2 8.07 2 16c0 3.069 1.003 5.93 2.712 8.236l-.715 4.735 4.839-1.272A13.942 13.942 0 0016 30c7.952 0 14-6.048 14-14 0-7.957-6.048-14-14.235-14zM22.743 20.493c-.357-.179-2.114-1.045-2.442-1.162-.327-.118-.566-.178-.805.179-.238.356-.92 1.162-1.13 1.4-.21.238-.417.267-.774.09-.357-.178-1.507-.553-2.868-1.764-1.06-.946-1.772-2.118-1.98-2.477-.21-.356-.023-.548.158-.726.161-.16.357-.416.536-.625.179-.208.238-.357.357-.596.118-.238.059-.447-.03-.625-.09-.179-.805-1.92-1.103-2.627-.297-.714-.596-.625-.804-.625-.208 0-.446-.03-.685-.03-.239 0-.625.09-.935.417-.297.297-1.138 1.11-1.138 2.706s1.163 3.141 1.325 3.36c.178.237 2.288 3.467 5.56 4.861.781.337 1.387.537 1.86.686.781.238 1.49.204 2.053.124.625-.09 2.114-.862 2.413-1.69.297-.83.297-1.54.208-1.69-.089-.147-.327-.237-.685-.416z" />
            </svg>
            Join Our WhatsApp Channel
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Success;
