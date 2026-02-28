import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FlightCourseOverview() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 80 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-10 bg-gradient-to-br from-slate-100 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div>
          <h1 className="text-blue-700 text-center text-2xl md:text-4xl font-semibold">
            Course Overview
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE SIDE */}
          <div ref={imageRef} className="relative flex justify-center">

            <div className="relative w-full max-w-md md:max-w-lg pt-15">

              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-50" />

              <div className="relative bg-white/80 backdrop-blur-lg rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden">

                <img
                  src="/course/flightInstructorCourse/Course-in-all-Page(Course-Overview)-2.jpg.jpeg"
                  alt="Flight Instructor Classroom"
                  className="w-full h-full object-cover"
                />

                <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-md p-6 border-t border-slate-200">
                  <p className="text-blue-700 font-bold text-lg">
                    Building Instructors, Not Just Pilots
                  </p>
                  <p className="text-slate-600 font-semibold text-sm mt-1">
                    Teaching excellence with aviation discipline
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* TEXT SIDE */}
          <div ref={textRef} className="pt-8">

            <h2 className="mt-4 text-3xl md:text-4xl xl:text-5xl font-extrabold text-slate-800 leading-tight">
              Professional Training for Future
              <span className="text-blue-700">
                {" "}Flight Instructors
              </span>
            </h2>

            <div className="w-20 h-1 bg-blue-700 mt-6 rounded-full"></div>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed max-w-xl">
              The Flight Instructor Course focuses on developing instructional
              skills, teaching techniques, aviation knowledge depth, and
              professional judgment required to operate as a certified
              instructor.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-xl">
              At Chetak Aviation, we follow a structured, DGCA-aligned approach
              that ensures candidates understand both technical flying standards
              and instructional responsibility.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FlightCourseOverview;