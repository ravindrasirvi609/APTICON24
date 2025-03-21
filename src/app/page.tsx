"use client";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import NationalBody from "./national-body/page";
import ConferenceSchedule from "@/components/schedule";
import { scheduleData } from "@/lib/data";
import PPtlist from "@/components/pptList";
import OpfModel from "@/components/opfModel";

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

  return (
    <div className="bg-white overflow-hidden">
      <Head>
        <title>APTICON 2024 - Transforming Pharmacy Education</title>
        <meta name="description" content="APTICON 2024 Conference" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

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
        <meta property="og:image" content="/favicon.ico" />
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
        <meta name="twitter:image" content="/favicon.ico" />
      </Head>
      <div className="bg-white overflow-hidden fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      <main className="mt-20">
        <section className="overflow-hidden">
          <div className="relative slider-container overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 text-white z-10 flex flex-col items-center justify-center p-4 lg:items-start lg:justify-start">
              <div className="absolute top-5 left-0 lg:top-24 lg:left-24 w-full flex flex-col items-center lg:items-start p-4 lg:p-0 space-y-4 lg:pr-[72px]">
                <div className="text-center lg:text-left">
                  <p className="text-xs md:text-md lg:text-xl mb-2 md:mb-4 sm:block hidden">
                    Welcome to APTICON 2024, The 27th Annual National Convention
                    of the Association of Pharmaceutical Teachers of India!
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
                      Utkal University | 27<sup>th</sup> & 28<sup>th</sup> of
                      September 2024
                    </span>
                  </p>
                  <p className="text-xs md:text-md lg:text-xl mb-2 md:mb-4">
                    Host: APTI Eastern Region
                  </p>
                  <button className="bg-green p-2 rounded-sm">
                    <Link href={"/recieptList"}>Fees Recipt</Link>
                  </button>
                </div>
              </div>
            </div>
            <Slider {...settings1}>
              {[
                { src: "/new/14.JPG", alt: "Slide 14" },
                { src: "/new/13.jpeg", alt: "Slide 13" },
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
        </div>

        <section className="container mx-auto lg:py-20 py-10 px-6 text-black">
          <h1 className="text-4xl font-bold text-center mb-10">
            Conference Photo Gallery
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="https://drive.google.com/drive/folders/1Tp2CtG3GwmtL9KqvBpAsiFdmRNiTf0mA">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  Inauguration
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/1HwnvVSRWhHMSLzVWjLruZ9ZkW95S-NVc">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  APTI Annual Awards
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/1zrUQ6kS4oYAieT6R6ebp1RhYfxO5hQC8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  Registration
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/1fjWSc3DXDip9ZT0MfvOxLh75tRqzEiyh">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  Plenary
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/1lpiGrCItTcvl4I82rgRVbr801_TiFdOO">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  Delegates
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/1RruOrHa07rr3NlkPyye0r9C2nVz9v9n8">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  Minister
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/10_yQP0nKNSwvwIMrv7n3iSp39vzSmxjM">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  Montu Patel
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/1MnPiWlx5izFjvBmJ3O2ZUAYZovRMpCZG">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  Star Night
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/15ERG94X7Ov08bIyrkYOATOjbTchsaw1Y">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  Row
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/1zJnuhHUHZksSU9RoVin21-oN9dYwhOTc">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  AGM
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/1hKeiL31Q9A09KyAEonqlQA3rpIPlADlt">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  Valedictory
                </h2>
              </div>
            </Link>
            <Link href="https://drive.google.com/drive/folders/1FMeBd8KHhY92qkceW6yKZjiPoCcnkge9">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-xl font-semibold text-center text-darkBrown">
                  Expo
                </h2>
              </div>
            </Link>
          </div>
        </section>
        <section
          className="container mx-auto lg:py-20 py-5 px-6 text-black"
          id="about"
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
          <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <Image
                  src="/vision.png"
                  alt="vision"
                  className="w-8 h-8 object-cover rounded-full align-middle mb-4 mx-3"
                  width={480}
                  height={480}
                />
                <h3 className="text-2xl font-semibold mb-4 text-ochre">
                  Vision
                </h3>
              </div>{" "}
              <p className="leading-relaxed text-black">
                To revolutionize pharmacy education by bridging the gap between
                academia and industry, fostering innovation, and enhancing the
                role of pharmacists in patient care to ensure comprehensive
                healthcare solutions.
              </p>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <Image
                  src="/mission.png"
                  alt="Mission"
                  className="w-8 h-8 object-cover rounded-full align-middle mb-4 mx-3"
                  width={480}
                  height={480}
                />
                <h3 className="text-2xl font-semibold mb-4 text-ochre">
                  Mission
                </h3>
              </div>
              <div className="leading-relaxed text-black">
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
              </div>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <div className="flex items-center">
                <Image
                  src="/highlight.png"
                  alt="highlight"
                  className="w-8 h-8 object-cover rounded-full align-middle mb-4 mx-3"
                  width={480}
                  height={480}
                />
                <h3 className="text-2xl font-semibold mb-4 text-ochre">
                  Event Highlights
                </h3>
              </div>{" "}
              <ul className="list-disc list-outside leading-relaxed text-black">
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
              <div className="flex items-center">
                <Image
                  src="/stats.png"
                  alt="stats"
                  className="w-8 h-8 object-cover rounded-full align-middle mb-4 mx-3"
                  width={480}
                  height={480}
                />
                <h3 className="text-2xl font-semibold mb-4 text-ochre">
                  Impact
                </h3>
              </div>{" "}
              <p className="leading-relaxed text-black">
                APTICON 2024 aims to make a significant impact on the healthcare
                system by ensuring that pharmacists are well-prepared to
                contribute effectively to patient care, policy development, and
                industry advancements.
              </p>
            </div>
          </div>
        </section>
        <section
          className="container mx-auto lg:py-6 py-2 px-6 text-black"
          id="about"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green">
                About the APTI
              </h2>
              <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
                The Association of Pharmaceutical Teachers of India (APTI) is
                the premier professional organization dedicated to the
                advancement of pharmaceutical education and practice in India.
                Founded with the vision of fostering excellence in the field of
                pharmacy, APTI serves as a crucial link between educators,
                researchers, and practitioners, driving progress and innovation.
              </p>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green">
                About the Venue
              </h2>
              <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
                APTICON 2024 will be organized at Utkal University. Known as the
                Mother University of Odisha, Utkal University has a rich history
                and has made significant contributions to the development of
                modern Odisha. Established in 1943, it is one of India&apos;s
                oldest and largest affiliating universities. Located in
                Bhubaneswar, the university is renowned for its academic and
                research excellence, making it an ideal venue for this event.
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
        <div id="schedule">
          <ConferenceSchedule schedule={scheduleData} />
        </div>
        {/* <section id="sponsors" className="container mx-auto py-20 px-6">
          {" "}
          <Sponsors />
        </section>  */}
        <div id="registration" className="container mx-auto"></div>
        <section className="container mx-auto lg:py-20 py-5 text-black">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green">
            Register to APTICON 2024
          </h2>
          <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            Secure your spot at APTICON 2024 by registering today. Find out
            about registration fees, deadlines, and the benefits of attending
            the conference. Join us for an enriching experience that promises to
            transform your understanding of pharmacy education and practice.
          </p>
          <div className="flex flex-col items-center space-y-6 md:space-y-8 p-6 md:p-8 ">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-darkBrown underline hover:text-green">
              <Link href="/RegistrationList">
                <span>Know Your Registration Number</span>
              </Link>
            </h3>
            <Link href="/registration">
              <button className="bg-green text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-darkBrown transition duration-300 ease-in-out">
                Register Now
              </button>
            </Link>
          </div>
        </section>
        <div id="call-for-papers" className="container mx-auto"></div>
        <section
          id="call-for-papers"
          className="container mx-auto lg:py-20 py-5 px-6 text-black"
        >
          {/* <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green">
            Abstract Submission{" "}
          </h2> */}

          {/* <div className="flex flex-col items-center space-y-6 p-6 md:p-8 bg-lightGray rounded-lg shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-center text-darkBrown underline hover:text-green transition duration-300 ease-in-out">
              <Link href="/abstractData">
                <span>Know Your Abstract Details</span>
              </Link>
            </h3>
            <p className="text-lg md:text-xl text-center text-darkGray mt-4">
              For any queries, contact{" "}
              <a
                href="tel:+8249906480"
                className="text-green hover:text-darkBrown transition duration-300 ease-in-out"
              >
                8249906480
              </a>
            </p>
          </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Poster Presentation Guidelines
              </h3>
              <a
                href={`https://drive.google.com/file/d/150ALsO2NYukGgaXl6XMQzQAiAlSgB0e7/view?usp=sharing`}
                download
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-ochre text-white rounded-md hover:bg-ochre-dark transition-colors duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Guidelines
              </a>
            </div>
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Oral Presentation Guidelines
              </h3>
              <a
                href={`https://drive.google.com/file/d/15rdGtUMgcodGah6dYntQkEct21zxT7zj/view?usp=sharing`}
                download
                target="_blank"
                className="inline-flex items-center px-4 py-2 bg-ochre text-white rounded-md hover:bg-ochre-dark transition-colors duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Guidelines
              </a>
            </div>
          </div> */}
          {/* <div className="text-2xl flex justify-center my-4 text-ochre">
            Abstract Submission is Closed
          </div> 

           <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
            The APTICON Scientific Committee (ASC) is delighted to invite
            delegates to submit their original scientific work as abstracts for
            presentation during the Congress as Poster and/or Oral
            presentations. The ASC will review all submitted abstracts and
            select those for Poster and/or Oral presentation. All abstracts and
            proceedings will be compiled by APTI&apos;s SCOPUS indexed Impact
            Factor Journal, the Indian Journal of Pharmaceutical Education and
            Research (IJPER). Selected full-length papers will be published in
            IJPER after a thorough peer review process. The best Poster and/or
            Oral presentations in each category will be announced by the ASC
            during the valedictory function. Winners will receive a certificate
            and memento.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-ashGrey p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-ochre">
                Areas of Specialization
              </h3>
              <ul className="list-disc list-outside leading-relaxed text-black">
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
              <ul className="list-disc list-outside leading-relaxed text-black">
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
              <ul className="list-disc list-outside leading-relaxed text-black">
                <li>
                  The abstract should be prepared according to the guidelines
                  provided on the website.
                </li>
                <li>
                  Submit the abstract in the prescribed format and paste it into
                  the designated space on the submission portal.
                </li>
                <li>Abstracts must be submitted online only.</li>
                <li>The deadline for submission is 15 Aug, 2024.</li>
                <li>
                  A model abstract is available for reference on the website.
                </li>
                <li className="text-green">
                  <a
                    href="https://docs.google.com/document/d/1NyU41IUlp_XWPR0K4A_2ljimyO2ORogt/edit?usp=sharing&ouid=112003801617762022134&rtpof=true&sd=true"
                    download
                  >
                    APTICON MODEL ABSTRACT
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

          <div className="bg-ashGrey p-6 rounded-lg shadow-md mt-10">
            <h3 className="text-2xl font-semibold mb-4 text-ochre">
              Review Process
            </h3>
            <ul className="list-disc list-outside leading-relaxed text-black">
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
            <ul className="list-disc list-outside leading-relaxed text-black">
              <li>
                Detailed guidelines for Poster and Oral presentations will be
                provided upon acceptance of the abstract.
              </li>
              <li>Presenters must be registered delegates of APTICON 2024.</li>
            </ul>
            <h3 className="text-2xl font-semibold mb-4 text-ochre mt-6">
              Rewards
            </h3>
            <ul className="list-disc list-outside leading-relaxed text-black">
              <li>
                The best Poster and/or Oral presentations in each category will
                receive a certificate and a memento.
              </li>
            </ul>
          </div> */}
        </section>
        <PPtlist />
        <NationalBody />
        <Contact />
        <ScrollToTopButton />
        <OpfModel />
      </main>

      <Footer />
    </div>
  );
}
