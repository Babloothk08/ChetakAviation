import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ConversionFlyingCourseOverview() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-10 bg-gradient-to-br from-slate-100 via-white to-blue-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          ref={cardRef}
          className="relative backdrop-blur-xl bg-white/70 border border-slate-200 shadow-2xl rounded-[3rem] overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 items-center">

            {/* LEFT IMAGE SIDE */}
            <div className="relative h-[450px] lg:h-full">
              <img
                src="/course/conversionFlying/Professional_Transition_Through_Conversion_Flying.jpg"
                alt="Conversion Flying Training"
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT CONTENT SIDE */}
            <div className="p-12">

              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
                Professional Transition Through
                <span className="block text-blue-600 mt-2">
                  Conversion Flying
                </span>
              </h1>

              <div className="w-20 h-1 bg-blue-600 mt-6 rounded-full"></div>

              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                The Conversion Flying program bridges the gap between
                previous flying experience and new operational requirements.
                Whether transitioning between aircraft types or aligning
                with DGCA standards, our structured training ensures a smooth,
                professional upgrade.
              </p>

              <p className="mt-6 text-slate-600 text-lg leading-relaxed">
                Conducted with a strong emphasis on safety, systems knowledge,
                and operational discipline, the program prepares pilots for
                confident and seamless aircraft transitions.
              </p>

              <button className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-all duration-300">
                Explore Program
              </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ConversionFlyingCourseOverview;