"use client";

import { useState } from "react";
import Image from "next/image";
import Form from "./Form";
import FormModal from "./FormModal";

const Hero = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <div
        id="home"
        className="relative w-full min-h-screen flex items-center justify-center bg-white"
      >
        <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-12">
          {/* LEFT SIDE — UNTOUCHED */}
          <div className="w-full lg:w-1/2 mt-6 flex flex-col items-center text-center space-y-4">
            <Image
              src="/award.png"
              alt="Award"
              width={500}
              height={250}
            />

            {/* TEXT CONTENT - CENTERED BELOW IMAGES */}
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight uppercase text-slate-900">
              <span className="text-orange-500 font-serif block lg:inline">
                Work in{" "}
                <span className="inline-block relative">Germany with</span>{" "}
                <span className="inline-block relative">VJC OVERSEAS</span>
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed px-2">
              Unlock Your Future with{" "}
              <span className="text-orange-500 font-semibold block lg:inline">
                VJC OVERSEAS
              </span>
              <br />
              Take your career to new heights and explore opportunities in Germany with our expert guidance. Whether you're a skilled professional, recent graduate, or experienced worker, we provide comprehensive support through every step of your Germany Opportunity Card application journey. From eligibility assessment to job placement assistance, VJC Overseas ensures your transition to Germany is seamless and successful.
            </p>

            {/* 🔥 APPLY NOW BUTTON */}
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Apply Now
            </button>
          </div>

          {/* RIGHT SIDE — FORM STAYS */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Form />
          </div>
        </div>
      </div>
      
      {/* 🔥 FIXED: Gradient Divider */}
      <div className="w-full max-w-7xl mx-auto h-1 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700" />

      {/* ✅ FIXED: Removed onSuccess prop */}
      <FormModal open={popupOpen} onClose={() => setPopupOpen(false)}>
        <Form />
      </FormModal>
    </>
  );
};

export default Hero;
