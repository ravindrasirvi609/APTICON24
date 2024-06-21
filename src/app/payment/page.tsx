"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Payment: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment processing here

    // Simulate a successful payment
    const isPaymentSuccessful = true;
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
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              id="cardNumber"
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                className="block text-darkBrown text-lg mb-2"
                htmlFor="expiryDate"
              >
                Expiry Date
              </label>
              <input
                id="expiryDate"
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-darkBrown text-lg mb-2"
                htmlFor="cvv"
              >
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green"
                required
              />
            </div>
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
