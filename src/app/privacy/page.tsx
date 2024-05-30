import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Privacy Policy - APTICON 2024",
  description:
    "Learn how APTICON protects your privacy when you use our services. Discover what information we collect, how we use it, and how we share it.",
  keywords: [
    "APTICON 2024",
    "Privacy Policy",
    "Data Protection",
    "Data Privacy",
    "Personal Information",
  ],
  openGraph: {
    title: "Privacy Policy - APTICON 2024",
    description:
      "Learn how APTICON protects your privacy when you use our services. Discover what information we collect, how we use it, and how we share it.",
    images: [{ url: "/banner1.jpg" }],
    url: "https://www.apticon2024.com/privacy",
    type: "website",
  },
};

const Privacy = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Privacy Policy
        </h1>
        <div className="max-w-3xl mx-auto leading-relaxed space-y-6">
          <p>
            At APTICON, we are committed to protecting your privacy. This
            privacy policy explains how we collect, use, and share your personal
            information when you use our services.
          </p>
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            register for our event, subscribe to our newsletter, or contact us.
            This may include your name, email address, phone number, and other
            contact details.
          </p>
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>
              Communicate with you about your registration, attendance, and
              other related matters
            </li>
            <li>
              Send you promotional materials and newsletters, with your consent
            </li>
            <li>Analyze how our services are used to improve them</li>
          </ul>
          <h2 className="text-2xl font-semibold">Sharing Your Information</h2>
          <p>
            We do not share your personal information with third parties except
            in the following circumstances:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>With your consent</li>
            <li>
              For legal reasons, such as to comply with a subpoena or similar
              legal process
            </li>
            <li>
              To protect the rights and safety of our organization and our users
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Data Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information. However, no method of transmission
            over the internet or electronic storage is 100% secure, so we cannot
            guarantee absolute security.
          </p>{" "}
          <h2 className="text-2xl font-semibold">Your Choices</h2>
          <p>
            You may opt out of receiving promotional communications from us by
            following the instructions in those communications. You can also
            contact us to update or delete your personal information.
          </p>
          <h2 className="text-2xl font-semibold">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. If we make
            significant changes, we will notify you by email or by posting a
            notice on our website.
          </p>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our treatment
            of your personal information, please contact us at
            privacy@apticon2024.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
