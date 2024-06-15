import Header from "@/components/header";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <Header />
      <section
        id="about"
        className="container mx-auto lg:py-20 py-5 px-6 text-black"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-green">
          About APTICON 2024
        </h2>
        <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
          We are delighted to invite you to the 27th Annual National Convention
          of the Association of Pharmaceutical Teachers of India (APTICON-2024),
          themed &quot;Beyond the Counter: Transforming Pharmacy Education for
          Industry and Patient Impact.&quot; This year&apos;s convention will be
          held at Utkal University, Vani Vihar, Bhubaneswar, Odisha, on 27th &
          28th September, 2024, and promises to be a landmark event dedicated to
          the advancement of pharmacy education and practice.
        </p>
        {/* <div className="flex justify-center m-4">
            <button className="bg-ochre text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-darkBrown">
              <Link href="/loc">Local Organizing Committee </Link>
            </button>
          </div>{" "} */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-ashGrey p-6 rounded-lg shadow-md">
            <div className="flex items-center">
              <Image
                src="/vision.png"
                alt="vision"
                className="w-8 h-8 object-cover rounded-full align-middle mb-4 mx-3"
                width={480}
                height={480}
              />
              <h3 className="text-2xl font-semibold mb-4 text-ochre">vision</h3>
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
            <p className="leading-relaxed text-black">
              <ul className="list-disc pl-5 md:pl-8 lg:pl-10">
                <li>
                  To provide a platform for educators, industry experts, and
                  students to collaborate and share knowledge.
                </li>
                <li>
                  To explore and integrate cutting-edge advancements in pharmacy
                  education.
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
            <div className="flex items-center">
              <Image
                src="/stats.png"
                alt="stats"
                className="w-8 h-8 object-cover rounded-full align-middle mb-4 mx-3"
                width={480}
                height={480}
              />
              <h3 className="text-2xl font-semibold mb-4 text-ochre">Impact</h3>
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
    </div>
  );
};

export default About;
