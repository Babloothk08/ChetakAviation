import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PrivateLicenceWhatYouLearn() {
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
      title: "Basic Principles of Flight",
      desc: "Understanding how an aircraft flies, including lift, drag, thrust, and stability.",
    },
    {
      title: "Aircraft Systems & Performance",
      desc: "Learning how aircraft engines, instruments, and systems operate in real conditions.",
    },
    {
      title: "Air Regulations & Aviation Safety",
      desc: "DGCA rules, airspace structure, and safety procedures for responsible flying.",
    },
    {
      title: "Aviation Meteorology Fundamentals",
      desc: "Weather interpretation, wind patterns, and their impact on flight operations.",
    },
    {
      title: "Navigation & Flight Planning",
      desc: "Route planning, fuel calculations, map reading, and situational awareness.",
    },
    {
      title: "Radio Communication Procedures",
      desc: "Standard aviation phraseology and communication with Air Traffic Control (ATC).",
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
            The Private Pilot Licence (PPL) program builds a strong foundation
            in aviation knowledge and practical flying skills, preparing you
            to fly safely, confidently, and responsibly.
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

export default PrivateLicenceWhatYouLearn;