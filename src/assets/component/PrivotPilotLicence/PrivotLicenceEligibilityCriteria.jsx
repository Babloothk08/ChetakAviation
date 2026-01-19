import React from "react";

function PrivotLicenceEligibilityCriteria() {
  return (
    <section className="w-full bg-gray-100 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — ELIGIBILITY TEXT BLOCK */}
          <div>

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-lg md:text-xl font-semibold bg-blue-100 text-blue-700">
              Admission Requirements
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-400 leading-tight">
              Eligibility Criteria for
              <span className="text-blue-700"> Private Pilot Licence (PPL)</span>
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-xl">
              To enroll in the Private Pilot Licence course, candidates must
              meet essential academic, medical, and regulatory standards to
              ensure safe and effective flight training.
            </p>

            {/* Criteria List */}
            <div className="mt-10 space-y-5 max-w-xl">

              {[
                "Be at least 17 years of age",
                "Have completed 10+2 education (Physics & Mathematics recommended)",
                "Hold a valid DGCA Class 2 Medical Certificate",
                "Demonstrate basic English language proficiency",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-white p-6 rounded-xl border shadow-sm"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-extrabold text-lg shrink-0">
                    ✓
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            {/* Support Line */}
            <p className="mt-10 text-blue-700 font-semibold italic text-lg max-w-xl">
              Our team assists students with medical guidance and licensing
              procedures throughout the enrollment process.
            </p>

          </div>

          {/* RIGHT — VISUAL INFO PANEL */}
          <div className="relative flex justify-center">

            <div className="relative w-full max-w-md md:max-w-lg">

              {/* Background Glow */}
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-70" />

              <div className="relative bg-white rounded-[2.5rem] shadow-2xl border overflow-hidden md:mt-80">

                <img
                  src="/logo/AboutUs.jpg"
                  alt="Private Pilot Training Standards"
                  className="w-full h-[380px] md:h-[480px] object-cover"
                />

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-xl font-bold">
                    Your First Step into Aviation
                  </p>
                  <p className="text-sm mt-1 text-gray-200">
                    Strong foundations create safe and confident pilots
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

export default PrivotLicenceEligibilityCriteria;


