import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FlightInstructorTrainingAtChetakAviation() {

  const sectionRef = useRef(null);

  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  const leftTitleRef = useRef(null);
  const rightTitleRef = useRef(null);

  const leftItemsRef = useRef([]);
  const rightItemsRef = useRef([]);

  const addLeftItems = (el) => {
    if (el && !leftItemsRef.current.includes(el)) {
      leftItemsRef.current.push(el);
    }
  };

  const addRightItems = (el) => {
    if (el && !rightItemsRef.current.includes(el)) {
      rightItemsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        }
      });

      // LEFT CARD
      tl.from(leftCardRef.current, {
        x: -80,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out"
      })

      .from(leftTitleRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")

      .from(leftItemsRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.5")

      // RIGHT CARD
      .from(rightCardRef.current, {
        x: 80,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8")

      .from(rightTitleRef.current, {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")

      .from(rightItemsRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out"
      }, "-=0.5");

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-slate-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT CARD */}
          <div
            ref={leftCardRef}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 md:p-14 relative overflow-hidden"
          >

            <div className="absolute top-0 left-0 w-full h-[5px] bg-blue-600" />

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Training Philosophy
            </span>

            <h2
              ref={leftTitleRef}
              className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-800"
            >
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
                  ref={addLeftItems}
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

          </div>

          {/* RIGHT CARD */}
          <div
            ref={rightCardRef}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 p-10 md:p-14 relative overflow-hidden"
          >

            <div className="absolute top-0 left-0 w-full h-[5px] bg-blue-600" />

            <span className="inline-block mb-4 px-5 py-2 rounded-full text-2xl md:text-3xl font-semibold bg-blue-100 text-blue-700">
              Career Path
            </span>

            <h2
              ref={rightTitleRef}
              className="mt-4 text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-800"
            >
              Career Opportunities After FIC
            </h2>

            <div className="mt-10 space-y-6">
              {[
                "Flight Instructor at flying training organizations",
                "Aviation ground and flight training mentor",
                "Time-building instructor for airline career progression",
              ].map((item, index) => (
                <div
                  ref={addRightItems}
                  key={index}
                  className="flex items-start gap-5 p-5 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold shrink-0">
                    →
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FlightInstructorTrainingAtChetakAviation;