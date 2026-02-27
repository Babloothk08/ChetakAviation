import React, { useEffect, useRef } from "react";
import FlyingTraining from "/aboutUsPage/Chetak-Aviation-–-A-Flying-Training-Academy.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutComponentContent() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading Animation
      gsap.from(".about-heading", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Paragraph stagger animation
      gsap.from(".about-para", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Image reveal animation
      gsap.from(".about-image", {
        x: 100,
        opacity: 0,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Subtle parallax on image
      gsap.to(".about-image img", {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col-reverse md:flex-row items-center gap-16">

          {/* TEXT */}
          <div className="w-full md:w-1/2 space-y-6">

            <h1 className="about-heading text-3xl md:text-5xl font-extrabold text-blue-900 leading-tight">
              Chetak Aviation – A Flying Training Academy
            </h1>

            <div className="space-y-5 text-gray-600 text-base md:text-lg leading-relaxed">

              <p className="about-para">
                Chetak Aviation is a professionally managed flying training academy
                dedicated to shaping the next generation of skilled, disciplined,
                and safety-conscious pilots. Located in Aligarh, we provide structured
                aviation education that combines strong theoretical foundations with
                practical, real-world flight training.
              </p>

              <p className="about-para">
                As aviation professionals, we understand that becoming a pilot is not
                just about flying an aircraft—it is about decision-making,
                responsibility, precision, and discipline. Our training philosophy is
                built around these core aviation values.
              </p>

              <p className="about-para">
                We focus on DGCA-oriented ground training, in-depth subject clarity,
                and professional guidance at every stage.
              </p>

              

            </div>

          </div>

          {/* IMAGE */}
          <div className="about-image relative z-10 
                w-full 
                max-w-md md:max-w-lg 
                aspect-video md:aspect-square 
                lg:h-[500px] 
                mx-auto 
                overflow-hidden 
                rounded-3xl 
                shadow-2xl 
                border border-white/60 
                bg-white">

            <img 
              src={FlyingTraining}
              alt="Chetak Aviation Training"
              className="h-full w-full object-cover scale-110"
            />

            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutComponentContent;