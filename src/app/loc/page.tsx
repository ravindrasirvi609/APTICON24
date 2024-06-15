import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import React from "react";

const Loc = () => {
  return (
    <div>
      {" "}
      <div className="bg-white overflow-hidden fixed top-0 left-0 w-full z-50">
        <Header />
      </div>{" "}
      <div className="bg-lightGrey p-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-darkBrown">
            Local Organizing Committee (LOC)
          </h1>
        </div>
        <div className="text-center mb-12">
          <p className="text-lg text-black max-w-3xl mx-auto">
            Discover the vision and mission of{" "}
            <span className="text-ochre">APTICON 2024</span>. Our goal is to
            revolutionize pharmacy education by bridging the gap between
            academia and industry, fostering innovation, enhancing the role of
            pharmacists in patient care, improving teacher and workplace
            conditions, and refining the regulatory and policy framework. Gain
            insights into our objectives and the profound impact we aim to
            create in the healthcare system.
          </p>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-darkBrown">
            ORGANIZING COMMITTEE
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="https://via.placeholder.com/100"
                alt="Dr. S. P. Dhanabal"
                width={128}
                height={128}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Dr. S. P. Dhanabal
            </h3>
            <p className="text-green">Convener</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="https://via.placeholder.com/100"
                alt="Dr. R. Kalirajan"
                width={128}
                height={128}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Dr. R. Kalirajan
            </h3>
            <p className="text-green">Organising Secretary</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="https://via.placeholder.com/100"
                alt="Dr. S. Jubie"
                width={128}
                height={128}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Dr. S. Jubie
            </h3>
            <p className="text-ochre">Chairman</p>
            <p className="text-green">Scientific Committee (Presentations)</p>
            <p className="text-green">Cell: 9894618588</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="https://via.placeholder.com/100"
                alt="Dr. B Gowramma"
                width={128}
                height={128}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Dr. B Gowramma
            </h3>
            <p className="text-ochre">Chairman</p>
            <p className="text-green">Registration Committee</p>
            <p className="text-green">Cell: 9442111172</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="https://via.placeholder.com/100"
                alt="Dr. S. Gomathy"
                width={128}
                height={128}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Dr. S. Gomathy
            </h3>
            <p className="text-ochre">Chairman</p>
            <p className="text-green">
              Scientific Committee (Plenary sessions)
            </p>
            <p className="text-green">Cell: 9486433876</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="https://via.placeholder.com/100"
                alt="Dr. T. Durai A. K."
                width={128}
                height={128}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Dr. T. Durai A. K.
            </h3>
            <p className="text-ochre">Chairman</p>
            <p className="text-green">Hospitality / Catering Committee</p>
            <p className="text-green">Cell: 9866852707</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="https://via.placeholder.com/100"
                alt="Dr. Gomathi S."
                width={128}
                height={128}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Dr. Gomathi S.
            </h3>
            <p className="text-ochre">Chairman</p>
            <p className="text-green">
              Stage Committee (Inauguration & Valedictory Function)
            </p>
            <p className="text-green">Cell: 9790095279</p>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src="https://via.placeholder.com/100"
                alt="Dr. Srikanth J."
                width={128}
                height={128}
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-darkBrown">
              Dr. Srikanth J.
            </h3>
            <p className="text-ochre">Chairman</p>
            <p className="text-green">Accommodation / Transport Committee</p>
            <p className="text-green">Cell: 9393011114</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loc;
