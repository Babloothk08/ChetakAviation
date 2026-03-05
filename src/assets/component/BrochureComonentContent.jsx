import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "/superSlider/Commercial-Pilot-License_Course.jpg";
import img2 from "/superSlider/Conversion_Flying_Course.jpg";
import img3 from "/superSlider/Flight_Instructor_Course.jpg";
import img4 from "/superSlider/Private_Pilot_License_Course.jpg";
import img5 from "/superSlider/Commercial-Pilot-License_Course.jpg";
import img6 from "/superSlider/Conversion_Flying_Course.jpg";
import img7 from "/superSlider/Flight_Instructor_Course.jpg";
import img8 from "/superSlider/Private_Pilot_License_Course.jpg";

gsap.registerPlugin(ScrollTrigger);

function BrochureComonentContent() {

  const sectionRef = useRef([]);
  const cardRef = useRef([]);
  const imageRef = useRef([]);

  useEffect(() => {

    /* SECTION TEXT ANIMATION */

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 70,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current[0],
        start: "top 85%",
      },
    });

    /* CARD ANIMATION */

    cardRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        y: 80,
        duration: 1,
        delay: i * 0.2,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });
    });

    /* IMAGE ANIMATION */

    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: imageRef.current[0],
        start: "top 85%",
      },
    });

  }, []);

  return (
    <div className="w-full bg-gray-50">

      {/* BROCHURE INTRO */}

      <section className="py-24 px-6 text-center">

        <div className="max-w-5xl mx-auto">

          <h1
            ref={(el) => (sectionRef.current[0] = el)}
            className="text-4xl text-blue-800 md:text-5xl font-bold mb-6"
          >
            Aviation Training Brochure
          </h1>

          <p
            ref={(el) => (sectionRef.current[1] = el)}
            className="text-lg text-gray-600"
          >
            Discover the professional pilot training programs offered by
            Chetak Aviation. Our brochure provides an overview of courses,
            facilities, and career pathways designed to prepare students for
            successful aviation careers.
          </p>

        </div>

      </section>

      {/* BROCHURE HIGHLIGHTS */}

      <section className="py-16 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

          {[
            "DGCA Approved Training Standards",
            "Modern Aircraft & Simulation Facilities",
            "Professional Instructor Guidance",
          ].map((item, i) => (

            <div
              key={i}
              ref={(el) => (cardRef.current[i] = el)}
              className="bg-white p-10 rounded-2xl shadow-lg text-center"
            >

              <h3 className="text-xl font-semibold mb-4 text-blue-700">{item}</h3>

              <p className="text-gray-600">
                Our programs are designed to deliver professional aviation
                training that meets global industry standards.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* BROCHURE STYLE IMAGE CONTENT */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto space-y-24">

          {/* SECTION 1 */}

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <img
              ref={(el) => (imageRef.current[0] = el)}
              src={img1}
              className="rounded-xl shadow-xl w-[550px] h-[340px]"
            />

            <div>

              <h2 className="text-3xl font-bold mb-4 text-blue-800">
                Commercial Pilot License
              </h2>

              <p className="text-gray-600 mb-4">
                Our CPL program provides comprehensive theoretical and flight
                training required to become a professional airline pilot.
              </p>

              <p className="text-gray-600">
                Students gain hands-on experience with modern aircraft while
                building the required flight hours under expert supervision.
              </p>

            </div>

          </div>

          {/* SECTION 2 */}

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-3xl font-bold mb-4 text-blue-800">
                Flight Instructor Training
              </h2>

              <p className="text-gray-600 mb-4">
                The Flight Instructor Rating course prepares experienced pilots
                to train and mentor the next generation of aviators.
              </p>

              <p className="text-gray-600">
                This program develops advanced flying techniques and teaching
                skills required for aviation instruction.
              </p>

            </div>

            <img
              ref={(el) => (imageRef.current[1] = el)}
              src={img3}
              className="rounded-xl shadow-xl"
            />

          </div>

        </div>

      </section>

      {/* BROCHURE GALLERY */}

      <section className="py-24 px-6 bg-gray-50">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-16 text-blue-800">
            Training Environment
          </h2>

          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">

            {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, i) => (

              <div
                key={i}
                ref={(el) => (imageRef.current[i + 2] = el)}
                className="overflow-hidden rounded-xl shadow-lg"
              >

                <img
                  src={img}
                  className="w-[315px] h-[200px] object-cover hover:scale-110 transition duration-500"
                />

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BROCHURE CTA */}

      <section className="py-24 px-6 bg-blue-600 text-white text-center">

        <h2 className="text-4xl font-bold mb-6">
          Download Our Full Aviation Brochure
        </h2>

        <p className="max-w-3xl mx-auto mb-10">
          Explore detailed course structures, facilities, and career pathways
          by downloading the official Chetak Aviation training brochure.
        </p>

        <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold">
          Download Brochure
        </button>

      </section>

    </div>
  );
}

export default BrochureComonentContent;