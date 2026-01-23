import React from "react";

function FlightInstructorEligibilityCriteria() {
  return (
    <section className="w-full bg-gray-200 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — REGULATORY TEXT BLOCK */}
          <div>

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Admission Requirements
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-400 leading-tight">
              Eligibility Criteria for
              <span className="text-blue-700"> Flight Instructor Course</span>
            </h2>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-xl">
              To enroll in the Flight Instructor Course, candidates must meet
              professional aviation standards that ensure readiness for
              instructional responsibility and regulatory compliance.
            </p>

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
                  className="flex items-start gap-5 bg-slate-50 p-6 rounded-xl border"
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
            <p className="mt-10 text-blue-700 font-semibold italic text-lg max-w-xl">
              Our team also provides guidance on documentation and regulatory
              steps required for FIC enrollment.
            </p>

          </div>

          {/* RIGHT — VISUAL INFO PANEL */}
          <div className="relative flex justify-center">

            <div className="relative w-full md:pt-78 max-w-md md:max-w-lg">

              {/* Background Glow */}
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70" />

              <div className="relative bg-white rounded-[2.5rem] shadow-2xl border overflow-hidden">

                <img
                  src="/course/flightInstructorCourse/Eligibility_Criteria_for_Flight_Instructor_Course.jpg"
                  alt="DGCA Aviation Standards"
                  className="w-full h-[380px] md:h-[480px] object-cover"
                />

                {/* Overlay Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-xl font-bold">
                    Entry into Professional Aviation Training
                  </p>
                  <p className="text-sm mt-1 text-slate-200">
                    Meeting regulatory standards is the first step to becoming
                    a certified flight instructor
                  </p>
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

