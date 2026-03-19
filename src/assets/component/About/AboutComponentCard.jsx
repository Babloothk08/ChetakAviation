import React from 'react';
import { motion } from 'framer-motion';

function AboutComponentCard() {
  const cards = [
    {
      title: "PASSION FOR AVIATION",
      img: "https://www.embraer.com/media/lqfphzwa/phenom-300e_exterior_5.jpg?v=1dbafa4b3f7f230",
      desc: "Our DNA is built on the thrill of flight. We push boundaries to ensure every takeoff is a masterpiece of engineering and human ambition."
    },
    {
      title: "READY FOR THE FUTURE",
      img: "/aboutUsPage/AHistoryofAchievements1.jpg.jpeg",
      desc: "Innovation isn't just a word; it's our flight path. We are pioneering sustainable aviation and next-generation cockpit technologies."
    },
    {
      title: "CUSTOMER CENTRIC",
      img: "https://www.embraer.com/media/znhfj3be/embraer-ethos.jpg?v=1db2e93bc7c6220",
      desc: "We don't just deliver aircraft; we build partnerships. Our global support network ensures your fleet stays in the sky, where it belongs."
    }
  ];

  return (
    <div className='py-5 bg-gray-100 px-6 md:px-12 lg:px-24 cursor-pointer'>
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className='text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight'
        >
          A History of <span className="text-blue-600">Achievements</span>
        </motion.h1>
        <p className="text-slate-500 text-lg leading-relaxed">
          Founded in 2021, we have spent more than five decades delivering over 500 aircraft 
          to more than 100 countries. We design unique DNA into every model we certify.
        </p>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto'>
        {cards.map((card, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className='group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl shadow-blue-900/5 transition-all duration-500'
          >
            {/* Image Container with Zoom effect */}
            <div className="h-64 overflow-hidden relative">
              <img 
                src={card.img} 
                alt={card.title} 
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>

            {/* Text Content */}
            <div className='p-8'>
              <div className="w-12 h-1 bg-blue-600 mb-6 rounded-full group-hover:w-20 transition-all duration-500" />
              <h2 className='text-xl font-bold text-slate-900 mb-4 tracking-wide group-hover:text-blue-600 transition-colors'>
                {card.title}
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm font-light">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AboutComponentCard;