"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import crc32 from "crc-32";

const Payment: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [orderId, setOrderId] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const messageType = "0100";
    const merchantId = "UATAPTISG0000001631";
    const serviceId = "Education";
    const customerId = "123456789012";
    const currencyCode = "INR";
    const requestDateTime = new Date().toISOString();
    const successUrl = "https://www.apticon2024.com/success";
    const failUrl = "https://www.apticon2024.com/failure";

    const message = `${messageType}|${merchantId}|${serviceId}|${orderId}|${customerId}|${transactionAmount}|${currencyCode}|${requestDateTime}|${successUrl}|${failUrl}`;
    const secretKey =
      "7f6de8da9776966c5393975870a2752ae434310bb80296efdc3666093d7435b8"; // The secret key provided by SurePay

    const checksumValue = generateCRC32Checksum(message, secretKey);

    const payload = {
      merchantId,
      messageType,
      serviceId,
      orderId,
      customerId,
      transactionAmount,
      currencyCode,
      requestDateTime,
      successUrl,
      failUrl,
      checksum: checksumValue,
    };

    try {
      const response = await fetch(
        "https://pilot.surepay.ndml.in/SurePayPayment/sp/processRequest",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        // Handle successful payment response
        const data = await response.json();
        console.log(data);
      } else {
        // Handle failed payment response
        console.error("Payment failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const generateCRC32Checksum = (
    message: string,
    secretKey: string
  ): string => {
    const msg = message + "|" + secretKey;
    const bytes = new TextEncoder().encode(msg);
    const checksumValue = crc32.buf(bytes);
    return checksumValue.toString();
  };

  return (
    <div className="bg-ashGrey min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-green text-4xl font-bold mb-4">Payment Details</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-darkBrown text-lg mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              required
            />
          </div>
          <div>
            <label
              className="block text-darkBrown text-lg mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              required
            />
          </div>

          <div>
            <label
              className="block text-darkBrown text-lg mb-2"
              htmlFor="orderId"
            >
              Order ID
            </label>
            <input
              id="orderId"
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              required
            />
          </div>
          <div>
            <label
              className="block text-darkBrown text-lg mb-2"
              htmlFor="transactionAmount"
            >
              Transaction Amount
            </label>
            <input
              id="transactionAmount"
              type="text"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green text-white px-4 py-2 rounded-lg hover:bg-darkBrown transition duration-300"
          >
            Submit Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
