import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";

const TravelInformation = () => {
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
          <div className="text-center">
            <div className="w-full h-64 mx-auto  overflow-hidden">
              <Image
                src="https://via.placeholder.com/500x300"
                alt="Place 1"
                width={500}
                height={300}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Place 1
            </h3>
            <p className="text-green">A brief description of Place 1.</p>
          </div>
          <div className="text-center">
            <div className="w-full h-64 mx-auto  overflow-hidden">
              <Image
                src="https://via.placeholder.com/500x300"
                alt="Place 2"
                width={500}
                height={300}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Place 2
            </h3>
            <p className="text-green">A brief description of Place 2.</p>
          </div>
          <div className="text-center">
            <div className="w-full h-64 mx-auto  overflow-hidden">
              <Image
                src="https://via.placeholder.com/500x300"
                alt="Place 3"
                width={500}
                height={300}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Place 3
            </h3>
            <p className="text-green">A brief description of Place 3.</p>
          </div>
          <div className="text-center">
            <div className="w-full h-64 mx-auto  overflow-hidden">
              <Image
                src="https://via.placeholder.com/500x300"
                alt="Place 4"
                width={500}
                height={300}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Place 4
            </h3>
            <p className="text-green">A brief description of Place 4.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TravelInformation;
