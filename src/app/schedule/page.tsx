import Head from "next/head";

export default function Schedule() {
  return (
    <div className="bg-white">
      <Head>
        <title>Schedule - APTICON 2024</title>
        <meta name="description" content="Schedule for APTICON 2024" />
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
          id="conference-schedule"
          className="container mx-auto py-20 text-black"
        >
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
          <div>
            <div className="flex flex-wrap justify-center">
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <h3 className="text-xl font-bold mb-4">Day 1</h3>
                <ul>
                  <li>Keynote Address by Dr. John Doe</li>
                  <li>Panel Discussion on Innovations in Pharmacy Education</li>
                  <li>Workshop on Bridging Academia and Industry</li>
                  <li>Deliberations on Enhancing Patient Care</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <h3 className="text-xl font-bold mb-4">Day 2</h3>
                <ul>
                  <li>Keynote Address by Dr. Jane Doe</li>
                  <li>
                    Panel Discussion on Research and Development in Pharmacy
                  </li>
                  <li>Workshop on Pharmaceutical Sciences</li>
                  <li>Deliberations on Drug Discovery and Development</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <h3 className="text-xl font-bold mb-4">Day 3</h3>
                <ul>
                  <li>Keynote Address by Dr. James Doe</li>
                  <li>Panel Discussion on Pharmacy Practice</li>
                  <li>Workshop on Clinical Pharmacy</li>
                  <li>Deliberations on Pharmacovigilance and Drug Safety</li>
                </ul>
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
