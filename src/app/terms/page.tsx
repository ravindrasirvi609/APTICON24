import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import { Metadata } from "next";

const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "APTICON 2024 Terms and Conditions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apticon2024.com/terms",
  },
  twitter: {
    card: "summary_large_image",
    site: "@apticon2024",
    creator: "@apticon2024",
  },
};

const Terms = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
      <Header />
      <main className="container mx-auto py-16 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Terms and Conditions
        </h1>
        <div className="max-w-3xl mx-auto leading-relaxed space-y-6">
          <p>
            Welcome to APTICON 2024. These terms and conditions outline the
            rules and regulations for the use of our website and services.
          </p>

          <h2 className="text-2xl font-semibold">Acceptance of Terms</h2>
          <p>
            By accessing and using our services, you accept and agree to be
            bound by the terms and provisions of this agreement. If you do not
            agree to abide by these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-semibold">Use of Services</h2>
          <p>
            You agree to use our services only for lawful purposes and in
            accordance with these terms and conditions. You agree not to use our
            services in any way that could damage, disable, overburden, or
            impair our services, or interfere with any other partys use and
            enjoyment of our services.
          </p>

          <h2 className="text-2xl font-semibold">Registration and Accounts</h2>
          <p>
            To access certain features of our services, you may be required to
            register an account. You agree to provide accurate, current, and
            complete information during the registration process and to update
            such information to keep it accurate, current, and complete. You are
            responsible for safeguarding your password and for any activities or
            actions under your account.
          </p>

          <h2 className="text-2xl font-semibold">
            Intellectual Property Rights
          </h2>
          <p>
            Unless otherwise stated, APTICON 2024 and/or its licensors own the
            intellectual property rights for all material on this website. All
            intellectual property rights are reserved. You may access this from
            APTICON 2024 for your own personal use subject to restrictions set
            in these terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold">User Content</h2>
          <p>
            You grant to APTICON 2024 a worldwide, irrevocable, non-exclusive,
            royalty-free license to use, reproduce, adapt, publish, translate,
            and distribute your user content in any existing or future media.
            Your user content must not be illegal or unlawful, must not infringe
            any third partys legal rights, and must not be capable of giving
            rise to legal action whether against you or APTICON 2024 or a third
            party.
          </p>

          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p>
            In no event shall APTICON 2024, nor any of its officers, directors,
            and employees, be liable to you for anything arising out of or in
            any way connected with your use of this website, whether such
            liability is under contract, tort, or otherwise, and APTICON 2024,
            including its officers, directors, and employees shall not be liable
            for any indirect, consequential, or special liability arising out of
            or in any way related to your use of this website.
          </p>

          <h2 className="text-2xl font-semibold">Indemnification</h2>
          <p>
            You hereby indemnify to the fullest extent APTICON 2024 from and
            against any and all liabilities, costs, demands, causes of action,
            damages, and expenses (including reasonable attorney’s fees) arising
            out of or in any way related to your breach of any of the provisions
            of these terms.
          </p>

          <h2 className="text-2xl font-semibold">Governing Law</h2>
          <p>
            These terms and conditions will be governed by and construed in
            accordance with the laws of the State of [Your State], and you
            submit to the non-exclusive jurisdiction of the state and federal
            courts located in [Your State] for the resolution of any disputes.
          </p>

          <h2 className="text-2xl font-semibold">
            Changes to Terms and Conditions
          </h2>
          <p>
            We reserve the right to revise these terms and conditions at any
            time. By using this website, you are expected to review these terms
            and conditions on a regular basis.
          </p>

          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about these terms and conditions, please
            contact us at terms@apticon2024.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
