import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Refund and Shipping Policy",
  description: "APTICON 2024 Refund and Shipping Policy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apticon2024.com/refund",
  },
  twitter: {
    card: "summary_large_image",
    site: "@apticon2024",
    creator: "@apticon2024",
  },
};

export { metadata };

const Refund = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="bg-white overflow-hidden fixed top-0 left-0 w-full z-50">
        <Header />
      </div>{" "}
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Refund and Shipping Policy
        </h1>
        <div className="max-w-3xl mx-auto leading-relaxed space-y-6">
          <h2 className="text-2xl font-semibold">Refund Policy</h2>
          <p>
            At APTICON 2024, we strive to provide the best possible experience
            for our attendees. However, please note that all ticket sales are
            final. We do not offer refunds under any circumstances. This policy
            is in place to ensure that we can provide the highest quality event
            for all participants. We appreciate your understanding and
            cooperation.
          </p>

          <h2 className="text-2xl font-semibold">Shipping Policy</h2>
          <p>
            For attendees who purchase physical products or materials related to
            APTICON 2024, please review the following shipping policies:
          </p>

          <h3 className="text-xl font-semibold">Processing Time</h3>
          <p>
            All orders are processed within 2-3 business days. Orders are not
            shipped or delivered on weekends or holidays.
          </p>

          <h3 className="text-xl font-semibold">
            Shipping Rates and Delivery Estimates
          </h3>
          <p>
            Shipping charges for your order will be calculated and displayed at
            checkout. Delivery times may vary based on location and shipping
            method chosen:
          </p>
          <ul className="list-disc list-outside space-y-2">
            <li>Standard Shipping: 5-7 business days</li>
            <li>Express Shipping: 2-3 business days</li>
            <li>Overnight Shipping: 1-2 business days</li>
          </ul>

          <h3 className="text-xl font-semibold">
            Shipment Confirmation and Order Tracking
          </h3>
          <p>
            You will receive a shipment confirmation email once your order has
            shipped containing your tracking number(s). The tracking number will
            be active within 24 hours.
          </p>

          <h3 className="text-xl font-semibold">Customs, Duties, and Taxes</h3>
          <p>
            APTICON 2024 is not responsible for any customs and taxes applied to
            your order. All fees imposed during or after shipping are the
            responsibility of the customer (tariffs, taxes, etc.).
          </p>

          <h3 className="text-xl font-semibold">Damages</h3>
          <p>
            APTICON 2024 is not liable for any products damaged or lost during
            shipping. If you received your order damaged, please contact the
            shipment carrier to file a claim. Please save all packaging
            materials and damaged goods before filing a claim.
          </p>

          <h3 className="text-xl font-semibold">
            International Shipping Policy
          </h3>
          <p>We currently do not ship outside the continental United States.</p>

          <h3 className="text-xl font-semibold">Changes to This Policy</h3>
          <p>
            We reserve the right to update this policy at any time. Any changes
            will be posted on this page, so please review it periodically.
          </p>

          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p>
            If you have any questions about this Refund and Shipping Policy,
            please contact us at support@apticon2024.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Refund;
