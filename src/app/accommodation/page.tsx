import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  CalendarIcon,
  InfoIcon,
  Mail,
  MailIcon,
} from "lucide-react";
import Header from "@/components/header";
import Link from "next/link";

const accommodationData = [
  {
    name: "La Franklin",
    rate: "3000 + Tax",
    occupancy: "Double",
    distanceVenue: 2.7,
    distanceStation: 5.8,
    distanceAirport: 9.4,
  },
  {
    name: "Empires",
    rate: "3000 + Tax",
    occupancy: "Double",
    distanceVenue: 1.6,
    distanceStation: 3.1,
    distanceAirport: 6.8,
  },
  {
    name: "Hotel Seetal",
    rate: "3000 +Tax",
    occupancy: "Double",
    distanceVenue: 0.6,
    distanceStation: 3.7,
    distanceAirport: 7.6,
  },
  {
    name: "The Presidency",
    rate: "2700 + Tax",
    occupancy: "Double",
    distanceVenue: 4.8,
    distanceStation: 5.4,
    distanceAirport: 6.7,
  },
  {
    name: "The Saaj Heritage",
    rate: "2500 + Tax",
    occupancy: "Double",
    distanceVenue: 5.3,
    distanceStation: 2.8,
    distanceAirport: 5,
  },
  {
    name: "Richi Regency",
    rate: "2500 + Tax",
    occupancy: "Double/Triple",
    distanceVenue: 4.3,
    distanceStation: 6.5,
    distanceAirport: 8,
  },
  {
    name: "Hotel Marigold",
    rate: "2200 + Tax",
    occupancy: "Double",
    distanceVenue: 6.4,
    distanceStation: 1.4,
    distanceAirport: 3.6,
  },
  {
    name: "Hotel Urmee",
    rate: "2000 + Tax",
    occupancy: "Double",
    distanceVenue: 2.4,
    distanceStation: 5.5,
    distanceAirport: 9.2,
  },
  {
    name: "SM Hives",
    rate: "1800 + Tax",
    occupancy: "Double",
    distanceVenue: 3.8,
    distanceStation: 6.9,
    distanceAirport: 10.6,
  },
  {
    name: "Hotel Shreya",
    rate: "1500 + Tax",
    occupancy: "Double / Triple",
    distanceVenue: 2.8,
    distanceStation: 5.9,
    distanceAirport: 9.6,
  },
];

const Accommodation = () => {
  return (
    <div className="min-h-screen bg-ashGrey text-black">
      <div className="bg-white overflow-hidden fixed top-0 left-0 w-full z-50 shadow-md">
        <Header />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-green mb-8 text-center">
          Accommodations for APTICON 2024
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-darkBrown mb-4 flex items-center">
              <InfoIcon className="w-6 h-6 mr-2 text-ochre" />
              Contact Information
            </h2>
            <div className="flex items-center mb-2">
              <PhoneIcon className="w-5 h-5 mr-2 text-ochre" />
              <p>
                <span className="font-medium">Contact Person:</span> Mr. Dibakar
                Bhuyan
              </p>
            </div>
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2 text-ochre" />
              <p>
                <span className="font-medium">Mobile No.:</span> +91 7440090003
              </p>
            </div>
            <div className="flex items-center">
              <MailIcon className="w-5 h-5 mr-2 text-ochre" />
              <p>
                <span className="font-medium">Email:</span>{" "}
                accomodation.apticon@gmail.com
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
            <h2 className="text-2xl font-semibold text-darkBrown mb-4 flex items-center">
              <CalendarIcon className="w-6 h-6 mr-2 text-ochre" />
              Travels Plan and Accommodations
            </h2>
            <p className="mb-4 text-gray-600">
              Submit your Travels Plan and Accommodations Requirements
            </p>
            <Link href="https://forms.gle/9Szfpt7pR1TMeHPYA">
              <button className="bg-green hover:bg-darkBrown text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center w-full md:w-auto shadow-md hover:shadow-lg">
                <CalendarIcon className="w-5 h-5 mr-2" />
                Submit Details
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-12 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-darkBrown mb-6 flex items-center">
            <MapPinIcon className="w-6 h-6 mr-2 text-ochre" />
            Hotel Accommodations
          </h2>
          <div className="mb-4 p-4 bg-lightGrey rounded-lg">
            <p className="text-sm text-darkBrown flex items-center mb-2">
              <CalendarIcon className="w-4 h-4 mr-2 text-ochre" />
              From September 26th afternoon to 28th morning
            </p>
            <p className="text-sm text-darkBrown flex items-center">
              <InfoIcon className="w-4 h-4 mr-2 text-ochre" />
              All rooms are on mentioned occupancies only (without breakfast).
            </p>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-lightBrown text-white">
                  <th className="p-3 text-left">Hotel</th>
                  <th className="p-3 text-left">Rates</th>
                  <th className="p-3 text-left">Occupancy</th>
                  <th className="p-3 text-left">Distance from Venue (Km)</th>
                  <th className="p-3 text-left">
                    Distance from Railway Station (Km)
                  </th>
                  <th className="p-3 text-left">Distance from Airport (Km)</th>
                </tr>
              </thead>
              <tbody>
                {accommodationData.map((hotel, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-white" : "bg-ashGrey"
                    } hover:bg-lightGrey transition duration-300`}
                  >
                    <td className="p-3 font-medium">{hotel.name}</td>
                    <td className="p-3">{hotel.rate}</td>
                    <td className="p-3">{hotel.occupancy}</td>
                    <td className="p-3">{hotel.distanceVenue}</td>
                    <td className="p-3">{hotel.distanceStation}</td>
                    <td className="p-3">{hotel.distanceAirport}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h2 className="text-2xl font-semibold text-darkBrown mb-4 flex items-center">
            <MapPinIcon className="w-6 h-6 mr-2 text-ochre" />
            Student Accommodations
          </h2>
          <p className="mb-4 text-gray-600">
            For Student Accommodations (Hostels/ Guest Houses/ Dormitories):
          </p>
          <div className="flex items-center bg-lightGrey p-4 rounded-lg">
            <PhoneIcon className="w-5 h-5 mr-2 text-ochre" />
            <p>
              <span className="font-medium">Contact:</span> 8763900121,
              7008984029
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
