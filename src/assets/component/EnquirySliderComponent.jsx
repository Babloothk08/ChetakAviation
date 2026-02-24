import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";


import FlightInstrutor from "/public/couroselComponent/Flight-Instructor-Course.jpg"
import PrivatePilotLicence from "/public/couroselComponent/Private-Pilot-License.jpg"
import { Link } from 'react-router-dom';

const slides = [
  {
    title: "Command the Skies with Confidence",
    subtitle: "ELITE PILOT TRAINING",
    // text: "Learn from experienced aviation professionals. Train with purpose. Fly with precision.",
    image: "/HomePageImageSlider/Home-Page(Command-the-Skies-with-Confidence)-Slider 1.jpg.jpeg"
  },
  {
    title: "Command the Skies with Confidence",
    subtitle: "GLOBAL CERTIFICATION",
    // text: "Learn from experienced aviation professionals. Train with purpose. Fly with precision.",
    image: "/HomePageImageSlider/Home-Page(Command-the-Skies-with-Confidence)-Slider 2.jpg.jpeg"
  },
  {
    title: "Command the Skies with Confidence",
    subtitle: "PROFESSIONAL EXCELLENCE",
    // text: "Learn from experienced aviation professionals. Train with purpose. Fly with precision.",
    image: "/HomePageImageSlider/Home-Page(Command-the-Skies-with-Confidence)-Slider 3.jpg.jpeg"
  },
  {
    title: "Command the Skies with Confidence",
    subtitle: "PROFESSIONAL EXCELLENCE",
    // text: "Learn from experienced aviation professionals. Train with purpose. Fly with precision.",
    image: "/HomePageImageSlider/Home-Page(Command-the-Skies-with-Confidence)-Slider 4.jpg.jpeg"
  }
];

const NextArrow = ({ onClick }) => (
  <button 
    className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-blue-600 text-white rounded-full backdrop-blur-md transition-all border border-white/20 group shadow-lg"
    onClick={onClick}
  >
    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button 
    className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-blue-600 text-white rounded-full backdrop-blur-md transition-all border border-white/20 group shadow-lg"
    onClick={onClick}
  >
    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
  </button>
);

function EnquirySliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(0.25, 1, 0.5, 1)",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div data-aos="fade-up" className="w-full bg-slate-50 py-12">
      <div className="max-w-350 mx-auto px-4">
        <div className="relative h-125 md:h-162.5 overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10 border border-gray-200">
          <Slider {...settings}>
            {slides.map((slide, i) => (
              <div key={i} className="relative h-125 md:h-162.5 outline-none">
                
                <div className="absolute inset-0">
                  <img src={slide.image} className="w-[1370px] h-[650px] object-cover" alt="Aviation Training" />
                  <div className="absolute inset-0 bg-linear-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
                </div>

                <div className="relative h-full flex items-center px-8 md:px-24">
                  <div className="max-w-2xl text-white md:pt-80">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <span className="h-0.5 w-12 bg-blue-500"></span>
                        <span className="text-blue-400 font-bold tracking-[0.3em] text-xs md:text-sm uppercase">
                          {slide.subtitle}
                        </span>
                      </div>

                      <h2 className="text-2xl md:text-4xl font-extrabold mb-8 leading-[1.1] tracking-tight text-white">
                        {slide.title}
                      </h2>

                      <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-lg font-light leading-relaxed">
                        {slide.text}
                      </p>

                      <div className="flex flex-wrap gap-5">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-600/20 active:scale-95 cursor-pointer">
                          <Link to="/contact">Enquire Now</Link>
                        </button>
                        
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .slick-dots { bottom: 40px !important; }
        .slick-dots li { margin: 0 6px; }
        .slick-dots li button:before {
          content: '' !important;
          width: 12px;
          height: 6px;
          background: white;
          border-radius: 10px;
          opacity: 0.3;
          transition: all 0.4s ease;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          background: #3b82f6;
          width: 30px;
        }
      `}</style>
    </div>
  );
}

export default EnquirySliderComponent;