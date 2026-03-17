import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AeroplaneMovingPng() {
  const planeRef = useRef(null);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const plane = planeRef.current;

    // ✈️ Plane animation (unchanged)
    gsap.fromTo(
      plane,
      {
        x: () => -plane.offsetWidth,
      },
      {
        x: () => window.innerWidth + plane.offsetWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    // 🔥 Heading animation
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // 🔥 Text animation
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
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
      className="relative w-full py-16 bg-white overflow-hidden"
    >
      {/* ✅ Light background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-[#ECAA05]/10 to-white"></div>

      {/* ✈️ Plane (UNCHANGED) */}
      <img
        ref={planeRef}
        src="/logo/AEROPLANE-PNG.png"
        alt="plane"
        className="absolute -bottom-2 z-10"
      />

      {/* ✅ Text Content */}
      <div className="relative z-0 max-w-7xl mx-auto px-6">
        <h1
          ref={headingRef}
          className="text-3xl md:text-5xl font-bold text-[#103057]"
        >
          Elevate Your Aviation Journey <br />
          <span className="text-[#ECAA05]">Fly Beyond Limits</span>
        </h1>

        <p
          ref={textRef}
          className="mt-4 text-[#103057]/80 max-w-xl"
        >
          Experience world-class aviation training with expert instructors and modern aircraft.
        </p>
      </div>
    </section>
  );
}

export default AeroplaneMovingPng;