import React from "react";

function FlightInstructorCourseContent() {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Flight Instructor Course (FIC)
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-400 leading-tight">
              Become a <span className="text-blue-700">Certified</span>
              <br /> Flight Instructor
            </h1>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-xl">
              The Flight Instructor Course (FIC) at Chetak Aviation is designed
              for qualified pilots who aspire to build a career as a professional
              flight instructor. This course prepares candidates to teach, mentor,
              and train student pilots with confidence, precision, and strong
              safety awareness.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              Becoming a Flight Instructor is one of the most respected pathways
              in aviation, allowing pilots to build flying experience, deepen
              technical knowledge, and contribute to the next generation of
              aviators.
            </p>

            {/* CTA */}
                      </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            {/* Floating Frame */}
            <div className="relative w-full max-w-md md:max-w-lg">

              {/* Blue Glow Card */}
              <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] blur-2xl opacity-70" />

              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-blue-200">

                <img
                  src="/logo/AboutUs.jpg"
                  alt="Flight Instructor Training"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />

                {/* Glass Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
                  <p className="text-blue-700 font-black text-2xl leading-none">
                    FIC
                  </p>
                  <p className="text-slate-600 text-xs font-semibold uppercase tracking-widest">
                    Professional Instructor Pathway
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

export default FlightInstructorCourseContent;


