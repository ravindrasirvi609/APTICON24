"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  attachment: File | null;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
    attachment: null,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key as keyof FormData]) {
        formDataToSend.append(key, formData[key as keyof FormData]!);
      }
    }

    try {
      await axios.post("/api/contact", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
        attachment: null,
      });
    } catch (error) {
      console.error("There was an error submitting the form!", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="container mx-auto py-20 px-4 text-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green">
        Contact Us
      </h2>
      <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
        Have questions or need more information? Get in touch with the APTICON
        2024 organizing committee. Find our contact details, send us an email,
        or fill out the contact form. We’re here to assist you with any
        inquiries you may have regarding the conference.
      </p>
      <div className="flex flex-col items-center mb-10">
        <p className="text-lg mb-4">Contact Email: info@apticon2024.com</p>
        <p className="text-lg mb-4">
          Phone: 9437158898, 7978172679 & 9937111587
        </p>
        <p className="text-lg mb-8 text-center">
          Address: Organizing Secretary, APTICON 2024 Association of
          Pharmaceutical Teachers of India, University Department of
          Pharmaceutical Sciences (UDPS), Utkal University, Vani Vihar,
          Bhubaneswar-751004
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-ochre">
            Enquiry Form
          </h3>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject:
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Membership">Membership</option>
                <option value="Event Information">Event Information</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="attachment"
                className="block text-sm font-medium text-gray-700"
              >
                Attachment (optional):
              </label>
              <input
                type="file"
                id="attachment"
                name="attachment"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit
              </button>
              {loading && <p>Loading...</p>}
              {success && (
                <p className="text-green-500 mt-4">
                  Form successfully submitted!
                </p>
              )}
            </div>
          </form>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-ochre">Venue Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.0355887179044!2d85.8417439!3d20.298793999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909b0e7415fa3%3A0x85473fa123e0928a!2zQ29udm9jYXRpb24gSGFsbCAo4Kym4K2A4KyV4K2N4Ky34Ky-4Kyo4K2N4KykIOCsreCsrOCsqCk!5e0!3m2!1sen!2sin!4v1717681943949!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
