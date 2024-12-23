import Image from "next/image";
import React from "react";

const NationalBody = () => {
  const president = {
    id: 1,
    name: "Dr. Milind Janrao Umekar",
    designation: "Principal & Professor",
    college: "Smt. Kishoritai Bhoyar College of Pharmacy",
    image: "https://aptiindia.org/images/committee/milind-new.png",
    APTI_post: "President",
  };

  const vicePresidents = [
    {
      id: 2,
      name: "Dr. Mihir Kumar Kar",
      designation: "Assistant Professor",
      college: "Sri Jayadev College of Pharmaceutical Sciences",
      image: "https://aptiindia.org/images/committee/mihir.png",
      APTI_post: "Vice President Eastern Region",
    },
    {
      id: 3,
      name: "Dr. Sohan Satyanarayan Chitlange",
      designation: "Principal",
      college:
        "Dr. D. Y. Patil Institute Of Pharmaceutical Sciences And Research",
      image: "https://aptiindia.org/images/committee/sohan.png",
      APTI_post: "Vice President Western Region",
    },
    {
      id: 4,
      name: "Dr. Deependra Singh",
      designation: "Principal",
      college:
        "University Institute Of Pharmacy, Pt.Ravishankar Shukla University",
      image: "https://aptiindia.org/images/committee/deependra.png",
      APTI_post: "Vice President Central Region",
    },
    {
      id: 5,
      name: "Dr. Rohit Dutt",
      designation: "Principal",
      college: "GMN College, Ambala Cantt",
      image: "https://aptiindia.org/images/committee/rohit.png",
      APTI_post: "Vice President Northern Region",
    },
    {
      id: 6,
      name: "Dr. Muttavarapu Venkata Ramana",
      designation: "Associate Professor",
      college: "Azad College Of Pharmacy",
      image: "https://aptiindia.org/images/committee/muttavarapu.png",
      APTI_post: "Vice President Southern Region",
    },
  ];

  const otherMembers = [
    {
      id: 7,
      name: "Dr. Raman Dang",
      designation: "Principal",
      college: "Krupanidhi College of Pharmacy",
      image: "https://aptiindia.org/images/principal.png",
      APTI_post: "Secretary",
    },
    {
      id: 8,
      name: "Dr. Anil M Pethe",
      designation: "Professor & Dean",
      college: "Datta Meghe College of Pharmacy",
      image: "https://aptiindia.org/images/committee/anilpethe.png",
      APTI_post: "Associate Secretary",
    },
    {
      id: 9,
      name: "Dr. Raj Shekharan",
      designation: "Principal",
      college: "IKON College Of Pharmacy",
      image: "https://aptiindia.org/images/committee/Dr_S_Rajasekaran.jpg",
      APTI_post: "Executive Secretary",
    },
    {
      id: 10,
      name: "Dr. V Murugan",
      designation: "Principal",
      college: "Dayananda Sagar College Of Pharmacy",
      image: "https://aptiindia.org/images/committee/Dr_V_Murugan.jpg",
      APTI_post: "Treasurer",
    },
    {
      id: 11,
      name: "Dr. Pravin Digambar Chaudhari",
      designation: "Principal",
      college: "Modern College of Pharmacy",
      image:
        "https://aptiindia.org/images/committee/PRAVIN_DIGAMBAR_CHAUDHARI.jpg",
      APTI_post: "Immediate Past President",
    },
    {
      id: 12,
      name: "Dr. Niraj Vyawahare",
      designation: "Principal and Professor",
      college: "Dr D Y Patil College of Pharmacy, Akurdi, Pune",
      image: "https://aptiindia.org/images/committee/central/niraj.png",
      APTI_post: "International Coordinator",
    },
    {
      id: 13,
      name: "Dr. Vandana Patravale",
      designation: "Professor",
      college: "Institute of Chemical Technology, Mumbai, Maharashtra",
      image: "https://aptiindia.org/images/committee/central/vandana.png",
      APTI_post: "National Convenor (Women Forum)",
    },
    {
      id: 14,
      name: "Dr. Md Salahuddin",
      designation: "Principal",
      college: "Al-Ameen College of Pharmacy, Banglore, Karnataka",
      image: "https://aptiindia.org/images/committee/central/mdsala.png",
      APTI_post: "National Coordination, Teachers Training Institute",
    },
  ];

  const jointSecretary = [
    {
      id: 15,
      name: "Dr. Laxmidhar Maharana",
      designation: "Professor",
      college:
        "School of Pharmaceutical Sciences, Siksha ‘O’ Anusandhan University,Bhubaneswar",
      image: "https://aptiindia.org/images/committee/MAHARANA.png",
      APTI_post: "Joint Sectretary (East)",
    },
    {
      id: 16,
      name: "Dr. Sanjay Surana",
      designation: "Principal and Professor",
      college:
        "R.C.Patel Institute of Pharmaceutical Education and research, Shirpur, Maharashtra.",
      image: "https://aptiindia.org/images/committee/central/sanjay.png",
      APTI_post: "Joint Sectretary (West)",
    },
    {
      id: 17,
      name: "Dr. Sanjay J. Daharwal",
      designation: "",
      college:
        "University Institute of Pharmacy, Pt. Ravishankar Shukla University, Raipur (C.G.)",
      image: "https://aptiindia.org/images/committee/central/daharwal.png",
      APTI_post: "Joint Sectretary (Central)",
    },
    {
      id: 18,
      name: "Dr. Shaista Omer",
      designation: "Principal",
      college: "MMJG College of Pharmacy, Ijari, Lakmapur, Haveri ,581110",
      image: "https://aptiindia.org/images/committee/central/omer.png",
      APTI_post: "Joint Sectretary (North)",
    },
    {
      id: 19,
      name: "Dr. Akash Ved",
      designation: "Associate Dean Pharmacy, Director",
      college:
        "Dr A P J Abdul Kalam Technical University, Goel Institute of Pharmaceutical Sciences, Lucknow.",
      image: "https://aptiindia.org/images/committee/central/akash.png",
      APTI_post: "Joint Sectretary (South)",
    },
  ];

  return (
    <div className="px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-darkBrown">
          APTI National Body
        </h1>
        <p className="text-gray-500 mt-2">
          Meet our esteemed members who are contributing to the advancement of
          pharmacy education and research.
        </p>
      </div>
      <div className="flex justify-center mb-8">
        <div className="p-4 bg-white shadow-md rounded-lg text-center">
          <p className="text-green font-semibold">{president.APTI_post}</p>
          <Image
            src={president.image}
            alt={president.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
            width={128}
            height={128}
          />
          <h3 className="text-lg font-semibold text-darkBrown">
            {president.name}
          </h3>
          <p className="text-gray-500 mb-2">{president.designation}</p>
          <p className="text-gray-500">{president.college}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {vicePresidents.map((member) => (
          <div
            key={member.id}
            className="p-4 bg-white shadow-md rounded-lg text-center"
          >
            <p className="text-green font-semibold">{member.APTI_post}</p>
            <Image
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
              width={128}
              height={128}
            />
            <h3 className="text-lg font-semibold text-darkBrown">
              {member.name}
            </h3>
            <p className="text-gray-500 mb-2">{member.designation}</p>
            <p className="text-gray-500">{member.college}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {otherMembers.map((member) => (
          <div
            key={member.id}
            className="p-4 bg-white shadow-md rounded-lg text-center"
          >
            <p className="text-green font-semibold">{member.APTI_post}</p>
            <Image
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
              width={128}
              height={128}
            />
            <h3 className="text-lg font-semibold text-darkBrown">
              {member.name}
            </h3>
            <p className="text-gray-500 mb-2">{member.designation}</p>
            <p className="text-gray-500">{member.college}</p>
          </div>
        ))}
        {jointSecretary.map((member) => (
          <div
            key={member.id}
            className="p-4 bg-white shadow-md rounded-lg text-center"
          >
            <p className="text-green font-semibold">{member.APTI_post}</p>
            <Image
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
              width={128}
              height={128}
            />
            <h3 className="text-lg font-semibold text-darkBrown">
              {member.name}
            </h3>
            <p className="text-gray-500 mb-2">{member.designation}</p>
            <p className="text-gray-500">{member.college}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NationalBody;
