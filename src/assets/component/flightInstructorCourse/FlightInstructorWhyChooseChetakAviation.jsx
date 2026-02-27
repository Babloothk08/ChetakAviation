
import { Link } from "react-router-dom";
import React, { useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FlightInstructorWhyChooseChetakAviation() {
  const cardRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });
      tl.from(".card-animate", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(".heading-animate", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6")
      .from(".para-animate", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .from(".btn-animate", {
        scale: 0.7,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)"
      }, "-=0.5");
       }, cardRef);

    return () => ctx.revert();

  }, []);
  return (
    <section data-aos="fade-up" className="w-full bg-blue-700 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className=" text-center text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight">
              <span className="text-white">Why Choose Chetak Aviation for</span>
              <span className="block text-blue-100">
                Flight Instructor Training?
              </span>
            </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          

          {/* LEFT — WHY CHOOSE */}
          <div className="text-white">


            

            <div className=" space-y-3  max-w-xl pb-10 pt-10">

              {[
                "Structured and professional instructor training environment",
                "Focus on teaching skills, not just flying skills",
                "Strong safety culture and aviation discipline",
                "Honest guidance and career clarity",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-700 font-bold shrink-0">
                    ✓
                  </div>
                  <p className="text-white/90 leading-relaxed font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            <p className=" text-blue-100 font-semibold  italic text-lg">
              ✈️ Train to teach. Lead with responsibility. Inspire future pilots.
            </p>

          </div>

          {/* RIGHT — ENQUIRY CTA */}
          <div
      ref={cardRef}
      className="card-animate bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-8 border border-white/20"
    >
      <h3 className="heading-animate text-2xl md:text-3xl xl:text-4xl font-extrabold text-blue-800 leading-tight">
        Enquire About the Flight Instructor Course
      </h3>

      <p className="para-animate mt-4 text-slate-600 text-lg leading-relaxed">
        Take the next step in your aviation career with Chetak Aviation’s
        Flight Instructor Course. Our team is here to guide you through
        eligibility, training structure, and career pathways.
      </p>

      <div className="mt-4">
        <Link to="/contact">
          <button className="btn-animate cursor-pointer w-full sm:w-auto px-10 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-full shadow-xl transition-all duration-300">
            Request Course Guidance
          </button>
        </Link>
      </div>
    </div>

        </div>
      </div>
    </section>
  );
}

export default FlightInstructorWhyChooseChetakAviation;


