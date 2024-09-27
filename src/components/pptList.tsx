"use client";

import Head from "next/head";

// Define a type for the track list
interface TrackList {
  name: string;
  link: string;
}

export default function PPtlist() {
  // Track lists with links
  const trackLists: TrackList[] = [
    {
      name: "Track List 1",
      link: "https://drive.google.com/drive/folders/1APJ059rK8NPcAqQpV7b5a8bBLtRKG6vT?usp=sharing",
    },
    {
      name: "Track List 2",
      link: "https://drive.google.com/drive/folders/18WyTuZSfTYsRJXBvvfMYJ8HD2L-yvV7p?usp=sharing",
    },
    {
      name: "Track List 3",
      link: "https://drive.google.com/drive/folders/1deyJBgbTGsARlEvm2b1pYAyygt4Pt_cn?usp=sharing",
    },
    {
      name: "Track List 4",
      link: "https://drive.google.com/drive/folders/1M5JEimfvRxrgU8z7ruUq7A0uWKJKNu5K?usp=sharing",
    },
    {
      name: "Track List 5",
      link: "https://drive.google.com/drive/folders/1UIdafUnFRyLLrU5u-5taSd_8_VXWxJgL?usp=sharing",
    },
  ];

  return (
    <div>
      <Head>
        <title>Track List Presentation</title>
        <meta
          name="description"
          content="A track list presentation with Next.js and Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="bg-green p-4">
        <div className="container mx-auto">
          <h1 className="text-white text-2xl font-bold">
            Track List Presentation
          </h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trackLists.map((track, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-bold mb-2">{track.name}</h2>
              <a
                href={track.link}
                target="_blank"
                className="text-blue-500 hover:underline"
                rel="noopener noreferrer"
              >
                Open Track List
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
