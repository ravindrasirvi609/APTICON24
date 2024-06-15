"use client";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import Timestamps from "@/components/timesstamps";
import Schedule from "@/components/schedule";
import Sponsors from "@/components/sponsors";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useEffect, useState } from "react";
import NationalBody from "./national-body/page";

export default function Home() {
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 20000,
  };

  const settings2 = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div className="bg-white overflow-hidden">
      <Head>
        <title>APTICON 2024 - Transforming Pharmacy Education</title>
        <meta name="description" content="APTICON 2024 Conference" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Join us for APTICON 2024 on September 27-28 in Bhubaneswar, Odisha. Transforming Pharmacy Education with industry experts and educators."
        />
        <meta
          name="keywords"
          content="APTICON 2024, Pharmacy Conference, Bhubaneswar, Odisha, Pharmacy Education, Submit Abstract, Register Now"
        />
        <meta name="author" content="APTICON Organizing Committee" />
        <meta
          property="og:title"
          content="APTICON 2024 - Transforming Pharmacy Education"
        />
        <meta
          property="og:description"
          content="Join us for APTICON 2024 on September 27-28 in Bhubaneswar, Odisha. Transforming Pharmacy Education with industry experts and educators."
        />
        <meta property="og:image" content="/1.png" />
        <meta property="og:url" content="https://www.apticon2024.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="APTICON 2024 - Transforming Pharmacy Education"
        />
        <meta
          name="twitter:description"
          content="Join us for APTICON 2024 on September 27-28 in Bhubaneswar, Odisha. Transforming Pharmacy Education with industry experts and educators."
        />
        <meta name="twitter:image" content="/1.png" />
      </Head>

      <Header />

      <main>
        <section className="overflow-hidden">
          <div className="relative slider-container overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white z-10 flex flex-col items-center justify-center p-4 lg:items-start lg:justify-start">
              <div className="absolute top-5 left-0 lg:top-48 lg:left-48 w-full flex flex-col items-center lg:items-start p-4 lg:p-0 space-y-4">
                <div className="text-center lg:text-left">
                  <p className="text-xs md:text-md lg:text-xl mb-2 md:mb-4 sm:block hidden">
                    Welcome to APTICON 2024, The Annual National Convention of
                    the Association of Pharmaceutical Teachers of India!
                  </p>
                  <h1 className="text-white font-black text-xs md:text-lg lg:text-3xl mb-2 md:mb-4 ">
                    {" "}
                    Beyond the Counter : Transforming Pharmacy Education for
                    Industry and Patient Impact
                  </h1>
                  <p className="text-xs md:text-md lg:text-xl mb-2 md:mb-4 sm:block hidden">
                    Participate and contribute to the evolving role of pharmacy
                    education in shaping the future of healthcare.
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xs md:text-md lg:text-xl mb-2 md:mb-4 flex items-center justify-center lg:justify-start">
                    <span className="inline-block align-middle mr-2">
                      <svg
                        fill="#ffffff"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 395.71 395.71"
                        xmlSpace="preserve"
                        stroke="#ffffff"
                        width={20}
                        height={20}
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g>
                            <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                    </span>{" "}
                    <span className="block lg:inline-block text-center lg:text-left">
                      Bhubaneshwar | 27 & 28th of September 2024
                    </span>
                  </p>
                  <p className="text-xs md:text-md lg:text-xl mb-2 md:mb-4">
                    Organized by: APTI Eastern Region
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start space-x-2 sm:space-x-4">
                    <a
                      href="#registration"
                      className="bg-ochre px-3 py-2 rounded text-white text-xs md:text-sm lg:text-base transition-transform duration-300 ease-in-out transform hover:scale-110"
                    >
                      Register Now
                    </a>
                    <a
                      href="#call-for-papers"
                      className="bg-green px-3 py-2 rounded text-white text-xs md:text-sm lg:text-base transition-transform duration-300 ease-in-out transform hover:scale-110"
                    >
                      Submit Abstract
                    </a>
                  </div>
                  <div className="hidden sm:block md:block text-center lg:text-left mt-4">
                    <Timestamps />
                  </div>
                </div>
              </div>
            </div>
            <Slider {...settings1}>
              {[
                { src: "/new/1.png", alt: "Slide 1" },
                { src: "/new/2.png", alt: "Slide 2" },
                { src: "/new/3.png", alt: "Slide 3" },
                { src: "/new/4.png", alt: "Slide 4" },
                { src: "/new/5.png", alt: "Slide 5" },
                { src: "/new/6.png", alt: "Slide 6" },
                { src: "/new/7.png", alt: "Slide 7" },
                { src: "/new/8.png", alt: "Slide 8" },
                { src: "/new/9.png", alt: "Slide 9" },
                { src: "/new/10.png", alt: "Slide 10" },
                { src: "/new/11.png", alt: "Slide 11" },
                { src: "/new/12.png", alt: "Slide 12" },
              ].map((slide, index) => (
                <div key={index} className="slide">
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-auto"
                    width={1620}
                    height={880}
                    layout="responsive"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <div className="container mx-auto py-2 px-6 lg:hidden">
          <p className="text-sm md:text-md text-black font-medium text-center lg:text-xl mb-3">
            &quot;Welcome to APTICON 2024, The Annual National Convention of the
            Association of Pharmaceutical Teachers of India!&quot;
          </p>
          <p className="text-sm md:text-md text-black font-normal text-center lg:text-xl">
            Participate and contribute to the evolving role of pharmacy
            education in shaping the future of healthcare.
          </p>
          <Timestamps />
        </div>

        <section
          id="about"
          className="container mx-auto lg:py-20 py-5 px-6 text-black"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green">
            About APTICON 2024
          </h2>
          <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            We are delighted to invite you to the 27th Annual National
            Convention of the Association of Pharmaceutical Teachers of India
            (APTICON-2024), themed &quot;Beyond the Counter: Transforming
            Pharmacy Education for Industry and Patient Impact.&quot; This
            year&apos;s convention will be held at Utkal University, Vani Vihar,
            Bhubaneswar, Odisha, on 27th & 28th September, 2024, and promises to
            be a landmark event dedicated to the advancement of pharmacy
            education and practice.
          </p>
          {/* <div className="flex justify-center m-4">
            <button className="bg-ochre text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-darkBrown">
              <Link href="/loc">Local Organizing Committee </Link>
            </button>
          </div>{" "} */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:hidden">
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">Vision</h3>
              <p className="leading-relaxed text-black">
                To revolutionize pharmacy education by bridging the gap between
                academia and industry, fostering innovation, and enhancing the
                role of pharmacists in patient care to ensure comprehensive
                healthcare solutions.
              </p>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Mission
              </h3>
              <p className="leading-relaxed text-black">
                <ul className="list-disc pl-5 md:pl-8 lg:pl-10">
                  <li>
                    To provide a platform for educators, industry experts, and
                    students to collaborate and share knowledge.
                  </li>
                  <li>
                    To explore and integrate cutting-edge advancements in
                    pharmacy education.
                  </li>
                  <li>
                    To enhance the professional skills and industry-readiness of
                    pharmacy students.
                  </li>
                  <li>
                    To promote the significant impact of pharmacists in patient
                    care and the healthcare system.
                  </li>
                </ul>
              </p>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Event Highlights
              </h3>
              <ul className="list-disc list-inside leading-relaxed text-black">
                <li>
                  In-depth Sessions: Engage with a variety of sessions covering
                  the latest trends, research, and practices in pharmaceutical
                  education.
                </li>
                <li>
                  Renowned Speakers: Hear from academic experts and industry
                  leaders who are at the forefront of pharmacy education and
                  practice.
                </li>
                <li>
                  Networking Opportunities: Connect with peers, mentors, and
                  potential collaborators from across the country.
                </li>
                <li>
                  Workshops and Panels: Participate in interactive workshops and
                  panel discussions designed to provide practical insights and
                  foster collaboration.
                </li>
              </ul>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">Impact</h3>
              <p className="leading-relaxed text-black">
                APTICON 2024 aims to make a significant impact on the healthcare
                system by ensuring that pharmacists are well-prepared to
                contribute effectively to patient care, policy development, and
                industry advancements.
              </p>
            </div>
          </div>
        </section>
        {/* <section
          id="speakers"
          className="container mx-auto py-20 px-6 text-black"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green">
            Meet Our Speakers
          </h2>
          <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            Get to know the esteemed speakers and subject matter experts who
            will be sharing their knowledge and insights at APTICON 2024. Learn
            about their backgrounds, areas of expertise, and the topics they
            will be presenting on.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <Image
                src="/user.jpg"
                alt="Speaker 1"
                className="w-full h-48 object-cover rounded-t-lg mb-6"
                height={400}
                width={400}
              />
              <h3 className="text-2xl font-semibold mb-2 text-ochre">
                Dr. Jane Doe
              </h3>
              <p className="text-sm font-semibold mb-4 text-darkBrown">
                Pharmacy Innovation Expert
              </p>
              <p className="leading-relaxed text-black">
                Dr. Jane Doe has over 20 years of experience in pharmacy
                innovation and will be discussing the latest trends in pharmacy
                technology and patient care.
              </p>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <Image
                src="/user.jpg"
                alt="Speaker 2"
                className="w-full h-48 object-cover rounded-t-lg mb-6"
                height={400}
                width={400}
              />
              <h3 className="text-2xl font-semibold mb-2 text-ochre">
                John Smith
              </h3>
              <p className="text-sm font-semibold mb-4 text-darkBrown">
                Healthcare Policy Analyst
              </p>
              <p className="leading-relaxed text-black">
                John Smith is a renowned healthcare policy analyst who will be
                presenting on the impact of recent regulatory changes on
                pharmacy practices.
              </p>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <Image
                src="/user.jpg"
                alt="Speaker 3"
                className="w-full h-48 object-cover rounded-t-lg mb-6"
                height={400}
                width={400}
              />
              <h3 className="text-2xl font-semibold mb-2 text-ochre">
                Emily Johnson
              </h3>
              <p className="text-sm font-semibold mb-4 text-darkBrown">
                Clinical Pharmacist
              </p>
              <p className="leading-relaxed text-black">
                Emily Johnson, a clinical pharmacist, will share her insights on
                improving patient outcomes through collaborative care models and
                advanced clinical practices.
              </p>
            </div>
          </div>
        </section> */}
        {/* 
        <div id="schedule" className="container mx-auto py-20">
          <Schedule />
        </div>

        <section id="sponsors" className="container mx-auto py-20 px-6">
          {" "}
          <Sponsors />
        </section> */}

        <section
          id="registration"
          className="container mx-auto lg:py-20 py-5 text-black"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green">
            Register for APTICON 2024
          </h2>
          <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            Secure your spot at APTICON 2024 by registering today. Find out
            about registration fees, deadlines, and the benefits of attending
            the conference. Join us for an enriching experience that promises to
            transform your understanding of pharmacy education and practice.
          </p>
          <div className="flex justify-center">
            <button className="bg-green text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-darkBrown">
              <Link href="/registration">Register Now</Link>
            </button>
          </div>
        </section>

        <section
          id="call-for-papers"
          className="container mx-auto lg:py-20 py-5 px-6 text-black"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green">
            Submit Abstract
          </h2>
          <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            The APTICON Scientific Committee (ASC) is delighted to invite
            delegates to submit their original scientific work as abstracts for
            presentation during the Congress as Poster and/or Oral
            presentations. The ASC will review all submitted abstracts and
            select those for Poster and/or Oral presentation. The best Poster
            and/or Oral presentations in each category will be announced by the
            ASC during the valedictory function. Winners will receive a
            certificate, memento, and cash prize.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Areas of Specialization
              </h3>
              <ul className="list-disc list-inside leading-relaxed text-black">
                {[
                  "Pharmaceutical Technology",
                  "Medicinal Chemistry",
                  "Pharmacognosy, Indigenous Drugs, Herbal Formulations, and Phytochemistry",
                  "Pharmacology and Toxicology, Clinical Research & Pharmacovigilance",
                  "Pharmaceutical Analysis and Quality Assurance",
                  "Biopharmaceutics, Pharmacokinetics & Drug Metabolism",
                  "Biotechnology and Biotherapeutics",
                  "Hospital, Community, and Clinical Pharmacy",
                  "Pharmaceutical Education and Professional Pharmacy",
                  "Drug Regulatory Affairs & Pharmaceutical Management",
                  "Pharmacoeconomics and Pharmacoepidemiology",
                  "Artificial Intelligence / Bioinformatics / Data Analytics",
                ].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Abstract Content
              </h3>
              <ul className="list-disc list-inside leading-relaxed text-black">
                <li>
                  The abstract should summarize the work proposed to be
                  presented, including the objectives, methods, results, and
                  conclusions.
                </li>
                <li>
                  Abstracts must be original and not previously published or
                  presented at another conference.
                </li>
              </ul>
              <h3 className="text-2xl font-semibold mb-4 text-ochre mt-6">
                Submission Instructions
              </h3>
              <ul className="list-disc list-inside leading-relaxed text-black">
                <li>
                  The abstract should be prepared according to the guidelines
                  provided on the website.
                </li>
                <li>
                  Submit the abstract in the prescribed format and paste it into
                  the designated space on the submission portal.
                </li>
                <li>Abstracts must be submitted online only.</li>
                <li>The deadline for submission is 30 June, 2024.</li>
                <li>
                  A model abstract is available for reference on the website.
                </li>
                <li className="text-green">
                  <a
                    href="https://docs.google.com/document/d/1NyU41IUlp_XWPR0K4A_2ljimyO2ORogt/edit?usp=sharing&ouid=112003801617762022134&rtpof=true&sd=true"
                    download
                  >
                    APTICON MODEL ABSRAACT
                  </a>
                </li>
                <li className="text-green">
                  <a
                    href="https://docs.google.com/document/d/1BTly4JCmC4QXkefE2bCrOXl1yRpSeNJ-/edit?usp=sharing&ouid=112003801617762022134&rtpof=true&sd=true"
                    download
                  >
                    MODEL ABSTRACT POSTER
                  </a>
                </li>{" "}
              </ul>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-green text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-darkBrown">
              <Link href="https://forms.gle/SeBkWPaopQE16awd9">
                Submit Abstract
              </Link>
            </button>
          </div>
          <div className="bg-ashGrey p-6 rounded-lg shadow-md mt-10">
            <h3 className="text-2xl font-semibold mb-4 text-ochre">
              Review Process
            </h3>
            <ul className="list-disc list-inside leading-relaxed text-black">
              <li>All submitted abstracts will be reviewed by the ASC.</li>
              <li>
                Selected abstracts will be notified for Poster and/or Oral
                presentation.
              </li>
              <li>
                The best Poster and/or Oral presentations will be selected from
                each category and announced during the valedictory function.
              </li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4 text-ochre mt-6">
              Presentation Guidelines
            </h3>
            <ul className="list-disc list-inside leading-relaxed text-black">
              <li>
                Detailed guidelines for Poster and Oral presentations will be
                provided upon acceptance of the abstract.
              </li>
              <li>Presenters must be registered delegates of APTICON 2024.</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4 text-ochre mt-6">
              Rewards
            </h3>
            <ul className="list-disc list-inside leading-relaxed text-black">
              <li>
                The best Poster and/or Oral presentations in each category will
                receive a certificate, memento, and cash prize.
              </li>
            </ul>
          </div>
        </section>

        <NationalBody />

        <Contact />
        <ScrollToTopButton />
      </main>

      <Footer />
    </div>
  );
}
