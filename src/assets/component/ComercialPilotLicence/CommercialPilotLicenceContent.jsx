import React from 'react'
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiTrendingUp } from 'react-icons/fi';

function CommercialPilotLicenceContent() {
  return (
     <div className="bg-white pt-20 pb-16 px-6 md:px-20 lg:px-32 relative overflow-hidden">
      {/* Subtle Background Aesthetic */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/40 skew-x-[-15deg] translate-x-20 z-0 hidden md:block" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Course Label & Heading */}
        <div className="mb-12 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Commercial Pilot <br />
            <span className="text-blue-600">Lincence (CPL)</span>
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Main Context */}
          <div className="w-full lg:w-3/5 space-y-6">
            <p className="text-xl text-slate-700 font-medium leading-relaxed">
              Transition from a pilot to a mentor. Our Flight Instructor Course is designed to refine your flying precision and develop elite pedagogical skills.
            </p>
            <p className="text-slate-500 leading-relaxed text-lg">
              Becoming an instructor is one of the most rewarding milestones in an aviation career. At Chetak Aviation, we focus on the "Art of Instruction"—teaching you how to communicate complex aerodynamic concepts, manage cockpit psychology, and shape the safety habits of future aviators.
            </p>

            {/* Core Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              {[
                'Instructional Technique Training',
                'Advanced Flight Maneuvers',
                'Safety Management Systems',
                'Student Progress Monitoring'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-slate-600 font-semibold text-sm">
                  <FiCheckCircle className="text-blue-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Stat Card */}
          <div className="w-full lg:w-2/5">
            <div className="bg-slate-50 rounded-[2.5rem] p-10 border border-slate-100 shadow-2xl shadow-blue-900/5 relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600">
                    <FiUsers size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">Mentorship Focus</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">1-on-1 Training</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="h-12 w-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-blue-600">
                    <FiTrendingUp size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold">Career Growth</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">High Demand Sector</p>
                  </div>
                </div>

                <button className="w-full py-4 bg-blue-600 hover:bg-slate-900 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-200">
                  Check Eligibility
                </button>
              </div>
              
              {/* Background Watermark */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-slate-900 pointer-events-none">
                <FiUsers size={250} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CommercialPilotLicenceContent
