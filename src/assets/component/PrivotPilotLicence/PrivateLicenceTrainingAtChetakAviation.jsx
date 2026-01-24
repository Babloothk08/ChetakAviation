import React from "react";

function PrivateLicenceTrainingAtChetakAviation() {
  return (
    <section data-aos="fade-up" className="w-full bg-slate-50 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT — TRAINING APPROACH */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 md:p-14 relative overflow-hidden">

            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[5px] bg-blue-600" />

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Training Philosophy
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-800">
              Training Approach at Chetak Aviation
            </h2>

            <div className="mt-10 space-y-6">

              {[
                "Structured DGCA-oriented ground classes",
                "Experienced instructors guiding each stage of training",
                "Focus on safety, discipline, and confidence building",
                "Personalized learning pace for students",
                "Professional aviation learning environment",
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
              We believe early aviation training should develop safe habits and
              correct decision-making from the very first flight.
            </p>

          </div>

          {/* RIGHT — CAREER & PROGRESSION PATH */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 md:p-14 relative overflow-hidden">

            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[5px] bg-blue-600" />

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-2xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Career Path
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-800">
              Career & Progression Path
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-xl">
              While a Private Pilot Licence (PPL) does not permit commercial
              flying, it serves as a strong stepping stone for students who may
              later wish to pursue a Commercial Pilot Licence (CPL).
            </p>

            <div className="mt-10 space-y-6">

              {[
                "Build confidence and strong flying foundations",
                "Develop real-world cockpit decision-making skills",
                "Prepare smoothly for advanced commercial pilot training",
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
              Many pilots begin their aviation journey with a PPL to gain
              experience and confidence before advancing professionally into
              commercial aviation.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PrivateLicenceTrainingAtChetakAviation;

