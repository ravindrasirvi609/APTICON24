"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import Head from "next/head";
import { useState } from "react";

const metadata: Metadata = {
  title: "Registration - APTICON 2024",
  description:
    "Register for APTICON 2024 to secure your spot at this prestigious pharmacy conference held on September 27-28, 2024, in Bhubaneswar, Odisha. Discover registration fees, deadlines, and benefits of attending.",
  keywords: [
    "APTICON 2024",
    "Registration",
    "Pharmacy Conference",
    "Bhubaneswar",
    "Odisha",
    "Pharmacy Education",
    "Conference Registration",
  ],
  openGraph: {
    title: "Registration - APTICON 2024",
    description:
      "Register for APTICON 2024 to secure your spot at this prestigious pharmacy conference held on September 27-28, 2024, in Bhubaneswar, Odisha.",
    images: [{ url: "/banner1.jpg" }],
    url: "https://www.apticon2024.com/registration",
    type: "website",
  },
};

export default function Registration() {
  const [hoveredPlan, setHoveredPlan] = useState("");

  const paymentLinks = {
    members: "https://your-payment-page-url/members",
    students: "https://your-payment-page-url/students",
    nonMembers: "https://your-payment-page-url/non-members",
    industry: "https://your-payment-page-url/industry",
    companion: "https://your-payment-page-url/companion",
    international: "https://your-payment-page-url/international",
  };

  const registrationFees = [
    {
      type: "Early Bird (Upto June 30)",
      members: "₹ 2800",
      students: "₹ 2500",
      nonMembers: "₹ 3500",
      industry: "₹ 4000",
      companion: "₹ 1500",
      international: "118 USD",
    },
    {
      type: "Regular (Upto August 31)",
      members: "₹ 3500",
      students: "₹ 2900",
      nonMembers: "₹ 4000",
      industry: "₹ 4500",
      companion: "-",
      international: "118 USD",
    },
  ];

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
      <main>
        <section
          id="register-for-apticon"
          className="container mx-auto py-20 text-black"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green">
            Register for APTICON 2024
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
                            Members of APTI
                          </th>
                          <th className="py-2 px-4 bg-ashGrey text-black text-left text-sm font-semibold uppercase">
                            Students
                          </th>
                          <th className="py-2 px-4 bg-ashGrey text-black text-left text-sm font-semibold uppercase">
                            Non-Members
                          </th>
                          <th className="py-2 px-4 bg-ashGrey text-black text-left text-sm font-semibold uppercase">
                            Industry
                          </th>
                          <th className="py-2 px-4 bg-ashGrey text-black text-left text-sm font-semibold uppercase">
                            Companion
                          </th>
                          <th className="py-2 px-4 bg-ashGrey text-black text-left text-sm font-semibold uppercase">
                            International
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {registrationFees.map((fee, index) => (
                          <tr key={index}>
                            <td className="py-2 px-4 border-b border-grey">
                              {fee.type}
                            </td>
                            <td className="py-2 px-4 border-b border-grey">
                              {fee.members} <br />
                              <a
                                href={paymentLinks.members}
                                className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                              >
                                Pay Now
                              </a>
                            </td>
                            <td className="py-2 px-4 border-b border-grey">
                              {fee.students} <br />
                              <a
                                href={paymentLinks.students}
                                className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                              >
                                Pay Now
                              </a>
                            </td>
                            <td className="py-2 px-4 border-b border-grey">
                              {fee.nonMembers} <br />
                              <a
                                href={paymentLinks.nonMembers}
                                className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                              >
                                Pay Now
                              </a>
                            </td>
                            <td className="py-2 px-4 border-b border-grey">
                              {fee.industry} <br />
                              <a
                                href={paymentLinks.industry}
                                className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                              >
                                Pay Now
                              </a>
                            </td>
                            <td className="py-2 px-4 border-b border-grey">
                              {fee.companion} <br />
                              <a
                                href={paymentLinks.companion}
                                className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                              >
                                Pay Now
                              </a>
                            </td>
                            <td className="py-2 px-4 border-b border-grey">
                              {fee.international} <br />
                              <a
                                href={paymentLinks.international}
                                className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                              >
                                Pay Now
                              </a>
                            </td>
                          </tr>
                        ))}
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
              {registrationFees.map((fee, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg mb-4 p-4"
                >
                  <h4 className="text-lg font-bold mb-2">{fee.type}</h4>
                  <div className="mb-2 flex justify-between items-center">
                    <span className="font-semibold">Members of APTI:</span>
                    {fee.members}
                  </div>
                  <a
                    href={paymentLinks.members}
                    className="bg-green text-white py-1 px-4 rounded mt-2 inline-block text-right w-full"
                  >
                    Pay Now
                  </a>
                  <div className="mb-2 flex justify-between items-center mt-4">
                    <span className="font-semibold">Students:</span>
                    {fee.students}
                  </div>
                  <a
                    href={paymentLinks.students}
                    className="bg-green text-white py-1 px-4 rounded mt-2 inline-block text-right w-full"
                  >
                    Pay Now
                  </a>
                  <div className="mb-2 flex justify-between items-center mt-4">
                    <span className="font-semibold">Non-Members:</span>
                    {fee.nonMembers}
                  </div>
                  <a
                    href={paymentLinks.nonMembers}
                    className="bg-green text-white py-1 px-4 rounded mt-2 inline-block text-right w-full"
                  >
                    Pay Now
                  </a>
                  <div className="mb-2 flex justify-between items-center mt-4">
                    <span className="font-semibold">Industry:</span>
                    {fee.industry}
                  </div>
                  <a
                    href={paymentLinks.industry}
                    className="bg-green text-white py-1 px-4 rounded mt-2 inline-block text-right w-full"
                  >
                    Pay Now
                  </a>
                  <div className="mb-2 flex justify-between items-center mt-4">
                    <span className="font-semibold">Companion:</span>
                    {fee.companion}
                  </div>
                  <a
                    href={paymentLinks.companion}
                    className="bg-green text-white py-1 px-4 rounded mt-2 inline-block text-right w-full"
                  >
                    Pay Now
                  </a>
                  <div className="mb-2 flex justify-between items-center mt-4">
                    <span className="font-semibold">International:</span>
                    {fee.international}
                  </div>
                  <a
                    href={paymentLinks.international}
                    className="bg-green text-white py-1 px-4 rounded mt-2 inline-block text-right w-full"
                  >
                    Pay Now
                  </a>
                </div>
              ))}
              <p className="text-center mt-4 text-sm text-gray-600">
                Note: Fees include 18% GST.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
