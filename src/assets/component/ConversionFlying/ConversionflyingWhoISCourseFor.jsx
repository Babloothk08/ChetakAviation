import React from "react";

function ConversionflyingWhoISCourseFor() {
  return (
    <section className="w-full bg-slate-50 py-10 md:py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-blue-800">
            Who Is This Course For?
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed">
            This program is suitable for licensed pilots who are advancing their
            professional skills and adapting to new operational environments.
          </p>
        </div>

        {/* Simple List Content */}
        <div className="max-w-3xl mx-auto space-y-6">

          {[
            "Licensed pilots transitioning to a different aircraft type",
            "Pilots converting foreign flying experience to DGCA requirements",
            "Pilots seeking additional confidence on a new training aircraft",
            "CPL holders preparing for advanced training or instructional roles",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-5 bg-white p-6 rounded-xl shadow-md border"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-extrabold shrink-0">
                ✓
              </div>
              <p className="text-slate-700 text-lg leading-relaxed font-medium">
                {item}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ConversionflyingWhoISCourseFor;
