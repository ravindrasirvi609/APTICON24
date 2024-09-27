import ConferenceSchedule from "@/components/schedule";

export const scheduleData: ConferenceSchedule = {
  conference: "Program Schedule",
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
          time: "12:30 PM - 1:00 PM",
          event: "Plenary Session I - KLE Oration Lecture",
          topic: "Pharmacy Education for the Pharmaceutical Industry",
          location: "Convocation Hall, Utkal University",
          speaker:
            "Prof. P. R. Vavia, Director, Institute of Chemical Technology, Bhubaneswar",
          chair: "Prof. Milind J. Umekar, President, APTI",
          coChair:
            "Dr. Sohan S. Chitlange, Vice President, APTI Western Region",
        },
        {
          time: "1:00 PM - 2:30 PM",
          event: "Lunch cum Networking",
          location: "Food Court",
        },
        {
          time: "2:30 PM - 3:00 PM",
          event: "Plenary Session II - Dr. G. Bhagwant Memorial Lecture",
          topic:
            "Development of a ML based method to identify infection status in whole virion based vaccinated individuals",
          location: "Convocation Hall, Utkal University",
          speaker: "Dr. Debasis Dash, Director, DBT-ILS, Bhubaneswar",
          chair: "Dr. Deependra Singh, Vice President, APTI Central Region",
          coChair: "Dr. Rohit Dutt, Vice President, APTI Northern Region",
        },
        {
          time: "3:00 PM - 3:30 PM",
          event: "Plenary Session III - M. L. Schroff Memorial Lecture",
          location: "Convocation Hall, Utkal University",
          speaker:
            "Prof. Pulok K. Mukherjee, Director, IBSD, Govt. of India, Imphal, Manipur",
          chair: "Dr. Raman Dang, Secretary, APTI",
          coChair: "Dr. Anil M. Pethe, Associate Secretary, APTI",
        },
        {
          time: "3:30 PM - 4:00 PM",
          event: "Plenary Session IV - Prof. G. P. Srivastava Memorial Lecture",
          location: "Convocation Hall, Utkal University",
          topic:
            "Indian Pharma Industry & Academia Integration -- Driving Growth through Collaboration",
          speaker:
            "Dr. Parag Das, Vice President Technical, Oman Pharmaceutical Products Co. LLC, Sultanate of Oman",
          chair: "Dr. M. Venkata Ramana, Vice President Southern Region",
          coChair:
            "Dr. Sachin W. Lohe, HOD, Anurag College of Pharmacy, Bhandara",
        },
        {
          time: "4:00 PM - 4:30 PM",
          event: "Plenary Session V - JSS Oration Lecture",
          location: "Convocation Hall",
          speaker:
            "Dr. Deependra Singh, Principal, UIP, Pt. Ravishankar Shukla University, Raipur",
          chair:
            "Prof PN Murthy, Director, Royal College of Pharmacy and Health Sciences",
          coChair: "Dr. Somzeet Panda, President, APTI Odisha State Branch",
        },
        {
          time: "4:30 PM - 5:00 PM",
          event:
            "Ambikanandan Mishra Memorial Lecture in Pharmaceutical Technology",
          location: "Convocation Hall, Utkal University",
          speaker:
            "Muralidhara Anandamurthy, JMP Statistical Discovery LLC, NC, USA",
          chair:
            "Dr. Arnab Samanta, Principal, Netaji Subhash Chandra Bose IOP, WB",
          coChair: "Dr. Nityananda Mondal, President, West Bengal State Branch",
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
              time: "2:00 PM - 2:45 PM",
              track: "Poster Track 1: PCTC501 to PCTC550 & PHCG301 to PHCG350",
            },
            {
              time: "2:45 PM - 3:30 PM",
              track: "Poster Track 2: PCTC551 to PCTC600 & PHCH151 to PHCH200",
            },
            {
              time: "3:30 PM - 4:15 PM",
              track: "Poster Track 3: PCTC601 to PCTC650 & PHCL801 to PHCL850",
            },
            {
              time: "4:15 PM - 5:00 PM",
              track: "Poster Track 4: PCTC651 to PCTC700 & PHCL851 to PHCL900",
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
          location: "Convocation Hall, Utkal University",
          topic:
            "Technological Advancements revolutionizing healthcare: Is our Educational Ecosystem Ready ?",
          speaker: "Prof. Vandana Patravale, Professor, ICT, Mumbai",
          chair:
            "Dr. Md. Salahhudin, National Coordination, Teachers Training Institute, APTI",
          coChair: "Dr. Bhargab Jyoti Sahariah, President, Assam State Branch",
        },
        {
          time: "10:45 AM - 11:25 AM",
          event: "Plenary Session VII",
          location: "Convocation Hall, Utkal University",
          topic:
            "Practical Application of AI tools - Ex Pharm & Ex Physio Software",
          title:
            "Practical Application of AI tools - Ex Pharm & Ex Physio Software",
          speaker:
            "Prof. Dharmendra Ahuja, Principal Mentor, Bureau For Health & Education Status Upliftment (India)",
          chair:
            "Dr. Susanta Kr. Panda, Principal, Royal College of Pharmacy, Odisha",
          coChair:
            "Dr. Shambaditya Goswami, Vice President, Bihar State Branch",
        },
        {
          time: "11:30 AM - 12:00 PM",
          event: "Plenary Session VIII",
          location: "Convocation Hall, Utkal University",
          speaker: "C.S. Mujeebudun",
          chair: "Dr. Rajat Ghosh, President, Tripura State Branch",
          coChair: "Dr. Sudipta Das, Vice President, West Bengal State Branch",
        },
        {
          time: "12:00 PM - 12:30 PM",
          event: "Plenary Session IX",
          location: "Convocation Hall, Utkal University",
          speaker: "elite & GDC",
          chair: "Dr. Guru Dutta Pattnaik, EC Member Odisha State Branch",
          coChair:
            "Dr. Subhashree Sahoo, Convenor, Women Forums, Odisha State Branch",
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
          location: "Scientific Poster Hall",
          tracks: [
            {
              time: "10:00 AM - 10:45 AM",
              track: "Poster Track 5: PCTC701 to PCTC750 & PHCL901 to PHCL950",
            },
            {
              time: "10:45 AM - 11:30 AM",
              track: "Poster Track 6: PCTC751 to PCTC800 & PHCH201 to PHCH250",
            },
            {
              time: "11:30 AM - 12:15 PM",
              track:
                "Poster Track 7: PCTC801 to PCTC811 & PHCG351 to PHCG400 & PHCH251 to PHCH285",
            },
            {
              time: "12:15 PM - 1:00 PM",
              track: "Poster Track 8: PHCG401 to PHCG454 & PHCL951 to PHCL989",
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
