import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MultiEngineRatingContent() {

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
          Multi-Engine Rating Training in India
        </h2>

        <p ref={(el)=>textRef.current[0]=el} className="text-lg mb-4">
          Upgrade Your Skills for Advanced Commercial Aviation
        </p>

        <p ref={(el)=>textRef.current[1]=el} className="text-gray-600 mb-4">
          The Multi-Engine Rating program at Chetak Aviation is designed for Commercial Pilot Licence (CPL) holders who want to operate aircraft equipped with more than one engine. Multi-engine aircraft introduce higher performance capability, increased system complexity, and critical emergency management requirements.
        </p>

        <p ref={(el)=>textRef.current[2]=el} className="text-gray-600 mb-6">
          This structured DGCA-aligned training enhances technical competence, asymmetric flight control skills, and professional cockpit management. Students learn to manage engine-out scenarios, advanced performance calculations, and multi-engine aerodynamics under instructor supervision.
        </p>
        <p ref={(el)=>textRef.current[2]=el} className="text-gray-600 mb-6">
          A Multi-Engine Rating is a crucial milestone for pilots preparing for airline, charter, or corporate aviation careers. It significantly strengthens employability and operational confidence.
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          What is a Multi-Engine Rating?
        </h3>

        <p ref={(el)=>textRef.current[3]=el} className="text-gray-600 mb-6">
          A Multi-Engine Rating (ME Rating) is an additional certification added to a pilot’s licence that authorizes them to fly aircraft with more than one engine.
        </p>

        <ul className="space-y-3 mb-8">

          <li ref={(el)=>listRef.current[0]=el}>✈️ Advanced power management</li>
          <li ref={(el)=>listRef.current[1]=el}>✈️ Asymmetric thrust control</li>
          <li ref={(el)=>listRef.current[2]=el}>✈️ Enhanced system monitoring</li>
          <li ref={(el)=>listRef.current[3]=el}>✈️ Complex performance planning</li>
          <li ref={(el)=>listRef.current[4]=el}>✈️ Critical emergency response precision</li>

        </ul>

        <button
          ref={buttonRef}
          className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
        >
          ✈️ Enquire Today | Upgrade Your Aviation Career
        </button>

      </div>

    </section>
  );
}

export default MultiEngineRatingContent;
