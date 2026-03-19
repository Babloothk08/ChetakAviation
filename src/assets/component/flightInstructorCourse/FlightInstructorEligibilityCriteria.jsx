import React from "react";

function FlightInstructorEligibilityCriteria() {
  return (
    <section data-aos="fade-up" className="w-full bg-gray-200 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center">
          <span className="inline-block mb-4 px-5 py-2 rounded-full text-xl md:text-4xl shadow-sm cursor-pointer font-bold  text-blue-700">
              Admission Requirements
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-400 leading-tight">
              Eligibility Criteria for
              <span className="text-blue-700"> Flight Instructor Course</span>
            </h2>
             <p className="text-center mt-4 text-xl font-semibold text-gray-500">
              To enroll in the Flight Instructor Course, candidates must meet
              professional aviation standards that ensure readiness for
              instructional responsibility and regulatory compliance.
              </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-5">

          {/* LEFT — REGULATORY TEXT BLOCK */}
          <div>

            {/* Criteria List */}
            <div className="mt-10 space-y-6 max-w-xl">

              {[
                "Hold a valid Commercial Pilot Licence (CPL)",
                "Meet DGCA medical and regulatory requirements",
                "Possess strong theoretical knowledge and flying proficiency",
                "Demonstrate discipline, communication skills, and leadership qualities",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-slate-50 p-3 rounded-xl border"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-extrabold text-lg shrink-0">
                    ✓
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            {/* Support Line */}
            

          </div>

          {/* RIGHT — VISUAL INFO PANEL */}
          <div className="relative flex justify-center">

            <div className="relative w-full  max-w-md md:max-w-lg">

              {/* Background Glow */}
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70" />

              <div className="relative bg-white rounded-[2.5rem] shadow-2xl border overflow-hidden">

                <img
                  src="/course/flightInstructorCourse/EligibilityCriteriaforFlightInstructorCourse.jpg.jpeg"
                  alt="DGCA Aviation Standards"
                  className="w-full h-full object-cover"
                />

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  
                  
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FlightInstructorEligibilityCriteria;

