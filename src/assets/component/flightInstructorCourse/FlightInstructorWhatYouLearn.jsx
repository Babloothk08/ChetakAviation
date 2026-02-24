import React from "react";

function FlightInstructorWhatYouLearn() {
  return (
    <section data-aos="zoom-in-down" className="w-full bg-slate-50 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-800">
            What You Will Learn
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            Our Flight Instructor Course develops not only flying expertise, but
            the professional instructional competence required to train future
            pilots safely and effectively.
          </p>
        </div>

        {/* Learning Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {[
            {
              title: "Principles of Flight Instruction",
              desc: "Instructional techniques, learning psychology, and structured teaching methodology.",
            },
            {
              title: "Communication & Student Handling",
              desc: "Clear explanation skills, cockpit communication, and student behavior management.",
            },
            {
              title: "Advanced Aircraft Systems",
              desc: "In-depth understanding of aircraft systems and advanced flight maneuvers.",
            },
            {
              title: "Safety & Risk Management",
              desc: "Hazard identification, risk assessment, and safety-first decision making.",
            },
            {
              title: "Pre & Post Flight Briefing",
              desc: "Professional briefing, performance review, and learning reinforcement techniques.",
            },
            {
              title: "Human Factors & Error Management",
              desc: "Understanding pilot psychology, CRM, and prevention of operational errors.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="cursor-pointer group relative bg-white rounded-2xl p-8 shadow-2xl  transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[4px] sh nn rounded-t-2xl" />

              {/* Index Badge */}
              <div className=" w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-extrabold mb-6">
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

export default FlightInstructorWhatYouLearn;

