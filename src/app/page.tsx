"use client";
import Head from "next/head";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
// import banner1 from "/banner1.jpeg";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   beforeChange: (current: any, next: SetStateAction<number>) =>
  //     setCurrentSlide(next),
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white">
      <Head>
        <title>APTICON 2024</title>
        <meta name="description" content="APTICON 2024 Conference" />
      </Head>

      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">APTICON 2024</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-ochre">
                  About
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-ochre">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#speakers" className="hover:text-ochre">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#sponsors" className="hover:text-ochre">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="#registration" className="hover:text-ochre">
                  Registration
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-ochre">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section>
          <div className="slider-container">
            <Slider {...settings}>
              <div className="slide relative">
                <Image
                  src="/banner1.jpeg"
                  alt="Slide 1"
                  className="w-full h-auto"
                  width={1920}
                  height={1080}
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white z-10">
                  <h2 className="text-4xl font-bold mb-4">APTICON 2024</h2>
                  <p className="text-xl mb-4">
                    Join us on September 27-28, 2024
                  </p>
                  <p className="text-lg mb-4">Location: Bhubaneswar, Odisha</p>
                  <div className="flex space-x-4">
                    <a
                      href="#registration"
                      className="bg-ochre px-4 py-2 rounded text-white"
                    >
                      Register Now
                    </a>
                    <a
                      href="#call-for-papers"
                      className="bg-ochre px-4 py-2 rounded text-white"
                    >
                      Submit Abstract
                    </a>
                  </div>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src="/banner2.jpeg"
                  alt="Slide 2"
                  className="w-full h-auto"
                  width={1920}
                  height={1080}
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white z-10">
                  <h2 className="text-4xl font-bold mb-4">
                    Transforming Pharmacy Education
                  </h2>
                  <p className="text-xl mb-4">Theme: Beyond the Counter</p>
                  <p className="text-lg mb-4">
                    Join industry experts and educators
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#registration"
                      className="bg-ochre px-4 py-2 rounded text-white"
                    >
                      Register Now
                    </a>
                    <a
                      href="#call-for-papers"
                      className="bg-ochre px-4 py-2 rounded text-white"
                    >
                      Submit Abstract
                    </a>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </section>

        <section id="about" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            About APTICON 2024
          </h2>

          <p className="text-center mb-10">
            Discover the vision and mission of APTICON 2024. Learn about our
            goal to revolutionize pharmacy education by bridging the gap between
            academia and industry, fostering innovation, enhancing the role of
            pharmacists in patient care, improving teacher and workplace
            conditions, and refining the regulatory and policy framework. Get
            insights into our objectives and the impact we aim to create in the
            healthcare system.
          </p>
        </section>

        <section id="schedule" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Conference Schedule
          </h2>
          <p className="text-center mb-10">
            Stay updated with the detailed schedule of APTICON 2024. Explore the
            timeline of keynote sessions, seminars, workshops, and deliberations
            across various tracks, including Innovations in Pharmacy Education,
            Bridging Academia and Industry, Enhancing Patient Care, Research and
            Development in Pharmacy, and more.
          </p>
        </section>

        <section id="speakers" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Meet Our Speakers
          </h2>
          <p className="text-center mb-10">
            Get to know the esteemed speakers and subject matter experts who
            will be sharing their knowledge and insights at APTICON 2024. Learn
            about their backgrounds, areas of expertise, and the topics they
            will be presenting on.
          </p>
        </section>

        <section id="sponsors" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Sponsors</h2>
          <p className="text-center mb-10">
            We extend our gratitude to our sponsors whose generous support makes
            APTICON 2024 possible. Discover our sponsors, their contributions,
            and how they play a crucial role in the success of the conference.
          </p>
        </section>

        <section id="registration" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Register for APTICON 2024
          </h2>
          <p className="text-center mb-10">
            Secure your spot at APTICON 2024 by registering today. Find out
            about registration fees, deadlines, and the benefits of attending
            the conference. Join us for an enriching experience that promises to
            transform your understanding of pharmacy education and practice.
          </p>
        </section>

        <section id="contact" className="container mx-auto py-20">
          <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
          <p className="text-center mb-10">
            Have questions or need more information? Get in touch with the
            APTICON 2024 organizing committee. Find our contact details, send us
            an email, or fill out the contact form. We’re here to assist you
            with any inquiries you may have regarding the conference.
          </p>
        </section>
      </main>

      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2024 APTICON. All rights reserved.</p>
      </footer>
    </div>
  );
}
