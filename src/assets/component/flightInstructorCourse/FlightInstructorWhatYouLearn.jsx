import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FlightInstructorWhatYouLearn() {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
      }
    );
  }, []);

  const data = [
    {
      title: "Principles of Flight Instruction",
      desc: "Instructional techniques, learning psychology, and structured teaching methodology.",
    },
    {
      title: "Communication & Student Handling",
      desc: "Clear explanation skills, cockpit communication, and student behavior management.",
    },
    {
      title: "Advanced Aircraft Systems",
      desc: "In-depth understanding of aircraft systems and advanced flight maneuvers.",
    },
    {
      title: "Safety & Risk Management",
      desc: "Hazard identification, risk assessment, and safety-first decision making.",
    },
    {
      title: "Pre & Post Flight Briefing",
      desc: "Professional briefing, performance review, and learning reinforcement techniques.",
    },
    {
      title: "Human Factors & Error Management",
      desc: "Understanding pilot psychology, CRM, and prevention of operational errors.",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600">
            What You Will Learn
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Our Flight Instructor Course develops not only flying expertise, but
            the professional instructional competence required to train future
            pilots safely and effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FlightInstructorWhatYouLearn;