import Head from "next/head";

export default function Sponsors() {
  return (
    <div className="bg-white">
      <Head>
        <title>Sponsors - APTICON 2024</title>
        <meta name="description" content="Sponsors of APTICON 2024" />
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
          id="our-sponsors"
          className="container mx-auto py-20 text-black"
        >
          <h2 className="text-3xl font-bold text-center mb-10">Our Sponsors</h2>
          <p className="text-center mb-10">
            We extend our gratitude to our sponsors whose generous support makes
            APTICON 2024 possible. Discover our sponsors, their contributions,
            and how they play a crucial role in the success of the conference.
          </p>
          <div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4">
                <h3 className="text-xl font-bold">Platinum Sponsors</h3>
                <p>
                  Our Platinum Sponsors are the backbone of APTICON 2024. Their
                  generous contributions make it possible for us to host the
                  conference and provide a platform for professionals to share
                  their knowledge and experiences.
                </p>
              </div>
              <div className="bg-gray-100 p-4">
                <h3 className="text-xl font-bold">Gold Sponsors</h3>
                <p>
                  Our Gold Sponsors play a crucial role in the success of
                  APTICON 2024. Their support enables us to provide attendees
                  with valuable insights and networking opportunities.
                </p>
              </div>
              <div className="bg-gray-100 p-4">
                <h3 className="text-xl font-bold">Silver Sponsors</h3>
                <p>
                  Our Silver Sponsors contribute to the success of APTICON 2024
                  by providing financial support and resources that help us
                  deliver a high-quality conference experience.
                </p>
              </div>
              <div className="bg-gray-100 p-4">
                <h3 className="text-xl font-bold">Bronze Sponsors</h3>
                <p>
                  Our Bronze Sponsors help make APTICON 2024 a reality by
                  providing essential support and resources that contribute to
                  the overall success of the conference.
                </p>
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
