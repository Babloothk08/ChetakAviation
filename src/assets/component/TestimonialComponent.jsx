import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const DATA = [
  { title: "Aman Sharma", desc: "Commercial Pilot Trainee", para:"Chetak Aviation gave me a strong foundation in aviation theory and discipline.",  img: "/HomePageTestimonial/Home-Page(TESTIMONIALS)-Slider 1.jpg.jpeg" },

  { title: "Rohit Verma", desc: "Aspiring Airline Pilot", para:"The structured teaching approach and personal attention made learning easier.",  img: "/HomePageTestimonial/Home-Page(TESTIMONIALS)-Slider 2.jpg.jpeg" },

  { title: "Ghanish", desc: "CPL Ground Training Student", para:"Professional environment where instructors train you to think like a pilot.", img: "/HomePageTestimonial/Home-Page(TESTIMONIALS)-Slider 3.jpg.jpeg" },

  { title: "Shashank", desc: "Pilot Training Candidate",  para:"Honest guidance and practical training aligned with DGCA standards.", img: "/HomePageTestimonial/Home-Page(TESTIMONIALS)-Slider 4.jpg.jpeg" },

  { title: "Rohit Kumar", desc: "Aviation Student", para:"Strong discipline and safety-focused learning culture.", img: "/HomePageTestimonial/Home-Page(TESTIMONIALS)-Slider 5.jpg.jpeg" },
];

function TestimonialComponent() {

  const sliderRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.to(".slider-track", {
        xPercent: -50,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

    }, sliderRef);

    return () => ctx.revert();

  }, []);

  return (
    <section ref={sliderRef} className="px-[5%] overflow-hidden my-20">

      <div className="text-center mb-12">
        <h2 className="text-blue-900 text-4xl md:text-5xl font-black pb-2">
          CHETAK AVIATION
        </h2>
        <h1 className="text-blue-800 text-xl md:text-2xl font-black">
          TESTIMONIALS
        </h1>
      </div>

      <div className="overflow-hidden">

        {/* track */}
        <div className="slider-track flex gap-6 w-max">

          {[...DATA, ...DATA].map((item, index) => (

            <div
              key={index}
              className="w-[380px] bg-[#103057] rounded-3xl overflow-hidden flex-shrink-0"
            >

              {/* image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* text */}
              <div className="p-4">

                <h3 className="text-white text-xl font-bold uppercase mb-2">
                  {item.title}
                </h3>

                <p className="text-blue-100 text-sm mb-3">
                  {item.desc}
                </p>

                <p className="text-white text-sm leading-relaxed">
                  {item.para}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default TestimonialComponent;