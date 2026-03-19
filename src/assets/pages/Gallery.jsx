import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



import gallery1 from "/careerPage/Career-Page-Life-At-Chetak-Aviation.jpg";
import gallery2 from "/careerPage/Life-At-ChetakAviationOne.jpeg";
import gallery3 from "/careerPage/Life-At-Chetak-AviationTwo.jpeg";
import gallery4 from "/careerPage/Life-At-Chetak-AviationThree.jpeg";
import gallery5 from "/careerPage/Life-At-Chetak-AviationFour.jpeg";
import gallery6 from "/careerPage/Life-At-Chetak-AviationFive.jpeg";
import GalleryBanner from "../component/GalleryBanner";

gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  const galleryRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

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
      <GalleryBanner/>

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-6 text-[#ECAA05]">
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
                  className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
                >

                  <img
                    src={img}
                    alt="Chetak Aviation"
                    className="[410px] h-[280px] object-cover group-hover:scale-110 transition duration-700 "
                  />

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">

                    <p className="text-white text-lg font-semibold">
                      
                    </p>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

      </section>

      <section className="py-24 px-6 bg-blue-600 text-white text-center">

        <h2 className="text-4xl font-bold mb-6">
          Start Your Aviation Career With Us
        </h2>

        <p className="max-w-3xl mx-auto mb-8">
          Apply today and become part of a professional aviation training team.
        </p>

        <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold">
          <a href="tel:+8923836664">Apply Now</a>
        </button>

      </section>
      
    </div>
  );
}

export default Gallery;
