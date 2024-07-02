"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import { useState } from "react";
import Image from "next/image";

export default function Registration() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    transactionId: "",
    feeType: "",
  });

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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/registrationDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        alert("Registration successful!");
        setIsModalOpen(false);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="bg-white">
      <Head>
        <title>Registration - APTICON 2024</title>
        <meta
          name="description"
          content="Register for APTICON 2024 to secure your spot at this prestigious pharmacy conference held on September 27-28, 2024, in Bhubaneswar, Odisha. Discover registration fees, deadlines, and benefits of attending."
        />
        <meta
          name="keywords"
          content="APTICON 2024, Registration, Pharmacy Conference, Bhubaneswar, Odisha, Pharmacy Education, Conference Registration"
        />
        <meta name="author" content="APTICON Organizing Committee" />
        <meta property="og:title" content="Registration - APTICON 2024" />
        <meta
          property="og:description"
          content="Register for APTICON 2024 to secure your spot at this prestigious pharmacy conference held on September 27-28, 2024, in Bhubaneswar, Odisha."
        />
        <meta property="og:image" content="/banner1.jpg" />
        <meta
          property="og:url"
          content="https://www.apticon2024.com/registration"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Registration - APTICON 2024" />
        <meta
          name="twitter:description"
          content="Register for APTICON 2024 to secure your spot at this prestigious pharmacy conference held on September 27-28, 2024, in Bhubaneswar, Odisha."
        />
        <meta name="twitter:image" content="/banner1.jpg" />
      </Head>

      <div className="bg-white overflow-hidden fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <main className="mt-16">
        <section
          id="register-for-apticon"
          className="container mx-auto py-20 text-black"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green">
            Register to APTICON 2024
          </h2>
          <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            Secure your spot at APTICON 2024 by registering today. Find out
            about registration fees, deadlines, and the benefits of attending
            the conference. Join us for an enriching experience that promises to
            transform your understanding of pharmacy education and practice.
          </p>
          <div className="overflow-x-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-ochre">
              Registration Fees
            </h3>
            <div className="hidden md:block">
              <div className="bg-grey text-black">
                <div className="container mx-auto p-6">
                  <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="py-2 px-4 bg-ashGrey text-black text-left text-sm font-semibold uppercase">
                            Registration Fee
                          </th>
                          <th className="py-2 px-4 bg-ashGrey text-black text-left text-sm font-semibold uppercase">
                            Price
                          </th>
                          <th className="py-2 px-4 bg-ashGrey text-black text-left text-sm font-semibold uppercase">
                            Pay Now
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {registrationFees.map((fee, index) =>
                          Object.entries(fee.fees).map(([key, value]) => (
                            <tr key={index + key}>
                              <td className="py-2 px-4 border-b border-grey">
                                {fee.type} -{" "}
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </td>
                              <td className="py-2 px-4 border-b border-grey">
                                <span className="line-through">
                                  {fee.Price[key]}
                                </span>
                                <span className="text-red-500 ml-2">
                                  {fee.fees[key]}
                                </span>
                              </td>
                              <td className="py-2 px-4 border-b border-grey">
                                <button
                                  onClick={() => setIsModalOpen(true)}
                                  className="bg-green text-white py-1 px-4 rounded inline-block cursor-pointer"
                                >
                                  Pay Now
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                    <p className="text-center mt-4 text-sm text-gray-600">
                      Note: Fees include 18% GST.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              {registrationFees.map((fee, index) =>
                Object.entries(fee.fees).map(([key, value]) => (
                  <div
                    key={index + key}
                    className="bg-white shadow-md rounded-lg mb-4 p-4"
                  >
                    <h4 className="text-lg font-bold mb-2">
                      {fee.type} - {key.charAt(0).toUpperCase() + key.slice(1)}
                    </h4>
                    <div className="mb-2">
                      <span className="font-semibold">Price:</span>{" "}
                      <span className="line-through">{fee.Price[key]}</span>
                      <span className="text-red-500 ml-2">{fee.fees[key]}</span>
                    </div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-green text-white py-1 px-4 rounded mt-2 inline-block text-right w-full cursor-pointer"
                    >
                      Pay Now
                    </button>
                  </div>
                ))
              )}
              <p className="text-center mt-4 text-sm text-gray-600">
                Note: Fees include 18% GST.
              </p>
            </div>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Image
              src="/APTICON_QR.png"
              alt="APTICON QR Code"
              width={300}
              height={300}
              className="mx-auto"
            />
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
                  required
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="number"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
                  required
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  name="mobileNumber"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Transaction ID
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
                  required
                  value={formData.transactionId}
                  onChange={handleChange}
                  name="transactionId"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Fee Type
                </label>
                <select
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-green"
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
              <button
                type="submit"
                className="w-full bg-green text-white py-2 px-4 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green"
              >
                Submit
              </button>
            </form>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 w-full bg-ochre text-white py-2 px-4 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
