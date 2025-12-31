import React from 'react';
import Image from 'next/image';
import { FaRocket, FaHome, FaDollarSign, FaClipboardCheck, FaHandshake, FaShieldAlt } from 'react-icons/fa';

interface WhyItem {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const Why: React.FC = () => {
  const roadmap: WhyItem[] = [
    {
      title: "Fast Entry into Germany",
      icon: <FaRocket className="text-orange-500 text-3xl" />,
      description: "Germany has a fast and uncomplicated system for those who wish to work, study, or set up business. Germany Opportunity Card will help you get there quick."
    },
    {
      title: "Chance of Permanent Residence",
      icon: <FaHome className="text-orange-500 text-3xl" />,
      description: "If you have the right kind of skills and experience, Germany gives you a clear path to stay permanently, thus giving long-term security and growth."
    },
    {
      title: "Good Income",
      icon: <FaDollarSign className="text-orange-500 text-3xl" />,
      description: "Germany offers competitive salaries across different fields, helping you enjoy a high standard of living and good earning potential."
    },
    {
      title: "Guaranteed Work Permit",
      icon: <FaClipboardCheck className="text-orange-500 text-3xl" />,
      description: "Germany Opportunity Card (GOC) gives a guarantee for a permitted work, making sure that you can work legally without any restrictions and have job security."
    },
    {
      title: "Possibility for Full-Time Work",
      icon: <FaHandshake className="text-orange-500 text-3xl" />,
      description: "Germany offers plenty of full-time job opportunities in different sectors. So you can secure a stable and good career while developing your professional skills."
    },
    {
      title: "Excellent Family Benefits",
      icon: <FaShieldAlt className="text-orange-500 text-3xl" />,
      description: "Germany provides family reunification options and excellent social benefits including healthcare, education, and child support for long-term family security."
    },
  ];

  return (
    <>
      <div className='h-fit mb-0 md:mb-0 lg:mb-0 tablet:mb-12 py-6 lg:py-12'>
        <h2 className="text-2xl sm:text-3xl lg:text-[2rem] font-semibold uppercase text-center mb-6 lg:mb-12 bg-gradient-to-r from-black via-yellow-400 to-red-500 bg-clip-text text-transparent px-4">
          Why To Choose <span className='text-orange-500 block lg:inline'>Germany For Your Future?</span>
        </h2>

        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* TOP ROW: 65% Text + 35% Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 lg:mb-8">
            {/* LEFT: First 3 items - 65% width on lg */}
            <div className="lg:col-span-8 space-y-2 lg:space-y-2">
              {roadmap.slice(0, 3).map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Image - 35% width on lg */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm lg:max-w-md h-64 sm:h-72 lg:h-[22rem]">
                <Image 
                  src="/job-opportunities-germany.avif" 
                  alt="Germany Opportunity Card" 
                  fill
                  className="object-cover rounded-2xl shadow-xl hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: 3 Items ONLY (Full Width) */}
          <div className="lg:grid lg:grid-cols-2 gap-2 lg:gap-2 lg:items-start">
            {/* Last 3 items - Full width */}
            <div className="space-y-2 lg:space-y-2 lg:col-span-2">
              {roadmap.slice(3, 6).map((item, index) => (
                <div key={index + 3} className="flex items-start space-x-2 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        <div className="w-full h-1 bg-gradient-to-r from-black via-red-600 to-yellow-400" />
    </>
    
  );
};

export default Why;
