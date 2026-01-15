import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { q: "Is there a free trial available?", a: "Yes! We offer a 14-day free trial with full access to all cockpit simulation features." },
  { q: "What certifications do you provide?", a: "Our certifications are recognized by EASA, FAA, and DGCA global aviation authorities." },
  { q: "How many flight hours are included?", a: "The standard program includes 200 hours of flight time on Diamond DA40/42 aircraft." },
  { q: "Are there any age requirements?", a: "You must be at least 17 years old to begin training and 18 to receive a commercial license." },
  { q: "How many flight hours are included?", a: "The standard program includes 200 hours of flight time on Diamond DA40/42 aircraft." },
  { q: "Are there any age requirements?", a: "You must be at least 17 years old to begin training and 18 to receive a commercial license." },
  
];

function QuestionsComponent() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='min-h-50% max-w-6xl mx-auto px-6 pb-10 text-white'>
      <h1 className='pb-10 text-4xl font-black tracking-tight text-center md:text-left'>
        <span className="text-blue-500 text-center">Frequently Asked Questions (FAQ)</span>
      </h1>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 h-fit cursor-pointer hover:border-blue-500/50 transition-colors"
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