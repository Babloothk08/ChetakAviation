import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function LatestAnnouncement() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          setIsVisible(true);

          gsap.fromTo(
            leftRef.current.children,
            { opacity: 0, x: -60 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            }
          );

          gsap.fromTo(
            rightRef.current.children,
            { opacity: 0, x: 60 },
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            }
          );

          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#103057] py-20 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-bold text-[#ECAA05] mb-16">
          Why Choose Chetak Aviation for Pilot Training
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-14">

          {/* LEFT */}
          <div ref={leftRef} className="space-y-3">

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h2 className="text-white font-semibold text-xl">
                Experienced Flight Instructors
              </h2>
              <p className="text-gray-300 mt-2">
                Learn from qualified aviation professionals with real flying
                experience and strong instructional expertise.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h2 className="text-white font-semibold text-xl">
                Structured DGCA-Aligned Training
              </h2>
              <p className="text-gray-300 mt-2">
                Our programs follow professional aviation training standards
                to prepare students for real cockpit responsibilities.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h2 className="text-white font-semibold text-xl">
                Hands-On Flying Experience
              </h2>
              <p className="text-gray-300 mt-2">
                Students gain practical exposure through supervised flights,
                navigation training, and operational procedures.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h2 className="text-white font-semibold text-xl">
                Safety-First Training Environment
              </h2>
              <p className="text-gray-300 mt-2">
                Safety and discipline remain the foundation of every training
                session at Chetak Aviation.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <h2 className="text-white font-semibold text-xl">
                Career-Focused Pilot Training
              </h2>
              <p className="text-gray-300 mt-2">
                Our training approach is designed to help aspiring pilots build
                the skills required for professional aviation careers.
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div ref={rightRef} className="space-y-6">

            <div>
              <h1 className="text-white text-2xl md:text-3xl font-bold">
                Your Journey to Become a Professional Pilot
              </h1>
              <p className="text-gray-300 mt-3">
                At Chetak Aviation, we guide aspiring pilots through every
                stage of their aviation journey. From foundational training to
                advanced flight experience, our structured programs help
                students develop the skills, discipline, and confidence
                required for professional aviation careers.
              </p>
            </div>

            <div>
              <h2 className="text-[#ECAA05] font-semibold text-xl">
                Step 1 – Enroll in Pilot Training
              </h2>
              <p className="text-gray-300">
                Start your aviation journey by enrolling in professional flight
                training programs such as PPL or CPL.
              </p>
            </div>

            <div>
              <h2 className="text-[#ECAA05] font-semibold text-xl">
                Step 2 – Ground School Training
              </h2>
              <p className="text-gray-300">
                Students learn aviation subjects including aerodynamics,
                navigation, aviation regulations, meteorology, and flight
                planning.
              </p>
            </div>

            <div>
              <h2 className="text-[#ECAA05] font-semibold text-xl">
                Step 3 – Practical Flight Training
              </h2>
              <p className="text-gray-300">
                Under supervision of instructors, students gain hands-on flying
                experience through dual and solo flight sessions.
              </p>
            </div>

            <div>
              <h2 className="text-[#ECAA05] font-semibold text-xl">
                Step 4 – Build Flying Hours
              </h2>
              <p className="text-gray-300">
                Pilots complete required flying hours through time building and
                cross-country training.
              </p>
            </div>

            <div>
              <h2 className="text-[#ECAA05] font-semibold text-xl">
                Step 5 – Earn Your Pilot Licence
              </h2>
              <p className="text-gray-300">
                After completing requirements and skill tests, students receive
                their pilot licence and become eligible for aviation careers.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LatestAnnouncement;