import React from "react";

function FlightInstructorTrainingAtChetakAviation() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT — TRAINING APPROACH */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 md:p-14 relative overflow-hidden">

            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[5px] bg-blue-600" />

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Training Philosophy
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-800">
              Training Approach at Chetak Aviation
            </h2>

            <div className="mt-10 space-y-6">

              {[
                "DGCA-Oriented Instruction aligned with regulatory standards",
                "Experienced Aviation Mentors guiding each candidate",
                "Focus on concept clarity and instructional confidence",
                "Emphasis on safety, discipline, and professionalism",
                "Individual attention to develop teaching competence",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 p-5 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold shrink-0">
                    ✓
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <p className="mt-10 text-blue-700 font-semibold italic text-lg">
              A good instructor is not just a skilled pilot, but a responsible
              educator and role model.
            </p>

          </div>

          {/* RIGHT — CAREER OPPORTUNITIES */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 md:p-14 relative overflow-hidden">

            {/* Top Accent */}
            <div className="absolute top-0 left-0 w-full h-[5px] bg-blue-600" />

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-2xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Career Path
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-800">
              Career Opportunities After FIC
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed max-w-xl">
              After completing the Flight Instructor Course, pilots can pursue
              professional roles that strengthen experience and accelerate
              long-term airline career progression.
            </p>

            <div className="mt-10 space-y-6">

              {[
                "Flight Instructor at flying training organizations",
                "Aviation ground and flight training mentor",
                "Time-building instructor for airline career progression",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 p-5 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-10 h-10 flex text-3xl pb-2 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold shrink-0">
                    →
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <p className="mt-10 text-slate-600 leading-relaxed">
              Becoming a Flight Instructor also helps pilots gain valuable
              flying hours, leadership experience, and in-depth aviation
              understanding.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FlightInstructorTrainingAtChetakAviation;


