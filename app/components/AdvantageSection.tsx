"use client";

import React from "react";
import {
  FaFastForward,
  FaFileAlt,
  FaSuitcase,
  FaBriefcase,
  FaHome,
  FaUserTie,
  FaClipboardList,
  FaPenFancy,
  FaLanguage,
} from "react-icons/fa";
import { motion } from "framer-motion";

interface Service {
  id: string;
  title: string;
  icon: React.ReactNode;
  step: number;
}

export const services: Service[] = [
  {
    id: "0",
    step: 1,
    title: "Priority Processing for Quick Track Application",
    icon: <FaFastForward className="text-orange-500 text-3xl" />,
  },
  {
    id: "1",
    step: 2,
    title: "Resume Preparation by German Standards",
    icon: <FaClipboardList className="text-orange-500 text-3xl" />,
  },
  {
    id: "2",
    step: 3,
    title: "Job Posting and Applications",
    icon: <FaBriefcase className="text-orange-500 text-3xl" />,
  },
  {
    id: "3",
    step: 4,
    title: "Post Landing Services for Easy Settlement",
    icon: <FaHome className="text-orange-500 text-3xl" />,
  },
  {
    id: "4",
    step: 5,
    title: "General Relocation Assistance",
    icon: <FaSuitcase className="text-orange-500 text-3xl" />,
  },
  {
    id: "5",
    step: 6,
    title: "Case Officer of Special Expertise",
    icon: <FaUserTie className="text-orange-500 text-3xl" />,
  },
  {
    id: "6",
    step: 7,
    title: "Comprehensive Documentation Support",
    icon: <FaFileAlt className="text-orange-500 text-3xl" />,
  },
  {
    id: "7",
    step: 8,
    title: "Writing Motivational Letter",
    icon: <FaPenFancy className="text-orange-500 text-3xl" />,
  },
  {
    id: "8",
    step: 9,
    title: "Language Training for Better Opportunities",
    icon: <FaLanguage className="text-orange-500 text-3xl" />,
  },
];

// ✅ PERFECTLY TYPE-SAFE for Next.js 16.1.1 + Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.42, 0, 0.58, 1], // ✅ Custom easeInOut cubic-bezier - TYPE SAFE!
    },
  },
} as const;

const ServicesComponent: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50/50 to-white/80">
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.5rem] font-bold uppercase mb-6 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 bg-clip-text text-transparent leading-tight"
            variants={cardVariants}
          >
            <span className="block sm:inline">Services Provided By</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] text-slate-900 mt-2">
              VJC Overseas Immigration Consultancy
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed px-4"
            variants={cardVariants}
          >
            With streamlined processes and dedicated guidance, these{" "}
            <span className="text-orange-500 font-bold">step-by-step</span>{" "}
            services help you move to Germany with clarity and confidence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          variants={containerVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative bg-white/90 backdrop-blur-xl p-8 lg:p-10 rounded-3xl shadow-lg border border-orange-100/50 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-3 hover:border-orange-400/70 transition-all duration-500 overflow-hidden hover:bg-white"
              whileHover={{ scale: 1.02 }}
            >
              {/* Step Badge */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black shadow-xl border-4 border-white/50">
                {service.step}
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-white/50 to-orange-100/60 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none rounded-3xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-100 to-orange-200 text-orange-600 mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 mx-auto">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4 text-center leading-tight group-hover:text-orange-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base lg:text-lg text-slate-600 text-center leading-relaxed opacity-90">
                  This step focuses on{" "}
                  <span className="text-orange-500 font-semibold">support</span>{" "}
                  tailored to your Germany journey.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesComponent;
