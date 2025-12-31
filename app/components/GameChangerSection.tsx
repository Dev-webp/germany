"use client";

import React from "react";

interface BenefitItem {
  id: string;
  title: string;
  text: string;
}

export const benefits: BenefitItem[] = [
  {
    id: "0",
    title: "Check Eligibility:",
    text: "Make sure that you qualify (6 points) with respect to educational background, work experience and language skills to meet Germany Opportunity Card eligibility criteria.",
  },
  {
    id: "1",
    title: "Gather Documents:",
    text: "Get your qualification documents, language certificates, work experience details and proof of financial support.",
  },
  {
    id: "2",
    title: "Complete Application:",
    text: "Fill in the application form online or at the German embassy. You will need to provide personal and professional information.",
  },
  {
    id: "3",
    title: "Submit the Application:",
    text: "Submit your application at the German Embassy/Consulate or Foreigners’ Registration Office, if you are already in Germany. Check the expected processing time to anticipate any delays.",
  },
  {
    id: "4",
    title: "Wait for Processing:",
    text: "Your application will be processed. This can take a couple of weeks, so be prepared for your biometrics appointment.",
  },
  {
    id: "5",
    title: "Receive Opportunity Card:",
    text: "When successful, you will obtain your Opportunity Card which enables you to stay in Germany for one year to look for work.",
  },
  {
    id: "6",
    title: "Find Employment:",
    text: "Use your time in Germany to find a job. If successful, you can convert your Opportunity Card visa into a work visa or EU Blue Card.",
  },
  {
    id: "7",
    title: "Apply for Permanent Residency:",
    text: "Once you have secured full-time work, you can either transfer to a long-term work permit or apply for permanent residency.",
  },
];

const StepByStepGuide: React.FC = () => {
  return (
    <div
      className="w-full bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/germany-opportunity-card-apply.jpg')",
      }}
    >
      {/* Slight dark overlay for contrast */}
      <div className="w-full h-full bg-black/20">
        <section className="max-w-6xl mx-auto px-3 md:px-6 py-6">
          <h2 className="text-[2.1rem] md:text-[2.4rem] font-bold text-center uppercase mb-1">
            <span className="text-orange-500 md:text-[2.6rem]">
              Step-By-Step Guide
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-white to-yellow-300 text-transparent bg-clip-text">
              to Applying for Germany Opportunity Card
            </span>
          </h2>
          <p className="text-center text-sm md:text-base text-gray-100 mb-3 max-w-3xl mx-auto">
            Follow these simple steps from checking your eligibility to securing
            permanent residency in Germany.
          </p>

          {/* Wider, light glass card with all steps */}
          <div className="bg-white/85 rounded-2xl shadow-xl border border-orange-100 px-4 md:px-8 py-4 md:py-5">
            {benefits.map((item, index) => (
              <div key={item.id}>
                <div className="flex items-start gap-3 md:gap-5">
                  <div className="flex-shrink-0 w-10 h-10 md:w-11 md:h-11 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm md:text-base">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm md:text-lg font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-[0.95rem] lg:text-base text-gray-800 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
                {index < benefits.length - 1 && (
                  <div className="my-2 md:my-2 flex items-center">
                    <div className="ml-5 md:ml-6 h-4 md:h-5 w-px bg-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default StepByStepGuide;
