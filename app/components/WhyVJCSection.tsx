"use client";

import React, { useState } from "react";
import FormModal from "./FormModal";
import Form from "./Form";

const VJCOverseas: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section
        id="Vjc"
        className="relative flex flex-col justify-center items-center w-full bg-linear-to-b from-slate-50 via-white to-slate-100 py-8 md:py-10"
      >
        {/* Thin Germany line on top */}
      
        <div className="max-w-5xl mx-auto px-4 text-center pt-4 pb-6">
          {/* Badge */}
          <span className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 rounded-full">
            Germany Opportunity Card Expert
          </span>

          <h2 className="text-[2.1rem] md:text-[3rem] font-extrabold mb-4 uppercase leading-tight tracking-tight">
            <span className="text-slate-900">Why Trust </span>
            <span className="text-orange-500 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              VJC Overseas
            </span>
            <span className="text-slate-900"> for Germany?</span>
          </h2>

          <p className="text-base md:text-lg text-gray-700 mb-6 max-w-3xl mx-auto leading-relaxed">
            The <strong>Germany Opportunity Card</strong> is a points-based system where even a small mistake in documentation leads to rejection. With 15+ years of mastery, VJC Overseas ensures your profile is flawless.
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
            {/* Card 1 */}
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
              {/* Small Germany flag strip on card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-red-600 to-yellow-400" />
              <h3 className="mt-3 font-bold text-slate-900 mb-2">✓ Precision Scoring</h3>
              <p className="text-sm text-gray-600">
                We maximize your points for age, qualification, and experience to guarantee eligibility.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
              {/* Small Germany flag strip on card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-red-600 to-yellow-400" />
              <h3 className="mt-3 font-bold text-slate-900 mb-2">✓ Stress-Free Paperwork</h3>
              <p className="text-sm text-gray-600">
                From ZAB evaluation to bank proofs, we handle the complex German bureaucracy for you.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
              {/* Small Germany flag strip on card */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black via-red-600 to-yellow-400" />
              <h3 className="mt-3 font-bold text-slate-900 mb-2">✓ Job Search Strategy</h3>
              <p className="text-sm text-gray-600">
                We don’t just get you a visa; we help you prepare for the German job market from day one.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <button
              onClick={openModal}
              className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-orange-500 rounded-full hover:bg-orange-600 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span className="relative">Start Your German Journey Today</span>
            </button>
            <p className="text-xs md:text-sm text-gray-500 italic">
              Join 6,000+ successful applicants. Your future in Europe starts here.
            </p>
          </div>
        </div>

        {/* Thin Germany line on bottom */}
      
      </section>

      {/* Modal with Form inside */}
      <FormModal open={isModalOpen} onClose={closeModal}>
        <div className="p-2">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
            Check Your Eligibility
          </h3>
          <Form />
        </div>
      </FormModal>
        <div className="w-full h-1 bg-gradient-to-r from-black via-red-600 to-yellow-400" />
    </>
  );
};

export default VJCOverseas;
