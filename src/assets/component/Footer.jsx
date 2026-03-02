import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'; // Install: npm install react-icons

function Footer() {
  return (
    <footer className="bg-blue-950 text-white md:pt-16 pb-8">
      <div className="max-w-350 mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 pb-4">
            <img
              src="/logo/LogoChetakAviation.png"
              alt="Chetak Aviation"
              className="w-52 h-35 object-contain"
            />
          </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed max-w-sm">
              Empowering the next generation of pilots with world-class training, 
              modern fleets, and global industry standards. Your journey to the 
              skies begins with professional excellence.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-600 transition-colors border border-white/10"><FaFacebook /></a>
              <a href="https://x.com/" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-600 transition-colors border border-white/10"><FaTwitter /></a>
              <a href="https://www.instagram.com/" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-600 transition-colors border border-white/10"><FaInstagram /></a>
              <a href="https://www.linkedin.com/login" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-blue-600 transition-colors border border-white/10"><FaLinkedin /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="about" className="hover:text-white hover:translate-x-2 transition-all inline-block">About Academy</a></li>
              <li><a href="courses" className="hover:text-white hover:translate-x-2 transition-all inline-block">Course</a></li>
              <li><a href="contact" className="hover:text-white hover:translate-x-2 transition-all inline-block">Contact</a></li>
              <li><a href="career-page" className="hover:text-white hover:translate-x-2 transition-all inline-block">Career</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400 uppercase tracking-widest">Training</h3>
            <ul className="space-y-4 text-gray-400">
              <li><a href="CommercialPilotLicence" className="hover:text-white hover:translate-x-2 transition-all inline-block">CPL Program</a></li>
              <li><a href="PrivatePilotLicence" className="hover:text-white hover:translate-x-2 transition-all inline-block">PPL License</a></li>
              <li><a href="ConversionFlying" className="hover:text-white hover:translate-x-2 transition-all inline-block">Conversion Flying</a></li>
              <li><a href="flightInstructorCourse" className="hover:text-white hover:translate-x-2 transition-all inline-block">Flight Instructor Course</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-blue-400 uppercase tracking-widest">Contact Us</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-500" />
                <span>Aviation Plaza, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-500" />
               <a href="tel:+18667603566">+18554682227</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-500" />
                <span>info@chetakaviation.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Chetak Aviation Academy. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Return Policy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;


