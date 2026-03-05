import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CareerPage from "/careerPage/Carrer-banner.jpg.jpeg";

import gallery1 from "/superSlider/Commercial-Pilot-License_Course.jpg";
import gallery2 from "/superSlider/Conversion_Flying_Course.jpg";
import gallery3 from "/superSlider/Flight_Instructor_Course.jpg";
import gallery4 from "/superSlider/Private_Pilot_License_Course.jpg";
import gallery5 from "/superSlider/Commercial-Pilot-License_Course.jpg";
import gallery6 from "/superSlider/Conversion_Flying_Course.jpg";

gsap.registerPlugin(ScrollTrigger);

function CareerComponent() {

  const floatingCards = useRef([]);
  const galleryRef = useRef([]);
  const careerRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    /* BUILD CAREER ANIMATION */

    gsap.from(careerRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: careerRef.current[0],
        start: "top 85%",
      },
    });

    /* FLOATING CARDS */

    floatingCards.current.forEach((card, i) => {

      gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 1,
        delay: i * 0.15,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });

      gsap.to(card, {
        y: -12,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });

    });

    /* GALLERY ANIMATION */

    gsap.from(galleryRef.current, {
      opacity: 0,
      y: 80,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: galleryRef.current[0],
        start: "top 85%",
      },
    });

  }, []);

  return (
    <div className="w-full">

      {/* HERO */}

      <div
        className="h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${CareerPage})` }}
      >
        <div className="bg-black/60 w-full h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
              Careers With Chetak Aviation
            </h1>

            <p className="text-white max-w-3xl mx-auto text-lg">
              Join a team shaping the future of aviation training in India.
            </p>

          </div>
        </div>
      </div>

      {/* BUILD YOUR CAREER */}

      <section className="py-24 px-6 bg-gray-50">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          <div>
            <h2
              ref={(el) => (careerRef.current[0] = el)}
              className="text-4xl font-bold mb-6"
            >
              Build Your Career With Us
            </h2>

            <p
              ref={(el) => (careerRef.current[1] = el)}
              className="text-gray-700 text-lg mb-6"
            >
              Chetak Aviation provides an environment where aviation
              professionals can grow, innovate, and contribute to training
              the next generation of pilots.
            </p>

            <p
              ref={(el) => (careerRef.current[2] = el)}
              className="text-gray-700 text-lg"
            >
              Our organization values safety, professionalism, and
              continuous learning.
            </p>
          </div>

          {/* FEATURE CARDS */}

          <div className="grid grid-cols-2 gap-6">

            {[
              "Global Aviation Standards",
              "Modern Training Facilities",
              "Professional Culture",
              "Career Growth",
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) => (careerRef.current[i + 3] = el)}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY WORK */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why Work With Chetak Aviation
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Professional Environment",
              "Career Growth",
              "Modern Aviation Training",
              "Experienced Mentors",
              "Innovative Culture",
              "Global Standards",
            ].map((title, i) => (
              <div
                key={i}
                ref={(el) => (floatingCards.current[i] = el)}
                className="bg-blue-600 text-white p-8 rounded-2xl shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">{title}</h3>

                <p>
                  Work with a professional aviation training team dedicated
                  to excellence and safety.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CURRENT OPPORTUNITIES */}

      <section className="py-24 px-6 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16">
            Current Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {[
              "Flight Instructors",
              "Ground School Instructors",
              "Operations Staff",
              "Administration & Student Support",
            ].map((job, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition"
              >

                <h3 className="text-xl font-semibold mb-2">{job}</h3>

                <p className="text-gray-600">
                  Join our aviation team and contribute to pilot training excellence.
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* LIFE AT CHETAK AVIATION */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-6">
            Life At Chetak Aviation
          </h2>

          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Experience the vibrant learning environment where instructors,
            students, and aviation professionals collaborate every day.
          </p>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">

            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map(
              (img, i) => (
                <div
                  key={i}
                  ref={(el) => (galleryRef.current[i] = el)}
                  className="relative overflow-hidden rounded-xl shadow-lg group"
                >

                  <img
                    src={img}
                    alt="Chetak Aviation"
                    className="w-[410px] h-[280px] object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                    <p className="text-white text-lg font-semibold">
                      Chetak Aviation
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 px-6 bg-blue-600 text-white text-center">

        <h2 className="text-4xl font-bold mb-6">
          Start Your Aviation Career With Us
        </h2>

        <p className="max-w-3xl mx-auto mb-8">
          Apply today and become part of a professional aviation training team.
        </p>

        <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold">
          Apply Now
        </button>

      </section>

    </div>
  );
}

export default CareerComponent;