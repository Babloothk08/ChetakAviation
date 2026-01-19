import React from "react";

function ConversionFlyingTrainingAtChetakAviation() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28">
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
                "DGCA-aligned conversion procedures",
                "One-on-one guidance from experienced instructors",
                "Structured briefings and debriefings",
                "Focus on safety, accuracy, and professionalism",
                "Customized training based on pilot experience level",
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
              We believe that conversion flying should enhance confidence without
              compromising safety, ensuring pilots are fully prepared before solo
              or operational flying.
            </p>

          </div>

          {/* RIGHT — IMPORTANCE OF CONVERSION FLYING */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 md:p-14 relative overflow-hidden">

            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[5px] bg-blue-600" />

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-2xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Key Importance
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-800">
              Why Conversion Flying Is Important
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-xl">
              Every aircraft behaves differently. Conversion flying ensures that
              pilots fully understand critical operational differences before
              independent or commercial flying.
            </p>

            <div className="mt-10 space-y-6">

              {[
                "Aircraft-specific handling characteristics",
                "System limitations and emergency responses",
                "Regulatory and procedural differences",
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
              This training reduces risk and builds professional adaptability —
              a critical skill in long-term aviation careers.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ConversionFlyingTrainingAtChetakAviation;

