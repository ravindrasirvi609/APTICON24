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
  ];

  return (
    <div>
      <Header />

      <div className="bg-lightGrey p-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-darkBrown">
            Travel Information
          </h2>
        </div>
        <div className="text-center mb-12">
          <p className="text-lg text-black max-w-3xl mx-auto">
            Welcome to APTICON 2024! Here you will find essential travel
            information to help you plan your visit. Whether youre arriving by
            plane, train, or car, weve got you covered. Explore the local
            attractions and make the most of your stay.
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
          <button
            onClick={closeModal}
            className="self-end mb-4 bg-red-500 text-black px-4 py-2 rounded"
          >
            X
          </button>
          <h3 className="text-lg font-bold text-black mb-2">
            {selectedPlace.alt}
          </h3>
          <p className="text-black font-medium mb-4">
            {selectedPlace.description}
          </p>
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
