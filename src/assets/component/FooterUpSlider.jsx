import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaPhoneAlt, FaTags, FaGlobeAmericas, FaUserCheck, FaClock, FaShieldAlt, FaTrain, FaGem } from 'react-icons/fa';

const features = [
  { icon: <FaPhoneAlt />, title: "Instant Booking", desc: "Book in minutes" },
  { icon: <FaTags />, title: "Best Prices", desc: "Lowest rates" },
  { icon: <FaGlobeAmericas />, title: "Global Reach", desc: "Nationwide" },
  { icon: <FaUserCheck />, title: "Trusted Service", desc: "100k+ Clients" },
  { icon: <FaClock />, title: "24/7 Support", desc: "Always active" },
  { icon: <FaShieldAlt />, title: "Secure Pay", desc: "100% Protected" },
//   { icon: <FaTrain />, title: "Premium Rail", desc: "Elite Comfort" },
  { icon: <FaGem />, title: "Luxury Class", desc: "Special Quota" },
];

function FooterUpSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000, // Movement ki smooth speed
    autoplaySpeed: 0, // Continuous movement ke liye 0 rakhein
    cssEase: "linear", // Jhatke ke bina smooth chalne ke liye
    arrows: false,
    pauseOnHover: true,
    rtl: false, // Isko false hi rakhein kyunki animation 'linear' hai toh left side move hoga
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="w-full bg-blue-600 py-6 border-y border-white/10 shadow-2xl overflow-hidden">
      <div className="max-w-[100vw]">
        <Slider {...settings} className="footer-slider">
          {features.map((item, index) => (
            <div key={index} className="px-4 outline-none">
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 md:p-4 rounded-2xl backdrop-blur-sm transition-all hover:bg-white/50 cursor-pointer">
                {/* Icon Container */}
                <div className=" bg-white text-blue-600 p-3 rounded-xl shadow-lg text-xl">
                  {item.icon}
                </div>

                {/* Text Content */}
                <div className="flex flex-col min-w-0 " >
                  <h1 className="text-white font-black uppercase tracking-tighter text-sm md:text-base truncate">
                    {item.title}
                  </h1>
                  <p className="text-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-80 truncate">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default FooterUpSlider;