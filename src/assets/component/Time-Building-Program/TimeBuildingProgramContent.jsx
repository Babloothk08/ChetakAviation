import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function TimeBuildingProgramContent() {

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef([]);
  const listRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      }
    });

    tl.from(headingRef.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

    .from(textRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    })

    .from(listRef.current, {
      x: -40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15
    })

    .from(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    });

  }, []);

  return (
    <section ref={sectionRef} className="py-10 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h2
          ref={headingRef}
          className="text-4xl font-bold text-blue-800 mb-6"
        >
          Time Building Program in India
        </h2>

        <p ref={(el)=>textRef.current[0]=el} className="text-lg mb-4">
          Complete Your CPL Flying Hours with Confidence
        </p>

        <p ref={(el)=>textRef.current[1]=el} className="text-gray-600 mb-4">
          The Time Building Program at Chetak Aviation is designed for aspiring commercial pilots who need to complete the mandatory flying hours required for Commercial Pilot Licence (CPL) eligibility under DGCA regulations. Accumulating flight hours is not just about logging time — it is about refining skills, building confidence, and strengthening operational competence.
        </p>

        <p ref={(el)=>textRef.current[2]=el} className="text-gray-600 mb-6">
          TOur structured time building program ensures that every flight contributes meaningfully to pilot development. Under professional supervision, students enhance cross-country navigation skills, improve cockpit discipline, and gain real operational exposure. Safety, efficiency, and aviation professionalism remain our highest priorities throughout the program.
        </p>
        <p ref={(el)=>textRef.current[2]=el} className="text-gray-600 mb-6">
          Whether you are nearing CPL hour completion or planning structured hour accumulation, our time building course supports your aviation career progression.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          What is a Time Building Program?
        </h3>

        <p ref={(el)=>textRef.current[3]=el} className="text-gray-600 mb-6">
          A Time Building Program is a structured flight training plan that allows pilots to accumulate the required flying hours needed to qualify for a Commercial Pilot Licence (CPL) or other advanced ratings.<br/><br/>
          Under DGCA regulations in India, pilots must complete a minimum number of flying hours (typically 200 total flight hours for CPL issuance). These hours include:
        </p>

        <ul className="space-y-3 mb-8">

          <li ref={(el)=>listRef.current[0]=el}>✈️ Pilot-in-Command (PIC) time</li>
          <li ref={(el)=>listRef.current[1]=el}>✈️ Cross-country flying</li>
          <li ref={(el)=>listRef.current[2]=el}>✈️ Instrument flying</li>
          <li ref={(el)=>listRef.current[3]=el}>✈️ Night flying (as applicable)</li>

        </ul>

        <button
          ref={buttonRef}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          ✈️ Enquire Today | Build Your Flying Hours
        </button>

      </div>

    </section>
  );
}

export default TimeBuildingProgramContent;


