import React from "react";
import Image from "next/image";
import {
  FaGraduationCap,
  FaLanguage,
  FaUser,
  FaMapMarkerAlt,
  FaUsers,
} from "react-icons/fa";

interface RequirementItem {
  title: string;
  icon: React.ReactNode;
  points: string[];
}

const Requirements: React.FC = () => {
  const roadmap: RequirementItem[] = [
    {
      title: "Education & Work Experience (Up to 7 Points)",
      icon: <FaGraduationCap className="text-orange-500 text-2xl" />,
      points: [
        "4 points for diplomas and qualifications recognized in Germany.",
        "3 points for working in your field for 5+ years (in the last 7 years).",
        "2 points for working in your field for 2+ years (in the last 5 years).",
        "1 extra point for training in high-demand jobs (health, IT, construction, etc.).",
      ],
    },
    {
      title: "Language Skills (Up to 4 Points)",
      icon: <FaLanguage className="text-orange-500 text-2xl" />,
      points: [
        "3 points for German level B2 or higher.",
        "2 points for German level B1, 1 point for German level A1–A2.",
        "1 extra point for English level C1 or higher.",
      ],
    },
    {
      title: "Age (Up to 2 Points)",
      icon: <FaUser className="text-orange-500 text-2xl" />,
      points: ["2 points if you are under 35.", "1 point if you are between 35 and 40."],
    },
    {
      title: "Ties to Germany (Up to 1 Point)",
      icon: <FaMapMarkerAlt className="text-orange-500 text-2xl" />,
      points: [
        "1 point if you have lived in Germany for at least 6 months in the last 5 years.",
      ],
    },
    {
      title: "Spouse (Up to 1 Point)",
      icon: <FaUsers className="text-orange-500 text-2xl" />,
      points: ["1 point if your spouse is also eligible for the Opportunity Card."],
    },
  ];

  const topBoxes = roadmap.slice(0, 3); // 3 boxes on the right of image
  const bottomBoxes = roadmap.slice(3); // 2 boxes below image

  return (
    <>
      <div className="w-full">
        <h2 className="text-[2.5rem] font-semibold mt-6 uppercase text-center mb-2 text-dark">
          <span className="bg-gradient-to-r from-black via-red-600 to-yellow-400 text-transparent bg-clip-text">
            Germany Opportunity Card
          </span>{" "}
          <span className="text-orange-500">Requirements</span>
        </h2>
        <p className="text-center font-medium text-[1rem] text-gray-700 mb-6">
          To get the Opportunity Card, you need to score at least{" "}
          <span className="text-orange-500 font-semibold">6 points</span>.
        </p>

        {/* Top layout: Image left, 3 boxes right */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-4">
          {/* Left Image */}
          <div className="lg:w-1/2 w-full flex justify-center">
            <Image
              src="/germany opportunity card requirements.webp"
              alt="Germany Opportunity Card Requirements"
              width={480}
              height={480}
              className="object-cover w-full max-w-[460px] h-[26rem] md:h-[30rem] rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
            />
          </div>

          {/* 3 boxes on the right */}
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            {topBoxes.map((item, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 rounded-xl p-4 shadow-sm border border-orange-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-500">
                    {item.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                </div>
                <ul className="pl-10 space-y-1 text-sm text-gray-700 list-disc">
                  {item.points.map((point, subIndex) => (
                    <li key={subIndex}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: 2 boxes below image, side by side */}
        <div className="max-w-7xl mx-auto mt-6 px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {bottomBoxes.map((item, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 rounded-xl p-4 shadow-sm border border-orange-100"
            >
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-500">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
              </div>
              <ul className="pl-10 space-y-1 text-sm text-gray-700 list-disc">
                {item.points.map((point, subIndex) => (
                  <li key={subIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
       <div className="w-full mt-4 max-w-7xl mx-auto h-1 bg-linear-to-r from-black via-red-600 to-yellow-400" />

    </>
  );
};

export default Requirements;
