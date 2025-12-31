"use client";

import { useEffect, useState } from "react";

export default function TestimonialSection() {
  const [successCount, setSuccessCount] = useState(1);
  const [yearsCount, setYearsCount] = useState(1);

  useEffect(() => {
    const successInterval = setInterval(() => {
      setSuccessCount((prev) => {
        if (prev >= 6000) {
          clearInterval(successInterval);
          return 6000;
        }
        return prev + 50;
      });
    }, 150);

    const yearsInterval = setInterval(() => {
      setYearsCount((prev) => {
        if (prev >= 16) {
          clearInterval(yearsInterval);
          return 16;
        }
        return prev + 1;
      });
    }, 250);

    return () => {
      clearInterval(successInterval);
      clearInterval(yearsInterval);
    };
  }, []);

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-0.5 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* TOP HEADING */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            {successCount.toLocaleString()}+ Success Stories
          </h2>
          <p className="mt-2 text-slate-600 text-lg">
            Trusted Germany Opportunity Card Experts for{" "}
            <span className="font-semibold text-orange-600">
              {yearsCount}+ Years
            </span>
          </p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1 */}
          <div className="group rounded-2xl border border-blue-900 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "VJC Overseas made the Germany Opportunity Card process very clear.
              From eligibility check to documentation, everything was smooth.
              I am now working in Germany with confidence."
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Anjali S.</p>
              <p className="text-sm text-slate-500">Software Developer</p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "The Germany Opportunity Card felt complicated at first, but VJC
              Overseas explained everything step-by-step. Their guidance helped
              me secure job interviews faster."
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Rohit K.</p>
              <p className="text-sm text-slate-500">Mechanical Engineer</p>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "Professional, transparent, and reliable. VJC Overseas helped me
              understand how the Opportunity Card opens doors to Germany without
              a job offer. Highly recommended."
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Suresh M.</p>
              <p className="text-sm text-slate-500">IT Support Specialist</p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "Outstanding service! VJC Overseas handled my entire Germany visa
              application with precision. Got my Opportunity Card approved in
              record time and now loving my new job in Berlin."
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Priya R.</p>
              <p className="text-sm text-slate-500">Data Analyst</p>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "VJC team are true experts. They guided me through every step of
              the Opportunity Card process and even helped with job search
              strategies. Now settled in Munich with a great company!"
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Arjun P.</p>
              <p className="text-sm text-slate-500">DevOps Engineer</p>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="group rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-orange-500 transition-all duration-300 hover:bg-gradient-to-br hover:from-orange-50 hover:to-white">
            <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
              "Exceptional consultancy! VJC Overseas made my dream of working
              in Germany a reality. Their personalized approach and constant
              support made all the difference."
            </p>
            <div className="mt-4 border-t pt-4">
              {renderStars(5)}
              <p className="font-semibold text-slate-900">Neha G.</p>
              <p className="text-sm text-slate-500">Healthcare Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
