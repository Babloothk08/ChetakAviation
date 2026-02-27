
import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ConversionFlyingWhyChooseChetakAviation() {

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const leftItemsRef = useRef([]);
  const taglineRef = useRef(null);
  const imageRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !leftItemsRef.current.includes(el)) {
      leftItemsRef.current.push(el);
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
          invalidateOnRefresh: true
        }
      });

      // Heading
      tl.from(headingRef.current, {
        y: 60,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Tagline
      tl.from(taglineRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 0.8
      }, "-=0.6");

      // Left cards stagger
      tl.from(leftItemsRef.current, {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.6");

      // Right image animation
      tl.from(imageRef.current, {
        x: 80,
        scale: 0.9,
        autoAlpha: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1");

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-blue-700 py-20 md:py-15">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <h2
          ref={headingRef}
          className="text-center text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight"
        >
          <span className="text-white">Why Choose Chetak Aviation for</span>
          <span className="block text-blue-100">
            Conversion Flying?
          </span>
        </h2>
        

        <p
          ref={taglineRef}
          className="text-blue-100 text-center font-semibold italic text-lg pt-5"
        >
          ✈️ Train to teach. Lead with responsibility. Inspire future pilots.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-10">

          {/* LEFT SIDE */}
          <div className="text-white">
            <div className="space-y-3 max-w-xl pb-10 pt-10">
              {[
                "Structured and professional instructor training environment",
                "Focus on teaching skills, not just flying skills",
                "Strong safety culture and aviation discipline",
                "Honest guidance and career clarity",
              ].map((item, index) => (
                <div
                  ref={addToRefs}
                  key={index}
                  className="flex items-start gap-5 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20"
                >
                  <div className="w-10 h-8 flex items-center justify-center rounded-full bg-white text-blue-700 font-bold shrink-0">
                    ✓
                  </div>
                  <p className="text-white/90 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <img
              ref={imageRef}
              src="/course/courseSuperSlider/Course-Page(Course-Slider)-1.jpg.jpeg"
              alt="Flight Instructor Training"
              className="rounded-2xl h-[300px] w-full object-cover shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ConversionFlyingWhyChooseChetakAviation;