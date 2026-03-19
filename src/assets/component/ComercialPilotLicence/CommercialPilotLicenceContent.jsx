import React from "react";

function CommercialPilotLicenceContent() {
  return (
    <section data-aos="fade-up" className="relative w-full bg-white overflow-hidden">

      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Commercial Pilot Licence (CPL)
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-400 leading-tight">
              Turn Your Passion for Flying into a
              <span className="text-blue-600"> Professional Career</span>
            </h1>

            <p className="mt-4 text-slate-600 text-lg leading-relaxed max-w-xl">
              The Commercial Pilot Licence (CPL) program at Chetak Aviation is designed
              for aspiring pilots who aim to fly professionally and build a successful
              career in aviation. Our training combines structured flight instruction,
              strong academic foundations, and professional mentorship fully aligned
              with DGCA requirements.
            </p>

            <p className="mt-2 text-slate-600 text-lg leading-relaxed max-w-xl">
              A CPL is the essential licence required to work as a commercial pilot,
              opening pathways toward airline operations, charter flying, and advanced
              aviation roles across the global aviation industry.
            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            {/* Floating Frame */}
            <div className="relative w-full max-w-md md:max-w-lg">

              {/* Blue Glow Card */}
              <div className="absolute -inset-4 bg-blue-100 rounded-[2.5rem] blur-2xl opacity-70" />

              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-blue-200">

                <img
                  src="/course/commercialPilotLicence\CPLImage.jpg.jpeg"
                  alt="Commercial Pilot Licence Training"
                  className="w-full  object-cover"
                />

                {/* Glass Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
                  <p className="text-blue-600 font-black text-2xl leading-none">
                    CPL
                  </p>
                  <p className="text-slate-600 text-xs font-semibold uppercase tracking-widest">
                    Professional Pilot Training Program
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

export default CommercialPilotLicenceContent;
