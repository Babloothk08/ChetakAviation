import React from "react";

function ConversionFlyingWhatYouLearn() {
  return (
    <section data-aos="zoom-in-down" className="w-full bg-slate-50 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-800">
            What You Will Learn
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Our Conversion Flying program equips pilots with the technical and
            operational knowledge required to safely transition between
            different aircraft types and operating environments.
          </p>
        </div>

        {/* Learning Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            {
              title: "Aircraft Systems Differences & Limitations",
              desc: "Understanding variations in avionics, engines, and aircraft capabilities for safe operation.",
            },
            {
              title: "Normal, Abnormal & Emergency Procedures",
              desc: "Practicing correct responses to routine operations and unexpected in-flight situations.",
            },
            {
              title: "Performance Calculations & Operational Planning",
              desc: "Accurate takeoff, landing, and fuel planning for different aircraft configurations.",
            },
            {
              title: "Aircraft Handling Techniques & Flight Characteristics",
              desc: "Adapting control techniques to match aircraft-specific handling behavior.",
            },
            {
              title: "Checklist Usage & Standard Operating Procedures (SOPs)",
              desc: "Developing disciplined cockpit workflow using approved procedures and checklists.",
            },
            {
              title: "Safety Management & Situational Awareness",
              desc: "Maintaining continuous awareness and risk management during all phases of flight.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="cursor-pointer group relative bg-white rounded-2xl p-8 shadow-lg border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[4px] bg-blue-600 rounded-t-2xl" />

              {/* Index Badge */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-extrabold mb-6">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-blue-800 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ConversionFlyingWhatYouLearn;
