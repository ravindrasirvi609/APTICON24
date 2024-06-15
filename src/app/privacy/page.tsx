import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
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
      <div className="bg-white overflow-hidden fixed top-0 left-0 w-full z-50">
        <Header />
      </div>{" "}
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Privacy Policy
        </h1>
        <div className="max-w-3xl mx-auto leading-relaxed space-y-6">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            We at APTICON 2024 respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, and safeguard your information
            when you visit our website and register for our conference.
          </p>
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone
              number, affiliation, and payment details when you register for the
              conference.
            </li>
            <li>
              <strong>Technical Information:</strong> IP address, browser type,
              and operating system when you visit our website.
            </li>
            <li>
              <strong>Cookies:</strong> We use cookies to enhance your browsing
              experience and gather information about site traffic and usage.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">
            How We Use Your Information
          </h2>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Conference Registration:</strong> To process your
              registration and manage your participation in the event.
            </li>
            <li>
              <strong>Communication:</strong> To send you updates, newsletters,
              and information related to the conference.
            </li>
            <li>
              <strong>Improvement:</strong> To analyze website usage and improve
              our services and user experience.
            </li>
            <li>
              <strong>Compliance:</strong> To comply with legal obligations and
              protect our rights.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">
            Information Sharing and Disclosure
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except for:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Service Providers:</strong> Third-party companies that
              assist us in operating our website, conducting our business, or
              servicing you, provided they agree to keep your information
              confidential.
            </li>
            <li>
              <strong>Legal Requirements:</strong> When required by law or to
              protect our rights, property, or safety.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Security</h2>
          <p>
            We implement a variety of security measures to maintain the safety
            of your personal information. However, no method of transmission
            over the internet or electronic storage is 100% secure.
          </p>
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Access, correct, or delete your personal information.</li>
            <li>Opt-out of receiving marketing communications.</li>
            <li>
              Withdraw your consent to our processing of your personal
              information.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">
            Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new policy on this page with an
            updated effective date.
          </p>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our treatment
            of your personal information, please contact us at
            privacy@apticon2024.com.
          </p>
          <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
          <p>
            By accessing and using the APTICON 2024 conference website, you
            agree to comply with and be bound by these Terms of Service. If you
            do not agree with any part of these terms, please do not use our
            website.
          </p>
          <h2 className="text-2xl font-semibold">Use of the Website</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Eligibility:</strong> You must be at least 18 years old to
              use our website.
            </li>
            <li>
              <strong>Account:</strong> You are responsible for maintaining the
              confidentiality of your account information and for all activities
              that occur under your account.
            </li>
            <li>
              <strong>Prohibited Activities:</strong> You agree not to engage in
              activities that violate any applicable laws, infringe on the
              rights of others, or interfere with the operation of the website.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Registration and Payment</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Accuracy:</strong> You agree to provide accurate, current,
              and complete information during the registration process.
            </li>
            <li>
              <strong>Payment:</strong> All payments must be made through the
              designated payment gateway. We do not store payment information on
              our servers.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Intellectual Property</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Ownership:</strong> All content on this website, including
              text, graphics, logos, and images, is the property of APTICON 2024
              or its content suppliers and is protected by intellectual property
              laws.
            </li>
            <li>
              <strong>Limited License:</strong> You are granted a limited,
              non-exclusive, and non-transferable license to access and use the
              website for personal, non-commercial purposes.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>No Warranties:</strong> The website is provided as is
              without any warranties of any kind, either express or implied.
            </li>
            <li>
              <strong>Limitation:</strong> In no event shall APTICON 2024 be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of the
              website.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time.
            Any changes will be posted on this page with an updated effective
            date. Your continued use of the website after such changes
            constitutes your acceptance of the new terms.
          </p>
          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of India, without regard to its conflict of
            law principles.
          </p>
          <h2 className="text-2xl font-semibold">
            Cancellation and Refund Policy
          </h2>
          <p>
            The registration fee for APTICON 2024 is non-refundable and
            non-transferable. Once payment is made, it cannot be refunded or
            transferred to another individual or event. We appreciate your
            understanding as this policy helps us efficiently manage
            registrations and provide the best possible experience for all
            participants.
          </p>
          <h2 className="text-2xl font-semibold">Shipping & Exchange Policy</h2>
          <p>
            For any applicable situations where shipping is involved, customers
            are responsible for return shipping costs. We recommend using a
            trackable shipping service, and we cannot guarantee receipt of your
            returned item. However, shipping and exchange are generally not
            applicable to our conference category.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
