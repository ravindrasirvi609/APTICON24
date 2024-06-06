"use client";
import React, { useState, useEffect } from "react";

const calculateTimeLeft = () => {
  const eventDate = new Date("2024-09-27T00:00:00").getTime(); // Set your event date here
  const currentTime = new Date().getTime();
  const difference = eventDate - currentTime;

  let timeLeft: {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  } = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Timestamps: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }>({});

  useEffect(() => {
    // Calculate time left only on the client side
    const calculateAndSetTimeLeft = () => {
      setTimeLeft(calculateTimeLeft());
    };

    calculateAndSetTimeLeft(); // Initial call to set the state
    const timer = setInterval(calculateAndSetTimeLeft, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  return (
    <section id="about" className="container py-2 px-6">
      <div className="flex justify-center items-center text-center p-4 rounded-lg">
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="flex flex-col items-center m-2 bg-white rounded-lg p-4">
            <span className="text-6xl font-bold text-rose-500">
              {timeLeft.days !== undefined ? timeLeft.days : "0"}
            </span>
            <span className="text-black tracking-widest">DAYS</span>
          </div>
          <div className="flex flex-col items-center m-2 bg-white rounded-lg p-4">
            <span className="text-6xl font-bold text-sky-500">
              {timeLeft.hours !== undefined ? timeLeft.hours : "0"}
            </span>
            <span className="text-black tracking-widest">HOURS</span>
          </div>
          <div className="flex flex-col items-center m-2 bg-white rounded-lg p-4">
            <span className="text-6xl font-bold text-lightBrown">
              {timeLeft.minutes !== undefined ? timeLeft.minutes : "0"}
            </span>
            <span className="text-black tracking-widest">MINUTES</span>
          </div>
          <div className="flex flex-col items-center m-2 bg-white rounded-lg p-4">
            <span className="text-6xl font-bold text-darkBrown">
              {timeLeft.seconds !== undefined ? timeLeft.seconds : "0"}
            </span>
            <span className="text-black tracking-widest">SECONDS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timestamps;
