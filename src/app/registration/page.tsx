"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import { useState } from "react";
import RegistrationDialog from "@/components/registrationDialog";
import { AlertCircleIcon, CalendarIcon } from "lucide-react";

type FeeType = {
  type: string;
  spot: string;
};

const registrationFees: FeeType[] = [
  { type: "APTI Members", spot: "₹ 4500" },
  { type: "Students", spot: "₹ 3500" },
  { type: "Non-Members", spot: "₹ 5000" },
  { type: "Industry", spot: "₹ 5500" },
  { type: "Companion", spot: "₹ 2500" },
  { type: "International", spot: "150 USD" },
];

export default function Registration() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          className="container mx-auto py-12 px-4 text-black"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-green">
            Register for APTICON 2024
          </h1>
          <p className="text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            Secure your spot at APTICON 2024 by registering today. Join us for
            an enriching experience that promises to transform your
            understanding of pharmacy education and practice.
          </p>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
            <div className="p-6 bg-lightBrown text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Registration Fees
              </h2>
              <p className="flex items-center">
                <CalendarIcon className="mr-2" />
                Regular registration available until September 10, 2024
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-ashGrey">
                    <th className="py-3 px-4 text-left">Category</th>
                    <th className="py-3 px-4 text-left">
                      Regular Fee (Until Sep 10)
                    </th>
                    <th className="py-3 px-4 text-left">Spot Registration</th>
                    <th className="py-3 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {registrationFees.map((fee, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="py-3 px-4 font-medium">{fee.type}</td>
                      <td className="py-3 px-4">{fee.spot}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="bg-green hover:bg-darkBrown text-white py-2 px-4 rounded transition duration-300"
                        >
                          Register Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-lightGrey">
              <p className="text-center text-sm text-gray-600 flex items-center justify-center">
                <AlertCircleIcon className="mr-2" size={16} />
                Note: All fees include 18% GST
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-darkBrown">
              Need Assistance?
            </h3>
            <p className="text-gray-700">
              If you have any difficulty with registration, please contact us at{" "}
              <a
                href="tel:+916371343074"
                className="text-green hover:underline"
              >
                +91 6371343074
              </a>
            </p>
          </div>
        </section>
      </main>

      {isModalOpen && (
        <RegistrationDialog
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
}
