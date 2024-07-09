"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import crc32 from "crc-32";
import crypto from "crypto";
import axios from "axios";

const Payment: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");
  const [additionalField1, setAdditionalField1] = useState("");
  const [additionalField2, setAdditionalField2] = useState("");
  const [additionalField3, setAdditionalField3] = useState("");
  const [additionalField4, setAdditionalField4] = useState("");
  const [additionalField5, setAdditionalField5] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const messageType = "0100";
    const merchantId = "UATAPTISG0000001631";
    const serviceId = "Education";
    const customerId = "123456789012";
    const currencyCode = "INR";
    const requestDateTime = "09-07-2024"; // Convert to the correct format
    const successUrl = "https://apticon2024.com/success";
    const failUrl = "https://apticon2024.com/failure";

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
      checksum: checksumValue.toString(),
    };

    const formData = new FormData();

    // Append each property from payload to formData
    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });

    try {
      const response = await axios.post(
        "https://pilot.surepay.ndml.in/SurePayPayment/sp/processRequest",
        formData
      );

      // Axios automatically handles response.ok for status codes 200-299
      if (response.status === 200) {
        // Handle successful payment response
        console.log(response.data);
      } else {
        // Handle failed payment response
        console.error("Payment failed");
      }
    } catch (error) {
      // Handle network errors or Axios-related errors
      console.error("Error:", error);
    }
  };

  function generateChecksum(msg: string, secretkey: string) {
    const inputData = `${msg}|"${secretkey}"`;
    const crc32Value = crc32.str(inputData) >>> 0; // Convert to unsigned 32-bit integer
    return crc32Value;
  }

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
          <div>
            <label
              className="block text-darkBrown text-lg mb-2"
              htmlFor="additionalField1"
            >
              Additional Field 1
            </label>
            <input
              id="additionalField1"
              type="text"
              value={additionalField1}
              onChange={(e) => setAdditionalField1(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div>
          <div>
            <label
              className="block text-darkBrown text-lg mb-2"
              htmlFor="additionalField2"
            >
              Additional Field 2
            </label>
            <input
              id="additionalField2"
              type="text"
              value={additionalField2}
              onChange={(e) => setAdditionalField2(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div>
          <div>
            <label
              className="block text-darkBrown text-lg mb-2"
              htmlFor="additionalField3"
            >
              Additional Field 3
            </label>
            <input
              id="additionalField3"
              type="text"
              value={additionalField3}
              onChange={(e) => setAdditionalField3(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div>
          <div>
            <label
              className="block text-darkBrown text-lg mb-2"
              htmlFor="additionalField4"
            >
              Additional Field 4
            </label>
            <input
              id="additionalField4"
              type="text"
              value={additionalField4}
              onChange={(e) => setAdditionalField4(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
            />
          </div>
          <div>
            <label
              className="block text-darkBrown text-lg mb-2"
              htmlFor="additionalField5"
            >
              Additional Field 5
            </label>
            <input
              id="additionalField5"
              type="text"
              value={additionalField5}
              onChange={(e) => setAdditionalField5(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
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
