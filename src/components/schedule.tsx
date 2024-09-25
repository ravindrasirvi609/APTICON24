import React from "react";

interface Event {
  time: string;
  event: string;
  location?: string;
  speaker?: string;
  details?: string[];
  tracks?: { track: string; location: string }[];
}

interface Day {
  day: string;
  date: string;
  events: Event[];
}

interface ConferenceSchedule {
  conference: string;
  location?: string;
  schedule: Day[];
}

const ConferenceSchedule: React.FC<{ schedule: ConferenceSchedule }> = ({
  schedule,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-8xl mx-auto">
      <header className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-green">
          Conference Schedule
        </h2>{" "}
      </header>
      {schedule.schedule.map((day, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-2xl font-bold text-darkBrown mb-4">{day.day}</h3>
          <div className="space-y-4">
            {day.events.map((event, eventIndex) => (
              <div key={eventIndex} className="bg-grey rounded-lg p-6">
                <header className="flex items-center justify-between mb-2">
                  <div className="bg-primary text-darkBrown font-bold px-3 py-1 rounded-full">
                    {event.time}
                  </div>
                  <h4 className="text-lg font-bold text-ochre">
                    {event.event}
                  </h4>
                </header>
                <p className="text-black mb-2">Location: {event.location}</p>
                {event.details && (
                  <ul className="list-disc pl-6 text-black space-y-1">
                    {event.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
                {event.tracks && (
                  <div className="mt-4">
                    <h5 className="font-bold text-darkBrown">Tracks:</h5>
                    <ul className="list-disc pl-6 text-black space-y-1">
                      {event.tracks.map((track, trackIndex) => (
                        <li key={trackIndex}>
                          {track.track} - {track.location}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConferenceSchedule;
