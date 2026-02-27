import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "What courses does Chetak Aviation offer?", a: "Chetak Aviation offers DGCA-oriented aviation ground training for aspiring pilots, covering core subjects such as Air Regulations, Aviation Meteorology, Air Navigation, and Aircraft Technical Knowledge. Our courses are designed to build a strong academic foundation required for commercial pilot training and further flying education." },
  { q: "Is Chetak Aviation suitable for beginners with no aviation background?", a: "Yes, Chetak Aviation is ideal for students with no prior aviation experience. Our training begins with fundamental aviation concepts and gradually progresses to advanced topics, ensuring students develop clarity, confidence, and discipline from the very beginning of their pilot training journey." },
  { q: " Does Chetak Aviation provide DGCA-oriented training?", a: "Yes, all training at Chetak Aviation is aligned with DGCA syllabus and examination requirements. We focus on conceptual understanding, exam preparation, and regulatory awareness to help students meet DGCA standards and prepare for future flight training." },
  { q: "What qualifications are required to join Chetak Aviation?", a: "Students who have completed 10+2 with Physics and Mathematics are eligible to begin pilot ground training at Chetak Aviation. Our instructors also guide students on medical requirements, licensing pathways, and the overall process of becoming a professional pilot." },
 
  
];

function QuestionsComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div data-aos="fade-up" className='min-h-50% max-w-6xl mx-auto px-6 pb-10 text-white'>
      <h1 className='text-4xl md:text-5xl text-center pb-5 font-black text-blue-600 tracking-tighter uppercase leading-tight'>
            Frequently Asked <span className="text-slate-500 italic">Questions</span> (FAQ)
          </h1>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-slate-800/50 border border-white/10 rounded-2xl p-6 h-fit cursor-pointer hover:border-blue-500/50 transition-colors"
            onClick={() => toggleQuestion(index)}
          >
            <div className="flex justify-between items-center gap-4">
              <h2 className='font-bold text-lg md:text-xl'>Q. {faq.q}</h2>
              <div className="text-white text-2xl ">
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className='mt-4 text-white leading-relaxed border-t border-white/5 pt-4'>
                    <span className='font-bold text-white mr-2'>Ans.</span> 
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionsComponent;