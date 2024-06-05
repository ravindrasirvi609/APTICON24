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

export default function Home() {
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
    cssEase: "linear",
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
        <meta property="og:image" content="/banner1.jpg" />
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
        <meta name="twitter:image" content="/banner1.jpg" />
      </Head>

      <Header />

      <main>
        <section className="overflow-hidden">
          <div className="relative slider-container overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 text-white z-10 flex flex-col items-center justify-center p-4 lg:items-start lg:justify-start">
              <div className="absolute top-5 left-0 lg:top-48 lg:left-48 w-full flex flex-col items-center lg:items-start p-4 lg:p-0 space-y-4">
                <div className="text-center lg:text-left">
                  <h1 className="text-white font-black text-xs md:text-lg lg:text-4xl mb-2 md:mb-4">
                    {" "}
                    THEME: Innovations in Pharmacy Education and Practice
                  </h1>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-xs md:text-lg lg:text-4xl mb-2 md:mb-4 font-black">
                    Join us on September 27-28, 2024
                  </p>
                  <p className="text-xs md:text-md lg:text-xl mb-2 md:mb-4">
                    Location: Bhubaneswar, Odisha
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
                  <div className="text-center lg:text-left mt-4">
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

        {/* <div className="container mx-auto py-20 px-6">
          <Timestamps />
        </div> */}

        <section id="about" className="container mx-auto py-20 px-6 text-black">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green">
            About APTICON 2024
          </h2>
          <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            Discover the vision and mission of APTICON 2024. Our goal is to
            revolutionize pharmacy education by bridging the gap between
            academia and industry, fostering innovation, enhancing the role of
            pharmacists in patient care, improving teacher and workplace
            conditions, and refining the regulatory and policy framework. Gain
            insights into our objectives and the profound impact we aim to
            create in the healthcare system.
          </p>
          {/* <div className="flex justify-center m-4">
            <button className="bg-ochre text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-darkBrown">
              <Link href="/loc">Local Organizing Committee </Link>
            </button>
          </div>{" "} */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Our Vision
              </h3>
              <p className="leading-relaxed text-black">
                To be a leader in pharmacy education by integrating advanced
                technologies and innovative practices, ensuring that pharmacists
                are well-equipped to meet the demands of modern healthcare.
              </p>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Our Mission
              </h3>
              <p className="leading-relaxed text-black">
                To bridge the gap between academia and industry, fostering an
                environment of collaboration and continuous improvement, with a
                focus on enhancing patient care and professional development.
              </p>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Objectives
              </h3>
              <ul className="list-disc list-inside leading-relaxed text-black">
                <li>Promote innovation in pharmacy education and practice.</li>
                <li>Enhance the role of pharmacists in patient care.</li>
                <li>Improve teacher and workplace conditions.</li>
                <li>Refine regulatory and policy frameworks.</li>
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
          className="container mx-auto py-20 text-black"
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
          className="container mx-auto py-20 px-6 text-black"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green">
            Call for Papers
          </h2>
          <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            Share your research, insights, and expertise at APTICON 2024. We
            invite submissions for oral and poster presentations on topics
            related to pharmacy education, practice, research, and innovation.
            Submit your abstracts for consideration and contribute to the
            advancement of the pharmacy profession.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Submission Guidelines
              </h3>
              <ul className="list-disc list-inside leading-relaxed text-black">
                <li>Abstracts should be no more than 250 words.</li>
                <li>Include a title, author names, and affiliations.</li>
                <li>Specify the presentation format (oral or poster).</li>
                <li>Submit abstracts by August 15, 2024.</li>
              </ul>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Presentation Topics
              </h3>
              <ul className="list-disc list-inside leading-relaxed text-black">
                <li>Innovations in pharmacy education and practice.</li>
                <li>Research and development in pharmacy.</li>
                <li>Enhancing patient care through technology.</li>
                <li>Regulatory and policy issues in pharmacy.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto py-20 text-black">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green">
            Contact Us
          </h2>
          <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            Have questions or need more information? Get in touch with the
            APTICON 2024 organizing committee. Find our contact details, send us
            an email, or fill out the contact form. We’re here to assist you
            with any inquiries you may have regarding the conference.
          </p>
          <div className="flex flex-col items-center">
            <p className="text-lg mb-4">Contact Email: info@apticon2024.com</p>
            <p className="text-lg mb-4">Phone: +1 (123) 456-7890</p>
            <p className="text-lg mb-8">
              Address: 123 Conference Center, City, Country
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
