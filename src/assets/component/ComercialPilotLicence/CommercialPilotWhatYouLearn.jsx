import React from "react";

function CommercialPilotWhatYouLearn() {
  return (
    <section className="w-full bg-slate-50 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-800">
            What You Will Learn
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            The CPL program builds a strong academic and operational foundation,
            preparing students for professional airline and commercial flying
            careers through structured DGCA-aligned training.
          </p>
        </div>

        {/* Learning Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            {
              title: "Air Regulations and Aviation Law",
              desc: "In-depth understanding of DGCA rules, airspace structure, licensing, and legal responsibilities of a commercial pilot.",
            },
            {
              title: "Advanced Air Navigation",
              desc: "Mastering radio navigation, flight planning, and route analysis for long-range commercial operations.",
            },
            {
              title: "Aviation Meteorology for Commercial Operations",
              desc: "Interpreting weather systems, forecasts, and hazards to support safe and efficient flight decisions.",
            },
            {
              title: "Aircraft Systems and Performance",
              desc: "Comprehensive study of aircraft engines, systems, limitations, and performance calculations.",
            },
            {
              title: "Flight Planning and Operational Procedures",
              desc: "Professional flight preparation including fuel planning, alternates, and regulatory compliance.",
            },
            {
              title: "Safety Management and Human Factors",
              desc: "Understanding pilot decision-making, fatigue management, crew coordination, and risk mitigation.",
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

export default CommercialPilotWhatYouLearn;

