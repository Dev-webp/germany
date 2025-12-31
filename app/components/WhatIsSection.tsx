import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

interface RoadmapItem {
  title: string;
}

const EligibilityRequirements: React.FC = () => {
  const roadmap: RoadmapItem[] = [
    {
      title:
        "Passport, which was issued within the last 10 years of the issue date and does not contain less than two blank visa pages. ",
    },
    { title: "Application form, declaration " },
    {
      title:
        "Signed according to Section 54 Residence Act, including any supplementary contact/legal representation. ",
    },
    { title: "2 biometric passport photos. " },
    {
      title:
        "Papers with proof of sufficient financial means for living in Germany . ",
    },
    { title: "Proof of accommodation in Germany " },
    {
      title:
        "Proof of vocational/academic training. degree, diploma, etc., as well as work experience. ",
    },
    { title: "Recognition of ANABIN" },
    { title: "Work experience relevant to qualifications " },
    {
      title:
        "A motivational letter stating the intentions on jobs, intent to learn the German language, job applications, and reasons for staying in Germany ",
    },
    {
      title:
        "Proof of personal status in India (birth certificate, Aadhar card) ",
    },
    {
      title:
        "Curriculum Vitae ,Declaration of retirement in case of applicant above 45 years ",
    },
    { title: "Health insurance cover for their period of stay in Germany." },
  ];

  return (
    <>
      <div className="h-auto lg:h-fit py-6">
        <h2 className="text-[2.5rem] font-semibold uppercase text-center mb-6 text-dark">
          <span className="bg-gradient-to-r from-black via-red-600 to-yellow-400 text-transparent bg-clip-text">
            Germany Opportunity Card
          </span>{" "}
          <span className="text-orange-500">Checklist</span>
        </h2>

        {/* First Section: EQUAL HEIGHT */}
        <div className="max-w-[73rem] mx-auto px-4 lg:flex lg:items-stretch lg:gap-8 gap-6 mb-8">
          <div className="lg:w-1/2 w-full lg:h-[28rem] flex flex-col">
            <ul className="flex-1 space-y-3 py-4">
              {roadmap
                .slice(0, Math.ceil(roadmap.length / 2))
                .map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="text-orange-500 flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-orange-500 text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-justify text-dark leading-relaxed">
                        {item.title}
                      </h3>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full lg:h-[28rem] flex items-center justify-center p-4">
            <Image
              src="/steps.jpg"
              alt="Germany Opportunity Card"
              width={416}
              height={300}
              className="object-cover w-full h-full max-w-md rounded-2xl shadow-2xl transition-transform hover:scale-105"
            />
          </div>
        </div>

        {/* Second Section: EQUAL HEIGHT */}
        <div className="max-w-[73rem] mx-auto px-4 lg:flex lg:flex-row-reverse lg:items-stretch lg:gap-8 gap-6">
          <div className="lg:w-1/2 w-full h-[26rem] flex flex-col">
            <ul className="flex-1 space-y-3 py-4">
              {roadmap
                .slice(Math.ceil(roadmap.length / 2))
                .map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="text-orange-500 flex-shrink-0 mt-1">
                      <FaCheckCircle className="text-orange-500 text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-justify text-dark leading-relaxed">
                        {item.title}
                      </h3>
                    </div>
                  </li>
                ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full h-[26rem] flex items-center justify-center p-4">
            <Image
              src="/steps2.jpg"
              alt="Germany Opportunity Card"
              width={416}
              height={300}
              className="object-cover w-full h-full max-w-md rounded-2xl shadow-2xl transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EligibilityRequirements;
