"use client";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const TravelInformation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState({
    src: "",
    alt: "",
    description: "",
  });

  const handleImageClick = (place: any) => {
    setSelectedPlace(place);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedPlace({ src: "", alt: "", description: "" });
  };

  const places = [
    {
      src: "/picnic/1.png",
      alt: "Sun Temple, Konark",
      description:
        "A UNESCO World Heritage site, the Sun Temple is an architectural marvel built in the 13th century. This magnificent temple, designed in the shape of a colossal chariot, is dedicated to the Sun God and is renowned for its intricate carvings and stunning sculptures.",
    },
    {
      src: "/picnic/2.png",
      alt: "Jagannath Temple, Puri",
      description:
        "One of the Char Dham pilgrimage sites, the Jagannath Temple in Puri is a significant religious site for Hindus. The temple is famous for its annual Rath Yatra (Chariot Festival) and its rich cultural and spiritual heritage.",
    },
    {
      src: "/picnic/3.png",
      alt: "Chilika Lake",
      description:
        "Asia's largest brackish water lagoon, Chilika Lake is a haven for birdwatchers and nature enthusiasts. It hosts a wide variety of migratory birds and is home to the endangered Irrawaddy dolphins. The lake offers picturesque views and opportunities for boat rides.",
    },
    {
      src: "/picnic/4.png",
      alt: "Udayagiri and Khandagiri Caves",
      description:
        "Located just outside Bhubaneswar, these ancient Jain rock-cut caves date back to the 1st century BCE. The caves are significant for their historical and archaeological importance and offer stunning views of the surrounding area.",
    },
    {
      src: "/picnic/5.png",
      alt: "Lingaraj Temple, Bhubaneswar",
      description:
        "An architectural masterpiece, the Lingaraj Temple is one of the oldest and largest temples in Bhubaneswar. Dedicated to Lord Shiva, this temple exemplifies the Kalinga style of architecture and is a major pilgrimage site.",
    },
    {
      src: "/picnic/6.png",
      alt: "Dhauli Giri",
      description:
        "Known for the Dhauli Shanti Stupa (Peace Pagoda), this site marks the location where the Kalinga War was fought. The edicts of Emperor Ashoka, carved into rock, can be found here, reflecting his conversion to Buddhism and his message of peace.",
    },
    {
      src: "/picnic/7.jpeg",
      alt: "Nandankanan Zoological Park in Bhubaneswar",
      description:
        " established in 1960, is a premier destination for wildlife and botanical enthusiasts. It houses over 160 animal species, including famous white tigers and Asiatic lions, and features a 75-hectare botanical garden with rare plants. Renowned for its breeding programs and safari experiences, Nandankanan offers close encounters with wildlife, making it a must-visit for both education and recreation.",
    },
  ];

  return (
    <div>
      <div className="bg-white overflow-hidden fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <div className="bg-lightGrey p-6 mt-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-darkBrown">
            Travel Information
          </h2>
        </div>
        <div className="text-center mb-12">
          <p className="text-lg text-black max-w-3xl mx-auto">
            Welcome to the APTICON 2024 Travel Desk! We are delighted to assist
            you in planning your journey to the premier event of the year,
            APTICON 2024. Our goal is to ensure that your travel experience is
            as seamless and enjoyable as possible. Below you will find essential
            information and helpful tips to make your trip to APTICON 2024 a
            success.
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-darkBrown">Event Location</h2>
        </div>
        <div className="text-center mb-12">
          <p className="text-lg text-black max-w-3xl mx-auto">
            APTICON 2024 will be held in Utkal University, Vani Vihar,
            Bhubaneshwar on September 27 and 28, 2024. The venue is conveniently
            located and offers excellent facilities for a productive and
            memorable conference experience.
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-darkBrown">
            Traveling to Bhubaneswar
          </h2>
        </div>
        <div className="text-center mb-12">
          <p className="text-lg text-black max-w-3xl mx-auto">
            For attendees flying in, the nearest airport is Biju Patnaik
            International Airport (BBI), located approximately 7 kilometers from
            the city center. Major airlines operate daily flights to this
            airport, making it convenient for both domestic and international
            travelers.
          </p>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg text-black max-w-3xl mx-auto">
            Bhubaneshwar Railway Station (BBS) is well-connected to major cities
            across India. The station is about 4 kilometers from the event
            venue, and you can easily reach the venue by taxi or auto-rickshaw.
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-darkBrown">Places to Visit</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {places.map((place, index) => (
            <div className="text-center" key={index}>
              <div
                className="w-full h-64 mx-auto overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(place)}
              >
                <Image
                  src={place.src}
                  alt={place.alt}
                  width={500}
                  height={300}
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-darkBrown">
                {place.alt}
              </h3>
              <p className="text-green">{place.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="bg-white p-4 rounded-lg max-w-3xl mx-auto flex flex-col items-center">
          <h3 className="text-lg font-bold text-black mb-2">
            {selectedPlace.alt}
          </h3>
          <p className="text-black font-medium">{selectedPlace.description}</p>
          <button
            onClick={closeModal}
            className="self-end px-2 bg-green hover:bg-pink-800 text-white  items-center text-center rounded"
          >
            X
          </button>
          <div className="w-full">
            {selectedPlace.src && (
              <Image
                src={selectedPlace.src}
                alt={selectedPlace.alt}
                layout="responsive"
                width={1000}
                height={800}
                className="max-w-full h-auto"
              />
            )}
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  );
};

export default TravelInformation;
