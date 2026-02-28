import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CommercialPilotWhatYouLearn() {
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
      title: "Air Regulations",
      desc: "Complete understanding of DGCA rules and aviation compliance.",
    },
    {
      title: "Advanced Navigation",
      desc: "Radio navigation, route planning and operational techniques.",
    },
    {
      title: "Meteorology",
      desc: "Weather systems interpretation for safe commercial flying.",
    },
    {
      title: "Aircraft Systems",
      desc: "Engines, performance and aircraft technical operations.",
    },
    {
      title: "Flight Planning",
      desc: "Fuel planning, alternates and regulatory procedures.",
    },
    {
      title: "Human Factors",
      desc: "Crew coordination, decision-making and risk management.",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600">
            What You Will Learn
          </h2>
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

export default CommercialPilotWhatYouLearn;