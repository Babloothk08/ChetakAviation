import React from "react";

function CommercialPilotTrainingAtChetakAviation() {
  return (
    <section data-aos="fade-up" className="w-full bg-slate-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT — TRAINING APPROACH */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 md:p-14 relative overflow-hidden">

            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[5px] " />

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Training Philosophy
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-600">
              Training Approach at Chetak Aviation
            </h2>

            <div className="mt-10 space-y-6">

              {[
                "DGCA-aligned ground classes with structured syllabus coverage",
                "Experienced aviation instructors and mentors",
                "Concept-based learning for long-term understanding",
                "Strong focus on safety, professionalism, and discipline",
                "Continuous assessment and academic support"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 p-5 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold shrink-0">
                    ✓
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <p className="mt-10 text-blue-700 font-semibold italic text-lg">
              We believe professional pilots are built on knowledge, judgment, and responsibility, not just flying hours.
            </p>

          </div>

          {/* RIGHT — CAREER OPPORTUNITIES */}
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-10 md:p-14 relative overflow-hidden">

            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[5px] " />

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-2xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Career Opportunities
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-600">
              Career Opportunities After CPL
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-xl">
              With a Commercial Pilot Licence, pilots can pursue careers such as:
            </p>

            <div className="mt-10 space-y-6">

              {[
                "Airline First Officer (after type rating)",
                "Charter and business aviation pilot",
                "Cargo and aerial operations pilot",
                "Flight Instructor (with additional qualification)"
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 p-5 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-10 h-10 flex text-3xl pb-2 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold shrink-0">
                    →
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <p className="mt-10 text-slate-600 leading-relaxed">
              CPL training is the foundation for long-term growth in professional aviation.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CommercialPilotTrainingAtChetakAviation;


