import React from "react";

function ConversionFlyingContent() {
  return (
    <section className="relative w-full bg-white overflow-hidden">

      {/* Background Subtle Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-white" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Conversion Flying
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-400 leading-tight">
              Transition with <span className="text-blue-700">Confidence.</span>
              <br /> Fly with <span className="text-blue-700">Precision.</span>
            </h1>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-xl">
              Conversion Flying at Chetak Aviation is designed for licensed pilots
              who wish to convert or transition their flying experience from one
              aircraft type, country, or training environment to another. This
              program helps pilots adapt smoothly to new aircraft systems,
              operating procedures, and regulatory standards.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              Conversion flying is a critical step in ensuring safe aircraft
              handling, procedural accuracy, and professional confidence when
              moving between different flying platforms.
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
                  src="/logo/AboutUs.jpg"
                  alt="Conversion Flying Training"
                  className="w-full h-[420px] md:h-[520px] object-cover"
                />

                {/* Glass Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-4 rounded-2xl shadow-lg">
                  <p className="text-blue-700 font-black text-2xl leading-none">
                    CF
                  </p>
                  <p className="text-slate-600 text-xs font-semibold uppercase tracking-widest">
                    Professional Transition Program
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

export default ConversionFlyingContent;

