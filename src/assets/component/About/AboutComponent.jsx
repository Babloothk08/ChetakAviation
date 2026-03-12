import React, { useEffect, useRef } from "react";
import AboutUs from "/aboutUsPage/Home-Page(Chetak Aviation – A Flying Training Academy).jpg.jpeg";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutComponent() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // 🔥 Heading Animation (Smooth + Premium)
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // 🔥 Paragraph + Button Stagger Animation
      gsap.from(textRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // 🔥 Image Smooth Reveal
      gsap.from(imageRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-7xl mx-auto px-6 my-16 pt-10 pb-14 rounded-4xl bg-white"
    >
      {/* Heading */}
      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl font-bold text-center text-[#ECAA05] mb-10"
      >
        Chetak Aviation – A Flying Training Academy
      </h1>

      <div className="flex flex-col md:flex-row items-center gap-14">

        {/* LEFT SIDE */}
        <div
          ref={textRef}
          className="md:w-1/2 space-y-6 max-w-lg"
        >
          <p className="text-slate-600 leading-relaxed text-lg">
            Chetak Aviation is a professional flying training academy based in Aligarh, dedicated to shaping the next generation of skilled and responsible pilots. Our academy focuses on delivering high-quality aviation education through a balanced combination of theoretical knowledge and practical flight training.
            With the guidance of experienced aviation instructors, students receive structured training designed to build strong flying fundamentals, safety awareness, and operational confidence. Our programs are developed to meet the standards of professional aviation training and help students progress toward successful careers in the aviation industry.
             At Chetak Aviation, we believe that becoming a pilot requires more than technical skills—it requires discipline, precision, and a strong sense of responsibility in the cockpit.
          </p>

          {/* <p className="text-slate-600 leading-relaxed text-lg">
            With the guidance of experienced aviation instructors, students receive structured training designed to build strong flying fundamentals, safety awareness, and operational confidence. Our programs are developed to meet the standards of professional aviation training and help students progress toward successful careers in the aviation industry.
          </p>

          <p className="text-slate-600 leading-relaxed text-lg">
            At Chetak Aviation, we believe that becoming a pilot requires more than technical skills—it requires discipline, precision, and a strong sense of responsibility in the cockpit.
          </p> */}

          {/* <Link to="/about">
            <button className="mt-4 px-6 py-3 bg-[#ECAA05] text-white rounded-xl font-semibold hover:cursor-pointer hover:bg-blue-800 transition duration-300 shadow-md hover:shadow-xl">
              Read More
            </button>
          </Link> */}
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          ref={imageRef}
          className="md:w-1/2 bg-gray-50 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition duration-500"
        >
          <img
            src={AboutUs}
            alt="about"
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutComponent;