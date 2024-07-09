"use client";
import React, { useState } from "react";
import axios from "axios";
import crc32 from "crc-32";

const Payment: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const generateChecksum = (msg: string, secretKey: string): string => {
    const inputData = `${msg}${secretKey}`;
    const crc32Value = crc32.str(inputData) >>> 0; // Convert to unsigned 32-bit integer
    return crc32Value.toString(16).toUpperCase().padStart(8, "0");
  };

  const processPayment = async (orderId: string, transactionAmount: string) => {
    const messageType = "0100";
    const merchantId = "UATAPTISG0000001631";
    const serviceId = "Education";
    const customerId = "123456789012";
    const currencyCode = "INR";
    const requestDateTime = "18072024";
    const successUrl = "https://apticon2024.com/success";
    const failUrl = "https://apticon2024.com/failure";
    const additionalField1 = "static_value_1";
    const additionalField2 = "static_value_2";
    const additionalField3 = "static_value_3";
    const additionalField4 = "static_value_4";
    const additionalField5 = "static_value_5";

    const message = `${messageType}|${merchantId}|${serviceId}|${orderId}|${customerId}|${transactionAmount}|${currencyCode}|${requestDateTime}|${successUrl}|${failUrl}|${additionalField1}|${additionalField2}|${additionalField3}|${additionalField4}|${additionalField5}`;
    const secretKey =
      "7f6de8da9776966c5393975870a2752ae434310bb80296efdc3666093d7435b8";

    const checksumValue = generateChecksum(message, secretKey);

    const payload: { [key: string]: string } = {
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
      additionalField1,
      additionalField2,
      additionalField3,
      additionalField4,
      additionalField5,
      checksum: checksumValue,
    };

    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post(
        "https://pilot.surepay.ndml.in/SurePayPayment/sp/processRequest",
        formData
      );

      if (response.status === 200) {
        console.log(response.data);
        // Handle successful response
      } else {
        console.error("Payment failed");
        // Handle payment failure
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await processPayment(orderId, transactionAmount);
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
