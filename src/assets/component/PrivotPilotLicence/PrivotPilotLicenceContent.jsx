import React from "react";

function PrivotPilotLicenceContent() {
  return (
    <section data-aos="fade-up" className="relative w-full bg-white overflow-hidden">

      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block mb-4 px-6 py-2 rounded-full text-lg md:text-xl font-semibold bg-blue-100 text-blue-700">
              Private Pilot Licence (PPL)
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-400 leading-tight">
              Fly for <span className="text-blue-700">Passion.</span>
              <br /> Learn with <span className="text-blue-700">Precision.</span>
            </h1>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-xl">
              The Private Pilot Licence (PPL) at Chetak Aviation is ideal for
              aviation enthusiasts who wish to learn flying for personal,
              recreational, or non-commercial purposes. This course provides a
              strong foundation in aviation knowledge and flying skills while
              maintaining the highest standards of safety and professionalism.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              A PPL allows you to fly an aircraft for personal use, build
              confidence in handling real flight operations, and experience the
              joy of aviation under structured and guided training.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            <div className="relative w-full max-w-md md:max-w-lg">

              {/* Soft Blue Glow */}
              <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] blur-2xl opacity-70" />

              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-blue-200">

                <img
                  src="/course/privatePilotLicence/Fly_for_Passion_Learn_with_Precision.jpg"
                  alt="Private Pilot Licence Training"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
                  <p className="text-blue-700 font-black text-2xl leading-none">
                    PPL
                  </p>
                  <p className="text-gray-600 text-xs font-semibold uppercase tracking-widest">
                    Passionate Flying Pathway
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default PrivotPilotLicenceContent;


