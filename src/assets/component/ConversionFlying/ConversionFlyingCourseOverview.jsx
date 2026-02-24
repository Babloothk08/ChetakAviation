import React from "react";

function ConversionFlyingCourseOverview() {
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

              <div className="relative bg-white rounded-[2.5rem] shadow-2xl border overflow-hidden">

                <img
                  src="/course/conversionFlying/Professional_Transition_Through_Conversion_Flying.jpg"
                  alt="Conversion Flying Training"
                  className="w-full h-[380px] md:h-[450px]  object-cover"
                />

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-6 border-t">
                  <p className="text-blue-800 font-bold text-lg">
                    Smooth Aircraft Transition & Skill Alignment
                  </p>
                  <p className="text-slate-600 font-semibold text-sm mt-1">
                    Precision flying with safety and professionalism
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* LEFT — TEXT CONTENT */}
          <div>


            <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-400 leading-tight">
              Professional Transition Through
              <span className="text-blue-700"> Conversion Flying</span>
            </h2>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-xl">
              The Conversion Flying program focuses on bridging the gap between
              previous flying experience and new operational requirements.
              Whether you are converting from one aircraft type to another or
              aligning your training with DGCA standards, our structured approach
              ensures a smooth and professional transition.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              At Chetak Aviation, conversion flying is conducted with a strong
              emphasis on safety, systems knowledge, and operational discipline.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default ConversionFlyingCourseOverview;

