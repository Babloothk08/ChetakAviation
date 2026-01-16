import React from "react";
import WhyChetakAviation from "/public/aboutUsPage/Why-Choose-Chetak-Aviation.jpg"

function WhyChooseChetakAviation() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900">
            Why Students Choose Chetak Aviation
          </h2>
          <p className="mt-5 text-black/70 text-base md:text-lg leading-relaxed">
            Aviation training guided by experience, discipline, and a clear
            professional vision.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg h-[520px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group">

              <img
                src={WhyChetakAviation}
                alt="Chetak Aviation Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Blue Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent" />

              {/* Overlay Text */}
              <div className="absolute bottom-10 left-8 right-8 text-white">
                <p className="text-xl md:text-2xl font-bold leading-snug">
                  Your journey to the cockpit begins with the right foundation.
                </p>
                <div className="mt-3 h-[2px] w-16 bg-blue-500" />
                <p className="text-sm md:text-base mt-3 text-white/90">
                  We prepare you not just to fly — but to fly professionally.
                </p>
              </div>

            </div>
          </div>

          {/* Text Section */}
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-blue-800 mb-8">
              Why Choose Chetak Aviation
            </h3>

            <p className="text-black/70 mb-8 leading-relaxed">
              Choosing the right aviation academy is one of the most important
              decisions in a pilot’s career. At Chetak Aviation, we provide a
              structured, disciplined, and student-focused learning environment
              that prepares aspiring pilots for the real demands of professional
              aviation.
            </p>

            {/* Features */}
            <div className="space-y-5">
              {[
                "Experienced Aviation Instructors guiding students with clarity and real-world insight",
                "DGCA-Oriented Ground Training aligned with current aviation standards",
                "Concept-Based Learning for long-term understanding, not rote memorization",
                "Student-Focused Approach with personal attention and small batches",
                "Professional Aviation Culture that builds responsibility and confidence",
                "Clear Career Guidance for a structured pilot training pathway",
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative "
                >
                  <p className="text-black/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer Line */}
            <p className="mt-10 text-blue-700 font-semibold italic text-lg">
              ✈️ Train with purpose. Learn with discipline. Fly with confidence.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChooseChetakAviation;
