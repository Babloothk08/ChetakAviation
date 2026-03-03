import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AeroplaneMovingPng() {
  const planeRef = useRef(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const planeWidth = window.innerWidth < 768 ? 220 : 550;

    // plane animation (same)
    gsap.fromTo(
      planeRef.current,
      { x: -(window.innerWidth + planeWidth) },
      {
        x: window.innerWidth + planeWidth,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );

    // cards animation
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );

    gsap.fromTo(
      headingRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      },
    );
  }, []);

  const stats = [
    { number: "11", label: "Aircraft" },
    { number: "120+", label: "Students" },
    { number: "4500+", label: "Flying Hours" },
    { number: "25+", label: "Destinations" },
    { number: "30+", label: "Instructors" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Safety Record" },
    { number: "98%", label: "Success Rate" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-full md:py-20 py-10 bg-gradient-to-r from-blue-50 to-white overflow-hidden"
    >
      {/* Plane */}
      <img
        ref={planeRef}
        src="/logo/AEROPLANE-PNG.png"
        alt="plane"
        className="absolute -bottom-2  z-10"
      />

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:mb-10 mb-2 ">
        <h1 ref={headingRef} className="text-4xl font-bold text-blue-700">
          MONTHLY FLYING <br />
          <span className="text-blue-900">DASHBOARD</span>
        </h1>

        <p className="text-gray-600 text-lg">
          Our monthly statistics showcase our commitment to excellence in
          aviation training. With state-of-the-art facilities and experienced
          instructors, we're dedicated to shaping the future of aviation.
        </p>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="bg-white shadow-md rounded-xl p-6"
          >
            <h3 className="text-3xl font-bold text-blue-700">{item.number}</h3>

            <p className="text-gray-500">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AeroplaneMovingPng;
