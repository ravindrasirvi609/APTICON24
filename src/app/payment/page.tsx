"use client";
import React, { useState } from "react";
import crc32 from "crc-32";

const Payment: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const [checksum, setChecksum] = useState("");
  const [transactionAmount, setTransactionAmount] = useState("");

  const generateChecksum = (message: string) => {
    function unsignedChecksum(n: any) {
      if (n >= 0) {
        return n;
      }
      return 0xffffffff - n * -1 + 1;
    }

    function checksum(message: any) {
      const encoder = new TextEncoder();
      const bytes = encoder.encode(message);
      const divisor = 0xedb88320;
      let crc = 0xffffffff;
      for (const byte of Array.from(bytes)) {
        crc = crc ^ byte;

        for (let i = 0; i < 8; i++) {
          if (crc & 1) {
            crc = (crc >>> 1) ^ divisor;
          } else {
            crc = crc >>> 1;
          }
        }
      }
      return unsignedChecksum(crc ^ 0xffffffff);
    }

    return checksum(message);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Generate all the required fields
    const messageType = "0100";
    const merchantId = "UATAPTISG0000001631";
    const serviceId = "Education";
    const customerId = "123456789012";
    const currencyCode = "INR";
    const now = new Date();
    const requestDateTime =
      [
        ("0" + now.getDate()).slice(-2),
        ("0" + (now.getMonth() + 1)).slice(-2),
        now.getFullYear(),
      ].join("-") +
      " " +
      [
        ("0" + now.getHours()).slice(-2),
        ("0" + now.getMinutes()).slice(-2),
        ("0" + now.getSeconds()).slice(-2),
      ].join(":");

    const successUrl = "https://apticon2024.com/success";
    const failUrl = "https://apticon2024.com/failure";
    const additionalField1 = "static_value_1";
    const additionalField2 = "static_value_2";
    const additionalField3 = "static_value_3";
    const additionalField4 = "static_value_4";
    const additionalField5 = "static_value_5";
    const secretKey =
      "7f6de8da9776966c5393975870a2752ae434310bb80296efdc3666093d7435b8";

    const message = `${messageType}|${merchantId}|${serviceId}|${orderId}|${customerId}|${transactionAmount}|${currencyCode}|${requestDateTime}|${successUrl}|${failUrl}|${additionalField1}|${additionalField2}|${additionalField3}|${additionalField4}|${additionalField5}|${secretKey}`;

    const checksumValue = generateChecksum(message);

    // Get the form element
    const form = e.target as HTMLFormElement;

    // Create a hidden input for the checksum
    const checksumInput = document.createElement("input");
    checksumInput.type = "hidden";
    checksumInput.name = "checksum";
    checksumInput.value = checksumValue.toString();

    // Add the checksum input to the form
    form.appendChild(checksumInput);

    // Update the requestDateTime hidden input
    const requestDateTimeInput = form.querySelector(
      'input[name="requestDateTime"]'
    ) as HTMLInputElement;
    if (requestDateTimeInput) {
      requestDateTimeInput.value = requestDateTime;
    } else {
      const newRequestDateTimeInput = document.createElement("input");
      newRequestDateTimeInput.type = "hidden";
      newRequestDateTimeInput.name = "requestDateTime";
      newRequestDateTimeInput.value = requestDateTime;
      form.appendChild(newRequestDateTimeInput);
    }

    // Submit the form
    form.submit();
  };
  return (
    <div className="bg-ashGrey min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-green text-4xl font-bold mb-4">Payment Details</h1>
        <form
          onSubmit={handleSubmit}
          action="https://pilot.surepay.ndml.in/SurePayPayment/sp/processRequest"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="merchantId" value="UATAPTISG0000001631" />
          <input type="hidden" name="messageType" value="0100" />
          <input type="hidden" name="serviceId" value="Education" />
          <input type="hidden" name="customerId" value="123456789012" />
          <input type="hidden" name="currencyCode" value="INR" />
          <input
            type="hidden"
            name="successUrl"
            value="https://apticon2024.com/success"
          />
          <input
            type="hidden"
            name="failUrl"
            value="https://apticon2024.com/failure"
          />
          <input type="hidden" name="additionalField1" value="static_value_1" />
          <input type="hidden" name="additionalField2" value="static_value_2" />
          <input type="hidden" name="additionalField3" value="static_value_3" />
          <input type="hidden" name="additionalField4" value="static_value_4" />
          <input type="hidden" name="additionalField5" value="static_value_5" />
          <input type="hidden" name="requestDateTime" value="" />
          {/* Visible form fields */}
          <div>
            <label className="block text-darkBrown text-lg mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
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
              name="email"
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
              name="orderId"
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
              name="transactionAmount"
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
