import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; 

function WatsAppIcon() {
  const phoneNumber = "919876543210"; 
  const message = "Hello! I am interested in Training at Chetak Aviation."; 

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div 
      className="fixed z-9999 right-6 md:right-10 flex flex-col items-center group"
      style={{ bottom: '10vh' }} 
    >
      <span className="absolute right-16 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-700 shadow-xl">
        Chat with Admissions
      </span>

      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center border-2 border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={25} />
      </a>
      
      <div className="absolute -z-10 w-full h-full bg-blue-500/10 blur-xl rounded-full"></div>
    </div>
  );
}

export default WatsAppIcon;