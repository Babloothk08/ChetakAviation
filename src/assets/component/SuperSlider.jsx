import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/course/courseSuperSlider/Course-Page(Course-Slider)-1.jpg.jpeg",
    // title: "Precision Training",
    desc: "Experience the cockpit of a modern Boeing 737 simulator."
  },
  {
    image: "/course/courseSuperSlider/Course-Page(Course-Slider)-2.jpg.jpeg",
    // title: "Elite Mentorship",
    desc: "Learn from captains with over 20,000 flight hours."
  },
  {
    image: "/course/courseSuperSlider/Course-Page(Course-Slider)-3.jpg.jpeg",
    // title: "Modern Fleet",
    desc: "Our diamond aircraft are equipped with the latest Garmin G1000."
  },
  {
    image: "/course/courseSuperSlider/Course-Page(Course-Slider)-4.jpg.jpeg",
    // title: "Global Reach",
    desc: "Certifications recognized by EASA, FAA, and DGCA."
  }
];

const SuperFlowSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🔹 FIXED: Responsive Width Logic
  const getSlideWidth = () => {
    if (windowWidth < 640) return windowWidth - 40; // Mobile
    if (windowWidth < 1024) return 500; // Tablet
    return 750; // Desktop
  };

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: windowWidth < 768 ? "20px" : "0px",
    slidesToShow: 1,
    variableWidth: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <div className="w-full bg-white py-10 md:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="relative slick-custom-style">
          <Slider {...settings}>
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;
              
              return (
                <div data-aos="fade-up"
                  key={index} 
                  className="px-2 md:px-10 outline-none" 
                  style={{ width: getSlideWidth() }} 
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      rotateY: isActive ? 0 : (index < activeSlide ? 15 : -15),
                      filter: isActive ? "brightness(1)" : "brightness(0.4) blur(2px)",
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`relative h-[300px] sm:h-[400px] md:h-[450px] w-full rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl transition-all ${
                      isActive ? "ring-2 ring-blue-500/20" : ""
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      className="absolute inset-0 w-[670px] h-[450px] object-cover" 
                      alt={slide.title} 
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 40 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute inset-0 flex flex-col justify-end p-6 md:p-16 text-center"
                        >
                          
                          <p className="text-blue-100 text-[10px] md:text-lg font-medium max-w-lg mx-auto mb-6 md:mb-10 line-clamp-2 md:line-clamp-none">
                            {slide.desc}
                          </p>
                          <div>
                            <motion.button 
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className=""
                            >
                            <a href="tel:+18667603566" className='px-6 md:px-10 py-3 md:py-4 bg-blue-600 text-white text-[10px] md:text-xs font-black rounded-full shadow-xl shadow-blue-600/40 uppercase tracking-widest border border-blue-400/50 cursor-pointer'>
                              Explore Course
                            </a>
                             </motion.button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>

      {/* 🔹 FIXED: Slick Dots Responsiveness */}
      <style jsx global>{`
        .slick-custom-style .slick-list {
          overflow: visible !important;
        }
        .slick-custom-style .slick-dots {
          bottom: -40px;
        }
        .slick-custom-style .slick-dots li button:before {
          color: #3b82f6 !important;
          font-size: 8px;
        }
        .slick-custom-style .slick-dots li.slick-active button:before {
          color: #1e3a8a !important;
          transform: scale(1.5);
        }
      `}</style>
    </div>
  );
};

export default SuperFlowSlider;