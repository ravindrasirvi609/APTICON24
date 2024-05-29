import Head from "next/head";

export default function About() {
  return (
    <div className="bg-white">
      <Head>
        <title>About - APTICON 2024</title>
        <meta name="description" content="About APTICON 2024" />
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
          id="event-overview"
          className="container mx-auto py-20 text-black"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            About APTICON 2024
          </h2>
          <p className="text-center mb-10">
            Discover the vision and mission of APTICON 2024. Learn about our
            goal to revolutionize pharmacy education by bridging the gap between
            academia and industry, fostering innovation, enhancing the role of
            pharmacists in patient care, improving teacher and workplace
            conditions, and refining the regulatory and policy framework.
          </p>
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4">Event Overview</h3>
            <p>
              APTICON 2024 is a premier conference focused on advancing pharmacy
              education and practice. Join us for insightful sessions,
              networking opportunities, and more.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4">Organizers</h3>
            <p>
              Our organizing committee comprises industry leaders and academic
              experts dedicated to making this event a success.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">History</h3>
            <p>
              APTICON has a rich history of contributing to the field of
              pharmacy. Learn more about our past events and their impact on the
              industry.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2024 APTICON. All rights reserved.</p>
      </footer>
    </div>
  );
}
