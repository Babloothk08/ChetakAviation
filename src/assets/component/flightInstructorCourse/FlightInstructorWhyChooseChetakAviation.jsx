import React from "react";
import { Link } from "react-router-dom";

function FlightInstructorWhyChooseChetakAviation() {
  return (
    <section className="w-full bg-blue-700 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — WHY CHOOSE */}
          <div className="text-white">


            <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight">
              Why Choose Chetak Aviation for
              <span className="block text-blue-100">
                Flight Instructor Training?
              </span>
            </h2>

            <div className="mt-10 space-y-3 max-w-xl">

              {[
                "Structured and professional instructor training environment",
                "Focus on teaching skills, not just flying skills",
                "Strong safety culture and aviation discipline",
                "Honest guidance and career clarity",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 font-bold shrink-0">
                    ✓
                  </div>
                  <p className="text-white/90 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <p className="mt-10 text-blue-100 font-semibold italic text-lg">
              ✈️ Train to teach. Lead with responsibility. Inspire future pilots.
            </p>

          </div>

          {/* RIGHT — ENQUIRY CTA */}
          <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-8 md:mt-58 border border-white/20">


            <h3 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-800 leading-tight">
              Enquire About the Flight Instructor Course
            </h3>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Take the next step in your aviation career with Chetak Aviation’s
              Flight Instructor Course. Our team is here to guide you through
              eligibility, training structure, and career pathways.
            </p>

            {/* CTA Button */}
            <div className="mt-10">
              <Link to="/contact">
              <button className="cursor-pointer w-full sm:w-auto px-10 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-full shadow-xl transition-all duration-300">
                Request Course Guidance
              </button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FlightInstructorWhyChooseChetakAviation;


