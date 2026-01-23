import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const DATA = [
  { title: "Aman Sharma", desc: "Commercial Pilot Trainee", para:"Chetak Aviation gave me a strong foundation in aviation theory and discipline. The instructors focus on concept clarity and DGCA requirements, which helped me gain confidence before moving into advanced flight training.",  img: "https://plus.unsplash.com/premium_photo-1661963915349-d8581d7c66a4?w=600" },

  { title: "Rohit Verma", desc: "Aspiring Airline Pilot", para:"The structured teaching approach and personal attention at Chetak Aviation made a huge difference in my learning. Complex subjects were explained clearly, and doubts were always addressed with patience and professionalism.",  img: "https://images.unsplash.com/photo-1714064501972-341e02222b78?w=600" },

  { title: "Nikhil Singh", desc: "CPL Ground Training Student", para:"What I appreciated most was the professional environment. The instructors don’t just teach for exams—they train you to think like a pilot. This mindset has been extremely valuable in my aviation journey.", img: "https://plus.unsplash.com/premium_photo-1661515266973-95b312c9fcd8?w=600" },

  { title: "Aditya Kumar", desc: "Pilot Training Candidate",  para:"Chetak Aviation helped me understand the realities of pilot training and career progression. The guidance I received was honest, practical, and aligned with DGCA standards.", img: "https://plus.unsplash.com/premium_photo-1661515916124-1802ce3e220d?w=600" },

  { title: "Vivek Mishra", desc: "Aviation Student", para:"The academy maintains strong discipline and a safety-focused learning culture. It prepared me academically and mentally for the responsibilities that come with professional aviation.", img: "https://plus.unsplash.com/premium_photo-1661505014355-9b2db23156e4?w=600" },
];

const TestimonialComponent = () => {
  return (
    <section data-aos="fade-out" className=" px-[5%] h-[75vh] flex flex-col justify-center overflow-hidden my-20">
      <div className="text-center mb-12">
        <h2 className="text-blue-900 text-4xl md:text-5xl font-black pb-2">CHETAK AVIATION</h2>
        <h1 className="text-blue-800 text-xl md:text-2xl font-black">TESTIMONIALS</h1>
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
                  <span className="text-white text-[10px] tracking-widest font-semibold text-2xl transition-colors group-hover:text-blue-800">{item.para}</span>
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