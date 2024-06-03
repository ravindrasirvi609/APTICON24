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
      src: "/new/1.png",
      alt: "Place 1",
      description: "A brief description of Place 1.",
    },
    {
      src: "/new/2.png",
      alt: "Place 2",
      description: "A brief description of Place 2.",
    },
    {
      src: "/new/3.png",
      alt: "Place 3",
      description: "A brief description of Place 3.",
    },
    {
      src: "/new/4.png",
      alt: "Place 4",
      description: "A brief description of Place 4.",
    },
    {
      src: "/new/5.png",
      alt: "Place 1",
      description: "A brief description of Place 1.",
    },
    {
      src: "/new/6.png",
      alt: "Place 2",
      description: "A brief description of Place 2.",
    },
    {
      src: "/new/7.png",
      alt: "Place 3",
      description: "A brief description of Place 3.",
    },
    {
      src: "/new/8.png",
      alt: "Place 4",
      description: "A brief description of Place 4.",
    },
    {
      src: "/new/9.png",
      alt: "Place 1",
      description: "A brief description of Place 1.",
    },
    {
      src: "/new/10.png",
      alt: "Place 2",
      description: "A brief description of Place 2.",
    },
    {
      src: "/new/11.png",
      alt: "Place 3",
      description: "A brief description of Place 3.",
    },
    {
      src: "/new/12.png",
      alt: "Place 4",
      description: "A brief description of Place 4.",
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
      >
        <div className="p-4 rounded flex flex-col">
          <div className="self-end">
            <button
              onClick={closeModal}
              className="mb-4 bg-red-500 text-black bg-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
          <h3 className="text-lg font-bold text-white">{selectedPlace.alt}</h3>
          <p className="text-white font-medium">{selectedPlace.description}</p>
          <div className="w-full h-96">
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
