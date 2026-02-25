import React, { useEffect } from "react";
import SuperFlowSlider from "../component/SuperSlider";
import CourseBannerPage from "/course/bannerImage/Courses-banner-1.jpg.jpeg"
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward, FiNavigation } from 'react-icons/fi';

function Courses() {
  useEffect(() => {
      window.scroll(0, 0);
    });
  return (
    <>
    <div className="h-full w-full overflow-hidden">
  <img
    src={CourseBannerPage}
    alt="Courses Banner"
    className="w-full h-[620px] object-cover"
  />
</div>
    
    <div data-aos="fade-out" className="bg-white pt-20 pb-16 px-6 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Subtle Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 translate-x-32 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Badge & Title */}
        <div className="text-center mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Aviation Excellence
          </motion.span>
          <h1 className="text-4xl md:text-6xl font-black text-blue-950 tracking-tight">
            Our Training <span className="text-blue-600">Programs</span>
          </h1>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* Content Section with Grid */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Main Description */}
          <div className="w-full lg:w-2/3">
            <p className="text-xl text-blue-900/80 font-medium leading-relaxed mb-6">
              Begin your journey to the captain's seat with Chetak Aviation. Our DGCA-aligned curriculum combines rigorous academic theory with elite flight training.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">
              At our Aligarh base, we prioritize conceptual clarity and safety-first decision making. Whether you are aiming for a Commercial Pilot License or mastering Ground School subjects, our programs are engineered to meet international aviation standards and airline readiness requirements.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
              {['DGCA Approved', 'Elite Mentorship', 'Modern Fleet'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold border border-blue-100">
                  <FiCheckCircle /> {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Side Highlights Card */}
          <div className="w-full lg:w-1/3 bg-white p-8 rounded-[2rem] border border-blue-100 shadow-xl shadow-blue-900/5 relative">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600 rounded-xl text-white">
                  <FiAward size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Certified Training</h4>
                  <p className="text-sm text-gray-500">Globally recognized aviation certifications.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                  <FiNavigation size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Career Guidance</h4>
                  <p className="text-sm text-gray-500">Dedicated support for airline placements.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative Corner Icon */}
            <div className="absolute -bottom-4 -right-4 opacity-5 text-blue-600 rotate-12">
               <FiNavigation size={120} />
            </div>
          </div>
        </div>
      </div>
    </div>
    <SuperFlowSlider/>
    </>
  );
}

export default Courses;
