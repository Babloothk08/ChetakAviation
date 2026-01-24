import React from "react";

function PrivatePilotLicenceCourseOverview() {
  return (
    <section data-aos="fade-up" className="w-full bg-gray-100 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* RIGHT — VISUAL BLOCK */}
          <div className="relative flex justify-center">

            <div className="relative w-full max-w-md md:max-w-lg">

              {/* Soft Background Accent */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70" />

              <div className="relative bg-white rounded-[2.5rem] shadow-2xl border overflow-hidden">

                <img
                  src="/course/privatePilotLicence\Strong_Foundations_for_Safe_&_Confident_Flying.jpg"
                  alt="Private Pilot Licence Training"
                  className="w-full h-[380px] md:h-[480px] object-cover"
                />

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-6 border-t">
                  <p className="text-blue-700 font-bold text-lg">
                    Training Safe & Responsible Private Pilots
                  </p>
                  <p className="text-gray-600 font-semibold text-sm mt-1">
                    Building confidence through structured aviation training
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* LEFT — TEXT CONTENT */}
          <div>

            <span className="inline-block mb-4 px-6 py-2 rounded-full text-xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Course Overview
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-400 leading-tight">
              Strong Foundations for
              <span className="text-blue-700"> Safe & Confident Flying</span>
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-xl">
              The PPL program is designed to introduce students to the
              fundamentals of flying, aircraft systems, aviation regulations,
              and flight safety. At Chetak Aviation, we ensure that students
              receive DGCA-aligned ground instruction along with disciplined
              flight training to develop safe and responsible pilots.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              Our training approach emphasizes situational awareness,
              decision-making, and aircraft control, preparing students for
              real-world flying conditions with professionalism and confidence.
            </p>

          </div>

          

        </div>
      </div>
    </section>
  );
}

export default PrivatePilotLicenceCourseOverview ;
