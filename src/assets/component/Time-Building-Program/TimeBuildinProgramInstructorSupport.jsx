import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function TimeBuildinProgramInstructorSupport() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 1,
        delay: index * 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Time Building Program
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Card 1 */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-blue-600 text-white shadow-xl rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Instructor Support & Supervised Flying
            </h3>

            <p className="mb-4">
              Even during hour building, professional guidance remains essential.
            </p>

            <h4 className="font-semibold mt-4">Guided Supervision</h4>
            <p>
              Experienced instructors monitor flight planning, safety procedures,
              and performance standards.
            </p>

            <h4 className="font-semibold mt-4">Performance Feedback</h4>
            <p>
              Students receive structured pre-flight briefings and post-flight
              analysis to refine techniques and eliminate errors.
            </p>

            <h4 className="font-semibold mt-4">Skill Enhancement Focus</h4>
            <p>
              We emphasize improving aircraft handling, landing precision, radio
              communication, and navigation accuracy during hour accumulation.
              This approach ensures continuous improvement rather than passive
              time logging.
            </p>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-blue-600 text-white shadow-xl rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              CPL Eligibility Completion
            </h3>

            <p className="mb-4">
              Our Time Building Program is designed to help students meet DGCA
              minimum flying hour requirements for CPL issuance.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Verification of total flight hours</li>
              <li>Cross-country hour compliance</li>
              <li>Instrument flying hour validation</li>
              <li>Logbook accuracy checks</li>
              <li>Documentation for CPL application</li>
            </ul>

            <p className="mt-4">
              By the end of the program, students are fully prepared to proceed
              confidently toward CPL skill tests and license issuance.
            </p>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-blue-600 text-white shadow-xl rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Skills Developed During Time Building
            </h3>

            <p className="mb-4">
              Accumulating flight hours significantly enhances:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Aeronautical decision-making</li>
              <li>Fuel and performance planning</li>
              <li>Situational awareness</li>
              <li>Communication with ATC</li>
              <li>Emergency preparedness</li>
              <li>Confidence in solo operations</li>
            </ul>

            <p className="mt-4">
              The more structured flying experience a pilot gains, the stronger
              their foundation for airline and commercial operations.
            </p>
          </div>

          {/* Card 4 */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="bg-blue-600 text-white shadow-xl rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Take the Next Step Toward Your CPL
            </h3>

            <p className="mb-6">
              Completing your flying hours is a critical milestone in your
              journey to becoming a commercial pilot. With structured planning,
              professional mentorship, and safety-driven training, Chetak
              Aviation ensures that your time building experience strengthens
              both competence and confidence.
            </p>

            <p className="text-xl font-semibold mb-6">
              ✈️ Build your hours. Build your future.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg">
                <a href="tel:+18667603566">Apply Now</a>
              </button>

              <Link to="/contact">
              <button className="border border-white px-6 py-3 rounded-lg cursor-pointer">
                Enquire Today
              </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default TimeBuildinProgramInstructorSupport;

