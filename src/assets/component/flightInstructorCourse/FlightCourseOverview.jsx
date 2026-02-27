import React from "react";

function FlightCourseOverview() {
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
                  src="/course/flightInstructorCourse/Course-in-all-Page(Course-Overview)-2.jpg.jpeg"
                  alt="Flight Instructor Classroom"
                  className="w-full h-full object-cover"
                />

                {/* Bottom Info Bar */}
                <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md p-6 border-t">
                  <p className="text-blue-800 font-bold text-lg">
                    Building Instructors, Not Just Pilots
                  </p>
                  <p className="text-slate-600 font-semibold text-sm mt-1">
                    Teaching excellence with aviation discipline
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* LEFT — TEXT CONTENT */}
          <div className="pt-8">

            <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-400 leading-tight">
              Professional Training for Future
              <span className="text-blue-700"> Flight Instructors</span>
            </h2>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-xl">
              The Flight Instructor Course focuses on developing instructional
              skills, teaching techniques, aviation knowledge depth, and
              professional judgment required to operate as a certified
              instructor. The program emphasizes not only how to fly, but how
              to teach flying safely and effectively.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
             At Chetak Aviation, we follow a structured, DGCA-aligned approach that ensures candidates understand both technical flying standards and instructional responsibility.
            </p>

          </div>

          

        </div>
      </div>
    </section>
  );
}

export default FlightCourseOverview;


