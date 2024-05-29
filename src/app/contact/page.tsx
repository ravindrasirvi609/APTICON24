import Head from "next/head";

export default function Contact() {
  return (
    <div className="bg-white">
      <Head>
        <title>Contact - APTICON 2024</title>
        <meta name="description" content="Contact APTICON 2024" />
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
        <section id="contact-us" className="container mx-auto py-20 text-black">
          <h2 className="text-3xl font-bold  text-center mb-10">Contact Us</h2>
          <p className="text-center mb-10">
            Have questions or need more information? Get in touch with the
            APTICON 2024 organizing committee. Find our contact details, send us
            an email, or fill out the contact form. We’re here to assist you
            with any inquiries you may have regarding the conference.
          </p>
          <div>
            <div className="flex justify-center mb-10">
              <div className="w-1/3">
                <h3 className="text-xl font-bold mb-4">Contact Details</h3>
                <p>APTICON 2024</p>
                <p>123 Conference Way</p>
                <p>Conference City, CC 12345</p>
                <p>Phone: +1 234 567 8901</p>
                <p>Email: william.henry.moody@my-own-personal-domain.com</p>
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
