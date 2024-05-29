import Head from "next/head";

export default function Registration() {
  return (
    <div className="bg-white">
      <Head>
        <title>Registration - APTICON 2024</title>
        <meta name="description" content="Register for APTICON 2024" />
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
          id="register-for-apticon"
          className="container mx-auto py-20 text-black"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Register for APTICON 2024
          </h2>
          <p className="text-center mb-10">
            Secure your spot at APTICON 2024 by registering today. Find out
            about registration fees, deadlines, and the benefits of attending
            the conference. Join us for an enriching experience that promises to
            transform your understanding of pharmacy education and practice.
          </p>
          <div>
            <h3 className="text-2xl font-bold mb-4">Registration Fees</h3>
            <table className="w-full border-collapse border border-black">
              <thead>
                <tr>
                  <th className="border border-black">Category</th>
                  <th className="border border-black">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black">Students</td>
                  <td className="border border-black">$50</td>
                </tr>
                <tr>
                  <td className="border border-black">Faculty</td>
                  <td className="border border-black">$100</td>
                </tr>
                <tr>
                  <td className="border border-black">
                    Industry Professionals
                  </td>
                  <td className="border border-black">$200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white py-4 text-center">
        <p>&copy; 2024 APTICON. All rights reserved.</p>
      </footer>
    </div>
  );
}
