import React from "react";
import FlyingTraining from "/public/aboutUsPage//Chetak-Aviation-A-Flying-Training-Academy.jpg"

function AboutComponentContent() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* TEXT CONTENT */}
          <div className="w-full md:w-1/2 space-y-5">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
              Chetak Aviation – A Flying Training Academy
            </h1>

            <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed">
              <p>
                Chetak Aviation is a professionally managed flying training academy
                dedicated to shaping the next generation of skilled, disciplined,
                and safety-conscious pilots. Located in Aligarh, we provide structured
                aviation education that combines strong theoretical foundations with
                practical, real-world flight training.
              </p>

              <p>
                As aviation professionals, we understand that becoming a pilot is not
                just about flying an aircraft—it is about decision-making,
                responsibility, precision, and discipline. Our training philosophy is
                built around these core aviation values.
              </p>

              <p>
                We focus on DGCA-oriented ground training, in-depth subject clarity,
                and professional guidance at every stage. Our programs prepare
                students for commercial pilot training, airline readiness, and
                long-term aviation careers.
              </p>

              <p>
                With small batch teaching, personal mentorship, and experienced
                instructors, Chetak Aviation provides the academic strength and
                confidence required to succeed in aviation.
              </p>
            </div>

            {/* OPTIONAL CTA */}
            {/* 
            <button className="mt-6 inline-block px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-lg font-semibold transition">
              Enquiry Today
            </button> 
            */}
          </div>

          {/* IMAGE */}
          <div className="relative z-10 
                w-full 
                max-w-md md:max-w-lg 
                aspect-video md:aspect-square 
                lg:h-[480px] 
                mx-auto 
                overflow-hidden 
                rounded-3xl 
                shadow-xl 
                border border-white/60 
                bg-white">

  <img 
    src={FlyingTraining}
    alt="Chetak Aviation Training"
    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
  />

  {/* Overlay Badge */}
  
</div>


        </div>
      </div>
    </section>
  );
}

export default AboutComponentContent;
