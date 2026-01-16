import React from "react";
import AboutUs from "/public/logo/AboutUs.jpg"

function AboutOurMission() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-8">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Mission Card */}
        <div className="relative bg-white rounded-[2.5rem] shadow-xl overflow-hidden">

          {/* Decorative Side Accent */}
          <div className="absolute left-0 top-0 h-full w-2 bg-blue-700" />

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center p-10 md:p-16">

            {/* Left Title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight">
                Our Mission
              </h2>

              <div className="mt-6 w-20 h-[3px] bg-blue-600" />

              <p className="mt-8 text-black/70 text-base md:text-lg leading-relaxed">
                Our mission is to deliver high-quality aviation education that
                builds strong theoretical knowledge, disciplined thinking, and a
                safety-first mindset among aspiring pilots.
              </p>
              <p className="mt-8 text-black/70 text-base md:text-lg leading-relaxed">
                 We are committed to guiding students through DGCA-oriented
                  training with integrity, professionalism, and academic
                  excellence, ensuring they are well-prepared for advanced
                  flight training and long-term aviation careers.
              </p>
            </div>

            {/* Right Content */}
            <div className="w-full h-full">
              <img
                src="/logo/AboutUs.jpg"
                alt="Chetak Aviation Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutOurMission;
