"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";
import Head from "next/head";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useState,
} from "react";

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
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Registration Fees
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 p-4">
              <RegistrationPlan
                title="BASIC PASS"
                price="$59"
                features={[
                  "Regular Seating",
                  "Comfortable Seat",
                  "Coffee Break",
                  "One Workshop",
                  "Certificate",
                  "Custom Badge",
                  "Access To Artists Meeting",
                ]}
                hoveredPlan={hoveredPlan}
                setHoveredPlan={setHoveredPlan}
                color="ochre"
              />
              <RegistrationPlan
                title="STANDARD PASS"
                price="$89"
                features={[
                  "Regular Seating",
                  "Comfortable Seat",
                  "Coffee Break",
                  "One Workshop",
                  "Certificate",
                  "Custom Badge",
                  "Access To Artists Meeting",
                ]}
                hoveredPlan={hoveredPlan}
                setHoveredPlan={setHoveredPlan}
                color="black"
              />
              <RegistrationPlan
                title="SILVER PASS"
                price="$99"
                features={[
                  "Regular Seating",
                  "Comfortable Seat",
                  "Coffee Break",
                  "One Workshop",
                  "Certificate",
                  "Custom Badge",
                  "Access To Artists Meeting",
                ]}
                hoveredPlan={hoveredPlan}
                setHoveredPlan={setHoveredPlan}
                color="green"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function RegistrationPlan({
  title,
  price,
  features,
  hoveredPlan,
  setHoveredPlan,
  color,
}: {
  title: string;
  price: string;
  features: string[];
  hoveredPlan: string;
  setHoveredPlan: (plan: string) => void;
  color: string;
}) {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/3 ${
        hoveredPlan === title.toLowerCase() ? "transform scale-105" : ""
      }`}
      onMouseEnter={() => setHoveredPlan(title.toLowerCase())}
      onMouseLeave={() => setHoveredPlan("")}
    >
      <div className={`bg-${color} text-white text-center p-6 relative`}>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-4xl font-bold">{price}</p>
        <div className="absolute inset-x-0 bottom-0 h-6 bg-white transform rotate-180"></div>
      </div>
      <div className="p-6">
        <ul className="space-y-2 text-center">
          {features.map(
            (
              feature:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined,
              index: Key | null | undefined
            ) => (
              <li key={index}>{feature}</li>
            )
          )}
        </ul>
        <div className="mt-6 text-center">
          <button
            className={`bg-${color} text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-opacity-80`}
          >
            Buy Ticket Now
          </button>
        </div>
      </div>
    </div>
  );
}
