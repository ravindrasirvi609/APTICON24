"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ScheduleItem {
  title: string;
  speaker: string;
  speakerRole: string;
  speakerImg: string[];
  time: string;
}

const day1Schedule: ScheduleItem[] = [
  {
    title: "Reducing Test Anxiety",
    speaker: "Tom Cruise",
    speakerRole: "CEO of EnvyTheme",
    speakerImg: ["https://via.placeholder.com/50x50"],
    time: "13:00AM - 20:00PM",
  },
  {
    title: "Time Management, Getting A Smart Start, Setting Goals",
    speaker: "Leonardo DiCaprio",
    speakerRole: "USA Inc",
    speakerImg: [
      "https://via.placeholder.com/50x50",
      "https://via.placeholder.com/50x50",
    ],
    time: "13:00AM - 20:00PM",
  },
  {
    title: "Impact Of Mental Health On Academics",
    speaker: "Robert Downey",
    speakerRole: "USA Inc",
    speakerImg: [
      "https://via.placeholder.com/50x50",
      "https://via.placeholder.com/50x50",
    ],
    time: "13:00AM - 20:00PM",
  },
  {
    title: "Athletic Performance Enhancement",
    speaker: "Brad Pitt",
    speakerRole: "USA Inc",
    speakerImg: [
      "https://via.placeholder.com/50x50",
      "https://via.placeholder.com/50x50",
      "https://via.placeholder.com/50x50",
    ],
    time: "13:00AM - 20:00PM",
  },
];

const day2Schedule: ScheduleItem[] = [
  {
    title: "Advanced Pharmacy Practice",
    speaker: "Morgan Freeman",
    speakerRole: "PharmD, EnvyTheme",
    speakerImg: ["https://via.placeholder.com/50x50"],
    time: "10:00AM - 12:00PM",
  },
  {
    title: "Innovations in Drug Delivery",
    speaker: "Emma Watson",
    speakerRole: "PhD, EnvyTheme",
    speakerImg: [
      "https://via.placeholder.com/50x50",
      "https://via.placeholder.com/50x50",
    ],
    time: "01:00PM - 03:00PM",
  },
  {
    title: "Pharmacy Education Reforms",
    speaker: "Daniel Radcliffe",
    speakerRole: "PharmD, EnvyTheme",
    speakerImg: [
      "https://via.placeholder.com/50x50",
      "https://via.placeholder.com/50x50",
    ],
    time: "03:00PM - 05:00PM",
  },
  {
    title: "Clinical Pharmacy and Therapeutics",
    speaker: "Natalie Portman",
    speakerRole: "PhD, EnvyTheme",
    speakerImg: [
      "https://via.placeholder.com/50x50",
      "https://via.placeholder.com/50x50",
      "https://via.placeholder.com/50x50",
    ],
    time: "05:00PM - 07:00PM",
  },
];

const Schedule: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const schedule = selectedDay === 1 ? day1Schedule : day2Schedule;

  return (
    <section id="schedule" className="container mx-auto py-20 text-black">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green">
        Conference Schedule
      </h2>
      <p className="text-center text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed text-darkBrown">
        Stay updated with the detailed schedule of APTICON 2024. Explore the
        timeline of keynote sessions, seminars, workshops, and deliberations
        across various tracks, including Innovations in Pharmacy Education,
        Bridging Academia and Industry, Enhancing Patient Care, Research and
        Development in Pharmacy, and more.
      </p>
      <div className="max-w-7xl mx-auto p-6 bg-ashGrey shadow rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-ochre uppercase font-semibold">Schedule Plan</p>
            <h1 className="text-3xl font-bold text-black">
              Information of <span className="text-ochre">Event</span> Schedules
            </h1>
          </div>
        </div>
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setSelectedDay(1)}
            className={`py-2 px-4 rounded-t-lg ${
              selectedDay === 1
                ? "bg-ochre text-white"
                : "bg-lightGrey text-black"
            }`}
          >
            FIRST DAY <br /> 27 September 2024
          </button>
          <button
            onClick={() => setSelectedDay(2)}
            className={`py-2 px-4 rounded-t-lg ${
              selectedDay === 2
                ? "bg-green text-white"
                : "bg-lightGrey text-black"
            }`}
          >
            SECOND DAY <br /> 28 September 2024
          </button>
        </div>
        <div className="bg-white dark:bg-zinc-800 shadow rounded-lg p-6">
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-4"
              >
                <div>
                  <h2 className="text-xl font-semibold text-black dark:text-zinc-100">
                    {item.title}
                  </h2>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    By{" "}
                    <a href="#" className="text-blue-500">
                      {item.speaker}
                    </a>{" "}
                    {item.speakerRole}
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {item.time}
                  </p>
                </div>
                <div className="flex -space-x-2">
                  {item.speakerImg.map((imgSrc, imgIndex) => (
                    <Image
                      key={imgIndex}
                      src={imgSrc}
                      alt="Speaker"
                      className="rounded-full"
                      height={50}
                      width={50}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
