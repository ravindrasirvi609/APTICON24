"use client";
import React, { useState } from "react";
import Image from "next/image";

interface RegistrationDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationDialog: React.FC<RegistrationDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    email: "",
    transactionId: "",
    feeType: "",
    whatsappNumber: "",
    countryCode: "+91",
    dob: "",
    idCardType: "",
    aadharNumber: "",
    gender: "",
    institution: "",
    address: "",
    paymentMethod: "",
    city: "",
    state: "",
    pincode: "",
    foodChoice: "",
    accommodation: "",
    accompanyingPerson: "",
    membershipNumber: "", // Added field
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  type FeeType = {
    type: string;
    fees: { [key: string]: string };
    Price: { [key: string]: string };
  };

  const registrationFees: FeeType[] = [
    {
      type: "Early Bird (Upto 15th July)",
      fees: {
        "APTI Members": "₹ 2800",
        students: "₹ 2500",
        "non-Members": "₹ 3300",
        industry: "₹ 4000",
        companion: "₹ 1500",
        international: "118 USD",
      },
      Price: {
        "APTI Members": "₹ 3500",
        students: "₹ 2900",
        "non-Members": "₹ 4000",
        industry: "₹ 4500",
        companion: "",
        international: "",
      },
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/registrationDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      setIsLoading(false);
      if (res.ok) {
        alert("Registration successful! Check your email for confirmation.");
        onClose();
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsLoading(false);
      alert("An error occurred while submitting the form.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative overflow-auto max-h-screen">
        {!isLoading && successMessage && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
            <div className="text-green-600 font-bold text-xl">
              {successMessage}
            </div>
          </div>
        )}
        <Image
          src="/APTICON_QR.png"
          alt="APTICON QR Code"
          width={300}
          height={300}
          className="mx-auto"
        />
        <p className="text-center items-center">UPI ID: 325478610453529@cnrb</p>
        <h3 className="text-2xl font-bold text-center text-green mt-4">
          Scan the QR code to pay and add the transaction ID.{" "}
        </h3>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <select
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="title"
              value={formData.title}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Title
              </option>
              <option value="Prof.">Prof.</option>
              <option value="Dr.">Dr.</option>
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email ID
            </label>
            <input
              type="email"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payment Method
            </label>
            <select
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Payment Method
              </option>
              <option value="PhonePe">PhonePe</option>
              <option value="Paytm">Paytm</option>
              <option value="GooglePay">Google Pay</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              {formData.paymentMethod === "PhonePe"
                ? "UTR Number"
                : formData.paymentMethod === "Paytm"
                ? "UPI Ref No."
                : formData.paymentMethod === "GooglePay"
                ? "UPI Transaction ID"
                : "Transaction ID"}
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              placeholder={`Enter ${
                formData.paymentMethod === "PhonePe"
                  ? "UTR Number"
                  : formData.paymentMethod === "Paytm"
                  ? "UPI Ref No."
                  : formData.paymentMethod === "GooglePay"
                  ? "UPI Transaction ID"
                  : "Transaction ID"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Fee Type
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 text-black rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              value={formData.feeType}
              onChange={handleChange}
              name="feeType"
            >
              <option value="" disabled>
                Select Fee Type
              </option>
              {registrationFees.map((fee, index) => (
                <optgroup key={index} label={fee.type}>
                  {Object.entries(fee.fees).map(([key, value]) => (
                    <option key={key} value={key}>
                      {key.charAt(0).toUpperCase() + key.slice(1)} - {value}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {formData.feeType === "APTI Members" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Membership Number
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
                required
                name="membershipNumber"
                value={formData.membershipNumber}
                onChange={handleChange}
                placeholder="Enter membership number"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              WhatsApp Number
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country Code
            </label>
            <select
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+91">+91</option>
              {/* Add other country codes as needed */}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth (DOB)
            </label>
            <input
              type="date"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              ID Card Type
            </label>
            <select
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="idCardType"
              value={formData.idCardType}
              onChange={handleChange}
            >
              <option value="Aadhar Card">Aadhar Card</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Aadhar Number
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="aadharNumber"
              value={formData.aadharNumber}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Institution
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="institution"
              value={formData.institution}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pincode
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Food Choice
            </label>
            <select
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="foodChoice"
              value={formData.foodChoice}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Food Choice
              </option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Accommodation
            </label>
            <select
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              required
              name="accommodation"
              value={formData.accommodation}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select Accommodation
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Accompanying Person
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
              name="accompanyingPerson"
              value={formData.accompanyingPerson}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green hover:bg-green"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RegistrationDialog;
