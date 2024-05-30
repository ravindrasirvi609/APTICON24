"use client";
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

export default function Registration() {
  const [hoveredPlan, setHoveredPlan] = useState("");

  return (
    <div className="bg-white">
      <Head>
        <title>Registration - APTICON 2024</title>
        <meta name="description" content="Register for APTICON 2024" />
      </Head>

      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">APTICON 2024</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-ochre">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-ochre">
                  About
                </a>
              </li>
              <li>
                <a href="/#schedule" className="hover:text-ochre">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/#speakers" className="hover:text-ochre">
                  Speakers
                </a>
              </li>
              <li>
                <a href="/#sponsors" className="hover:text-ochre">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="/registration" className="hover:text-ochre">
                  Registration
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-ochre">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

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

      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2024 APTICON. All rights reserved.</p>
      </footer>
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
