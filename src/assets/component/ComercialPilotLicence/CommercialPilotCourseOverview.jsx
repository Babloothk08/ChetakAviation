import React from "react";

function CommercialPilotCourseOverview() {
  return (
    <section data-aos="fade-up" className="w-full bg-gray-200 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="">
          <h1 className="text-blue-700 text-center rounded-full text-2xl md:text-4xl shadow-xl font-semibold">Course Overview</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* RIGHT — VISUAL BLOCK */}
          <div className="relative flex justify-center">

            <div className="relative w-full max-w-md md:max-w-lg pt-15">

              {/* Soft Background Shape */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70" />

              <div className="relative bg-white rounded-[2.5rem] shadow-2xl border overflow-hidden ">

                <img
                  src="/course/commercialPilotLicence\Building-Professional-Excellence-Through-Commercial-Pilot-Training(FINAL).jpg"
                  alt="Commercial Pilot Licence Training"
                  className="w-full h-[380px] md:h-[450px]  object-cover"
                />

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-6 border-t">
                  <p className="text-blue-800 font-bold text-lg">
                    Professional Pilot Development Program
                  </p>
                  <p className="text-slate-600 font-semibold text-sm mt-1">
                    Industry-ready training with DGCA-aligned standards
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* LEFT — TEXT CONTENT */}
          <div>

            <h2 className="mt-8 text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-400 leading-tight">
              Building Professional Excellence Through
              <span className="text-blue-700"> Commercial Pilot Training</span>
            </h2>

            <p className="mt-5 text-slate-600 text-lg leading-relaxed max-w-xl">
              The CPL program focuses on developing technical proficiency,
              decision-making skills, and professional aviation discipline.
              At Chetak Aviation, we prepare students with DGCA-oriented ground
              training, a clear understanding of aviation regulations, and
              real-world operational awareness required for commercial flying.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              Our approach ensures students are not only exam-ready
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CommercialPilotCourseOverview;

