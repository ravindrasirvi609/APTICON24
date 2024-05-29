import Head from "next/head";

export default function Speakers() {
  return (
    <div className="bg-white">
      <Head>
        <title>Speakers - APTICON 2024</title>
        <meta name="description" content="Speakers at APTICON 2024" />
      </Head>

      <header className="bg-black text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">APTICON 2024</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-ochre">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-ochre">
                  About
                </a>
              </li>
              <li>
                <a href="/schedule" className="hover:text-ochre">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/speakers" className="hover:text-ochre">
                  Speakers
                </a>
              </li>
              <li>
                <a href="/sponsors" className="hover:text-ochre">
                  Sponsors
                </a>
              </li>
              <li>
                <a href="/registration" className="hover:text-ochre">
                  Registration
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-ochre">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section
          id="meet-our-speakers"
          className="container mx-auto py-20 text-black"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Meet Our Speakers
          </h2>
          <p className="text-center mb-10">
            Get to know the esteemed speakers and subject matter experts who
            will be sharing their knowledge and insights at APTICON 2024. Learn
            about their backgrounds, areas of expertise, and the topics they
            will be presenting on.
          </p>
          <div>
            <div className="flex flex-wrap justify-center">
              <div className="w-1/3 p-4">
                <img
                  src="/speaker-1.jpg"
                  alt="Speaker 1"
                  className="w-full h-auto"
                />
                <h3 className="text-xl font-bold mt-4">Dr. Jane Doe</h3>
                <p className="text-grey">Professor of Computer Science</p>
                <p className="text-grey">University of ABC</p>
              </div>
              <div className="w-1/3 p-4">
                <img
                  src="/speaker-2.jpg"
                  alt="Speaker 2"
                  className="w-full h-auto"
                />
                <h3 className="text-xl font-bold mt-4">Dr. John Smith</h3>
                <p className="text-grey">Professor of Electrical Engineering</p>
                <p className="text-grey">University of XYZ</p>
              </div>
              <div className="w-1/3 p-4">
                <img
                  src="/speaker-3.jpg"
                  alt="Speaker 3"
                  className="w-full h-auto"
                />
                <h3 className="text-xl font-bold mt-4">Dr. Alice Johnson</h3>
                <p className="text-grey">Professor of Mechanical Engineering</p>
                <p className="text-grey">University of PQR</p>
              </div>
              <div className="w-1/3 p-4">
                <img
                  src="/speaker-4.jpg"
                  alt="Speaker 4"
                  className="w-full h-auto"
                />
                <h3 className="text-xl font-bold mt-4">Dr. Bob Brown</h3>
                <p className="text-grey">Professor of Civil Engineering</p>
                <p className="text-grey">University of LMN</p>
              </div>
              <div className="w-1/3 p-4">
                <img
                  src="/speaker-5.jpg"
                  alt="Speaker 5"
                  className="w-full h-auto"
                />
                <h3 className="text-xl font-bold mt-4">Dr. Carol White</h3>
                <p className="text-grey">Professor of Chemical Engineering</p>
                <p className="text-grey">University of DEF</p>
              </div>
              <div className="w-1/3 p-4">
                <img
                  src="/speaker-6.jpg"
                  alt="Speaker 6"
                  className="w-full h-auto"
                />
                <h3 className="text-xl font-bold mt-4">Dr. David Green</h3>
                <p className="text-grey">Professor of Industrial Engineering</p>
                <p className="text-grey">University of MNO</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2024 APTICON. All rights reserved.</p>
      </footer>
    </div>
  );
}
