import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "../superSlider/Commercial-Pilot-License_Course.jpg",
    title: "Precision Training",
    desc: "Experience the cockpit of a modern Boeing 737 simulator."
  },
  {
    image: "../superSlider/Conversion_Flying_Course.jpg",
    title: "Elite Mentorship",
    desc: "Learn from captains with over 20,000 flight hours."
  },
  {
    image: "../superSlider/Flight_Instructor_Course.jpg",
    title: "Modern Fleet",
    desc: "Our diamond aircraft are equipped with the latest Garmin G1000."
  },
  {
    image: "../superSlider/Private_Pilot_License_Course.jpg",
    title: "Global Reach",
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

  const slideWidth = windowWidth < 768 ? windowWidth * 0.92 : 650;

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    variableWidth: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    /* FIXED: Removed py-10 and min-h-screen centering to pull content to the top */
    <div className="w-full   pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full px-0">
        
      

        {/* Slider Section */}
        <div className="relative cursor-grab active:cursor-grabbing 
            [&_.slick-list]:overflow-visible
            [&_.slick-dots]:bottom-[-50px]
            [&_.slick-dots_li_button:before]:text-blue-500
            [&_.slick-dots_li_button:before]:text-[10px]
            [&_.slick-dots_li.slick-active_button:before]:text-white
            [&_.slick-dots_li.slick-active_button:before]:scale-[1.5]">
          
          <Slider {...settings}>
            {slides.map((slide, index) => {
              const isActive = index === activeSlide;
              
              return (
                <div 
                  key={index} 
                  className="px-2 md:px-6 py-4 md:py-10 [perspective:1200px]" 
                  style={{ width: slideWidth }} 
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1 : 0.8,
                      rotateY: isActive ? 0 : (index < activeSlide ? 25 : -25),
                      z: isActive ? 0 : -100,
                      filter: isActive ? "blur(0px) brightness(1)" : "blur(4px) brightness(0.5)",
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative h-[400px] md:h-[350px] w-[550px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-700 ${
                      isActive 
                        ? "shadow-blue-500/30 border-2 border-blue-400/40 ring-4 ring-blue-500/5" 
                        : "shadow-black/80 opacity-40"
                    }`}
                  >
                    <img 
                      src={slide.image} 
                      className="absolute inset-0 w-full h-full object-cover" 
                      alt={slide.title} 
                    />
                    
                    <div className={`absolute inset-0 transition-opacity duration-700  to-transparent ${isActive ? "opacity-95" : "opacity-60"}`} />

                    <AnimatePresence>
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-center"
                        >
                          <motion.h3 className="text-2xl md:text-5xl font-black text-white mb-2 md:mb-4 tracking-tighter">
                            {slide.title}
                          </motion.h3>
                          <motion.p className="text-blue-100 text-xs md:text-lg font-light max-w-sm md:max-w-md mx-auto italic leading-relaxed">
                            {slide.desc}
                          </motion.p>
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 md:mt-10 px-8 md:px-12 py-2.5 md:py-4 bg-blue-600 text-white text-[10px] md:text-xs font-black rounded-full shadow-xl shadow-blue-900/40 uppercase tracking-[0.2em] border border-blue-400/30"
                          >
                            Explore Now
                          </motion.button>
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
    </div>
  );
};

export default SuperFlowSlider;