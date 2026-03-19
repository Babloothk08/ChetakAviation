import React, { useEffect, useRef } from "react";
import WhyChetakAviation from "/aboutUsPage/Why-Choose-Chetak-Aviation.jpg";
import { FiPhoneCall, FiUsers, FiClock, FiStar, FiAward } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WhyChooseChetakAviation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Image animation
      gsap.from(".image-box", {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Stats cards stagger animation
      gsap.from(".stat-card", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // CTA animation
      gsap.from(".cta-box", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900">
            Why Students Choose Chetak Aviation
          </h2>
          <p className="mt-5 text-black/70 text-base md:text-lg leading-relaxed">
            Aviation training guided by experience, discipline, and a clear
            professional vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center image-box">
            <div className="relative w-full max-w-lg h-[520px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group">

              <img
                src={WhyChetakAviation}
                alt="Chetak Aviation Training"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-10">

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <div className="stat-card bg-slate-500 p-8 rounded-3xl shadow-xl">
                <FiUsers className="text-white text-3xl mb-4" />
                <h2 className="text-4xl font-black text-white">500+</h2>
                <p className="text-slate-200 text-xs uppercase tracking-widest">
                  Trained Students
                </p>
              </div>

              <div className="stat-card bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <FiAward className="text-3xl mb-4" />
                <h2 className="text-4xl font-black">5+</h2>
                <p className="text-xs uppercase tracking-widest">
                  Years Experience
                </p>
              </div>

              <div className="stat-card bg-white p-8 rounded-3xl shadow-xl">
                <FiClock className="text-blue-600 text-3xl mb-4" />
                <h2 className="text-4xl font-black text-slate-800">24/7</h2>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Student Support
                </p>
              </div>

              <div className="stat-card bg-slate-50 p-8 rounded-3xl shadow-xl">
                <FiStar className="text-blue-600 text-3xl mb-4" />
                <h2 className="text-4xl font-black text-slate-700">100%</h2>
                <p className="text-xs uppercase tracking-widest text-slate-400">
                  Success Rate
                </p>
              </div>

            </div>

            {/* CTA */}
            <div className="cta-box bg-blue-50 border border-blue-100 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">

              <a
                href="tel:+8923836664"
                className="px-10 py-4 bg-blue-600 hover:bg-blue-800 text-white font-bold uppercase text-xs rounded-full transition-all duration-300 hover:shadow-2xl"
              >
                Contact Chetak Aviation
              </a>

              <div className="flex items-center gap-4">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <FiPhoneCall className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className=" text-center text-xs uppercase text-slate-500 font-semibold">
                    Quick Connect
                  </p>
                  <p className="font-black text-slate-900">
                    +8923836664
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseChetakAviation;