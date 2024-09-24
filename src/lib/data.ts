import ConferenceSchedule from "@/components/schedule";

export const scheduleData: ConferenceSchedule = {
  conference: "APTICON 2024",
  location: "Utkal University, Bhubaneswar",
  schedule: [
    {
      day: "Friday",
      date: "27 September 2024",
      events: [
        {
          time: "8:00 AM onwards",
          event: "Registration",
          location: "Registration Counters",
        },
        {
          time: "8:00 AM - 9:30 AM",
          event: "Breakfast",
          location: "Food Court",
        },
        {
          time: "9:30 AM",
          event: "Inauguration Ceremony",
          location: "Convocation Hall, Utkal University",
          details: [
            "Welcome of Guests",
            "Lighting of the Lamp",
            "Welcome Speech by LOC Chairman",
            "Organization Report by Organizing Secretary",
            "Guest of Honor Address",
            "Presidential Address by APTI President",
            "Chief Guest Address",
            "APTI Awards Ceremony",
            "Release of Souvenir/APTI Journals",
            "Vote of Thanks",
          ],
        },
        {
          time: "12:00 PM - 12:40 PM",
          event: "Plenary Session I - KLE Oration Lecture",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "1:00 PM - 2:30 PM",
          event: "Lunch cum Networking",
          location: "Food Court",
        },
        {
          time: "2:00 PM - 2:40 PM",
          event: "Plenary Session II - Dr. G. Bhagwant Memorial Lecture",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "2:45 PM - 3:25 PM",
          event: "Plenary Session III - M. L. Schroff Memorial Lecture",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "3:30 PM - 4:10 PM",
          event: "Plenary Session IV - Prof. G. P. Srivastava Memorial Lecture",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "4:15 PM - 4:55 PM",
          event: "Plenary Session V - JSS Oration Lecture",
          location: "Convocation Hall",
        },
        {
          time: "5:00 PM - 5:30 PM",
          event:
            "Ambikanandan Mishra Memorial Lecture in Pharmaceutical Technology",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "2:00 PM - 4:00 PM",
          event: "Oral Presentations (Parallel Tracks)",
          tracks: [
            {
              track: "Track 1: OCH111 to OCH126",
              location: "Oral Gallery 1",
            },
            {
              track: "Track 2: OCG151 to OCG163",
              location: "Oral Gallery 2",
            },
          ],
        },
        {
          time: "2:00 PM - 5:00 PM",
          event: "Poster Presentations (Parallel Sessions)",
          location: "Scientific Poster Hall",
          tracks: [
            {
              track: "Poster Track 1: PCTC501 to PCTC550 & PHCG301 to PHCG350",
              location: "Scientific Poster Hall",
            },
            {
              track: "Poster Track 2: PCTC551 to PCTC600 & PHCH151 to PHCH200",
              location: "Scientific Poster Hall",
            },
            {
              track: "Poster Track 3: PCTC601 to PCTC650 & PHCL801 to PHCL850",
              location: "Scientific Poster Hall",
            },
            {
              track: "Poster Track 4: PCTC651 to PCTC700 & PHCL851 to PHCL900",
              location: "Scientific Poster Hall",
            },
          ],
        },
        {
          time: "6:00 PM onwards",
          event: "Cultural Program",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "7:00 PM onwards",
          event: "Dinner cum Networking",
          location: "Food Court",
        },
      ],
    },
    {
      day: "Saturday",
      date: "28 September 2024",
      events: [
        {
          time: "8:00 AM - 9:30 AM",
          event: "Breakfast",
          location: "Food Court",
        },
        {
          time: "10:00 AM",
          event: "Plenary Sessions Begin",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "10:00 AM - 10:40 AM",
          event: "Plenary Session VI - 54th IPC Sponsored Lecture",
          speaker:
            "Muralidhara Anandamurthy, JMP Statistical Discovery LLC, NC, USA",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "10:45 AM - 11:25 AM",
          event: "Plenary Session VII",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "11:30 AM - 12:00 PM",
          event: "Plenary Session VIII",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "12:00 PM - 12:30 PM",
          event: "Plenary Session IX",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "10:00 AM - 12:00 PM",
          event: "Oral Presentations (Parallel Tracks)",
          tracks: [
            {
              track: "Track 3: OCL121 to OCL141",
              location: "Oral Gallery 1",
            },
            {
              track: "Track 4: OTC171 to OTC183",
              location: "Oral Gallery 2",
            },
            {
              track: "Track 5: OTC184 to OTC195",
              location: "Oral MKG Hall",
            },
          ],
        },
        {
          time: "10:00 AM - 1:00 PM",
          event: "Poster Presentations (Parallel Tracks)",
          tracks: [
            {
              track: "Poster Track 5: PHTC701 to PHTC750 & PHCL901 to PHCL950",
              location: "Scientific Poster Hall",
            },
            {
              track: "Poster Track 6: PCTC751 to PCTC800 & PHCH201 to PHCH250",
              location: "Scientific Poster Hall",
            },
            {
              track:
                "Poster Track 7: PCTC801 to PCTC811 & PHCG351 to PHCG400 & PHCH251 to PHCH285",
              location: "Scientific Poster Hall",
            },
            {
              track: "Poster Track 8: PHCG401 to PHCG454 & PHCL951 to PHCL989",
              location: "Scientific Poster Hall",
            },
          ],
        },
        {
          time: "12:30 PM - 1:15 PM",
          event: "APTI AGM",
          location: "Convocation Hall, Utkal University",
        },
        {
          time: "1:15 PM - 2:00 PM",
          event: "Valedictory Function",
          location: "Convocation Hall, Utkal University",
          details: [
            "Welcome of Guests & APTI Core Team",
            "Speech by LOC Chairman",
            "Chief Guest Address",
            "Guest of Honor Address",
            "Release of APTI Journals and Newsletters",
            "Best Poster Award Distribution",
            "Feedback from Participants",
            "Concluding Report by Organizing Secretary",
            "Vote of Thanks",
          ],
        },
        {
          time: "2:00 PM",
          event: "Lunch and Depart",
          location: "Food Court",
        },
      ],
    },
  ],
};
