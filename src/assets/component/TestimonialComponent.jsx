import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const DATA = [
  { title: "Global Reach", desc: "Non-stop travel to the world's most remote airfields.", img: "https://plus.unsplash.com/premium_photo-1661963915349-d8581d7c66a4?w=600" },
  { title: "Elite Crew", desc: "Ex-military aviators with decades of flight precision.", img: "https://images.unsplash.com/photo-1714064501972-341e02222b78?w=600" },
  { title: "Secure Hangar", desc: "Private biometric access for your personal aircraft.", img: "https://plus.unsplash.com/premium_photo-1661515266973-95b312c9fcd8?w=600" },
  { title: "Aero Tech", desc: "Next-gen avionics and real-time flight tracking.", img: "https://plus.unsplash.com/premium_photo-1661515916124-1802ce3e220d?w=600" },
  { title: "Luxury Wing", desc: "Tailored interiors with Italian leather finishes.", img: "https://plus.unsplash.com/premium_photo-1661505014355-9b2db23156e4?w=600" },
];

const TestimonialComponent = () => {
  return (
    <section className=" px-[5%] min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-blue-900 text-4xl md:text-5xl font-black pb-2">CHETAK AVIATION</h2>
        <h1 className="text-blue-800 text-xl md:text-2xl font-black">ALUMNI TESTIMONIALS</h1>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={25}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Autoplay, Pagination]}
        className="w-full pb-16 [&_.swiper-pagination-bullet]:bg-white [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet-active]:rounded-full"
      >
        {DATA.map((item, index) => (
          <SwiperSlide key={index} className="h-auto ">
            <div className="group   rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:bg-white hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col bg-blue-800">
              
              <div className="h-56 relative overflow-hidden ">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div 
                  className="absolute bottom-0 left-0 w-full h-10 bg-transparent transition-colors group-hover:bg-white" 
                  style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
                />
              </div>
              
              <div className="p-8 flex-grow">
                <h3 className="text-white text-xl font-bold uppercase mb-2 transition-colors group-hover:text-blue-800">{item.title}</h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-1 transition-colors group-hover:text-blue-900/70">{item.desc}</p>
                
                <div className="flex items-center ">
                  <div className="h-[2px]  transition-all duration-500 group-hover:bg-blue-800 " />
                  <span className="text-white text-[10px] tracking-widest font-semibold text-2xl transition-colors group-hover:text-blue-800">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid autem, laboriosam similique voluptate sit cumque maxime quidem id beatae recusandae labore ipsa tenetur ipsam tempora voluptatum sed ipsum a praesentium!</span>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialComponent;