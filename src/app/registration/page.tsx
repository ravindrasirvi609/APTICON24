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

      <Header />

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
                      <tr>
                        <td className="py-2 px-4 border-b border-grey">
                          Early Bird (Upto June 30)
                        </td>
                        <td className="py-2 px-4 border-b border-grey">
                          ₹ 2800 <br />
                          <a
                            href={paymentLinks.members}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                        <td className="py-2 px-4 border-b border-grey">
                          ₹ 2500 <br />
                          <a
                            href={paymentLinks.students}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                        <td className="py-2 px-4 border-b border-grey">
                          ₹ 3500 <br />
                          <a
                            href={paymentLinks.nonMembers}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                        <td className="py-2 px-4 border-b border-grey">
                          ₹ 4000 <br />
                          <a
                            href={paymentLinks.industry}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                        <td className="py-2 px-4 border-b border-grey">
                          ₹ 1500 <br />
                          <a
                            href={paymentLinks.companion}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                        <td className="py-2 px-4 border-b border-grey">
                          118 USD <br />
                          <a
                            href={paymentLinks.international}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b border-grey">
                          Regular (Upto August 31)
                        </td>
                        <td className="py-2 px-4 border-b border-grey">
                          ₹ 3500 <br />
                          <a
                            href={paymentLinks.members}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                        <td className="py-2 px-4 border-b border-grey">
                          ₹ 2900 <br />
                          <a
                            href={paymentLinks.students}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                        <td className="py-2 px-4 border-b border-grey">
                          ₹ 4000 <br />
                          <a
                            href={paymentLinks.nonMembers}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                        <td className="py-2 px-4 border-b border-grey">
                          ₹ 4500 <br />
                          <a
                            href={paymentLinks.industry}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                        <td className="py-2 px-4 border-b border-grey">-</td>
                        <td className="py-2 px-4 border-b border-grey">
                          118 USD <br />
                          <a
                            href={paymentLinks.international}
                            className="bg-green text-white py-1 px-4 rounded mt-2 inline-block"
                          >
                            Pay Now
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
