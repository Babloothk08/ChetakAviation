import React from "react";
import OurVision from "/public/aboutUsPage/Our-Vision.jpg"

function AboutOurVision() {
  return (
    <section className="w-full bg-slate-50 py-5 md:py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Mission Card */}
        <div className="relative bg-white rounded-[2.5rem] shadow-xl overflow-hidden">

          {/* Decorative Side Accent */}
          <div className="absolute right-0 top-0 h-full w-2 bg-blue-700" />

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center p-10 md:p-16">

            {/* LEFT: Content Box (previously right) */}
            <div className="w-[440px] h-full">
              <img
                src={OurVision}
                alt="Chetak Aviation Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* RIGHT: Mission Title + Intro (previously left) */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight">
                Our Vision
              </h2>

              <div className="mt-6 w-20 h-[3px] bg-blue-600" />

              <p className="mt-8 text-black/70 text-base md:text-lg leading-relaxed">
                Our vision is to become a trusted and respected flying training academy in India, recognized for producing competent, confident, and ethically trained pilots.
              </p>
              <p className="mt-8 text-black/70 text-base md:text-lg leading-relaxed">
                 We aim to set high standards in aviation education by continuously improving training quality, maintaining professional discipline, and supporting students throughout their aviation journey
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutOurVision;

