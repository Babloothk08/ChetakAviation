import React from "react";

function PrivateLicenceWhatYouLearn() {
  return (
    <section className="w-full bg-slate-50 py-16 md:py-24 cursor-pointer">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-800">
            What You Will Learn
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            The Private Pilot Licence (PPL) program builds a strong foundation
            in aviation knowledge and practical flying skills, preparing you
            to fly safely, confidently, and responsibly.
          </p>
        </div>

        {/* Learning Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            {
              title: "Basic Principles of Flight",
              desc: "Understanding how an aircraft flies, including lift, drag, thrust, and stability.",
            },
            {
              title: "Aircraft Systems & Performance",
              desc: "Learning how aircraft engines, instruments, and systems operate in real conditions.",
            },
            {
              title: "Air Regulations & Aviation Safety",
              desc: "DGCA rules, airspace structure, and safety procedures for responsible flying.",
            },
            {
              title: "Aviation Meteorology Fundamentals",
              desc: "Weather interpretation, wind patterns, and their impact on flight operations.",
            },
            {
              title: "Navigation & Flight Planning",
              desc: "Route planning, fuel calculations, map reading, and situational awareness.",
            },
            {
              title: "Radio Communication Procedures",
              desc: "Standard aviation phraseology and communication with Air Traffic Control (ATC).",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
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

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default PrivateLicenceWhatYouLearn;
