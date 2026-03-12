import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

function Footer() {

  const quickLinks = [
    { name: "ABOUT US", link: "/about-us" },
    { name: "COURSES", link: "/courses" },
    { name: "CONTACT US", link: "/contact-us" },
    { name: "CAREER", link: "/career-page" },
  ];

  const trainingLinks = [
    { name: "Flight Instructor Course", link: "/flight-instructor-course" },
    { name: "Private Pilot License", link: "/private-pilot-licence" },
    { name: "Conversion Flying", link: "/conversion-flying" },
    { name: "Commercial Pilot Licence ", link: "/commercial-pilot-licence" },
    
  ];

  const socialLinks = [
    { icon: <FaFacebook />, link: "https://www.facebook.com/starallianceaviationacademy/" },
    { icon: <FaTwitter />, link: "https://x.com/staralliance_in/" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/chetakaviation/" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/starallianceaviationacademy/" },
    { icon: <FaPinterestP />, link: "https://in.pinterest.com/starallianceaviationacademy/" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@starallianceaviationacademy/" },
  ];

  return (
    <footer className="bg-[#103057] text-white pt-14 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* LOGO + ABOUT */}
          <div>
            <img
              src="/logo/LogoChetakAviation.png"
              alt="Chetak Aviation"
              className="w-48 mb-4"
            />

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of pilots with world-class
              training, modern fleets, and global industry standards.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-[#ECAA05] transition border border-white/10"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="">
            <h3 className="text-lg font-semibold mb-6 text-[#ECAA05] uppercase">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="hover:text-[#ECAA05] hover:font-bold  hover:translate-x-1 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* TRAINING */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#ECAA05] uppercase">
              Training
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm " >
              {trainingLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.link}
                    className="hover:text-[#ECAA05] hover:font-bold hover:translate-x-1 transition-all inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#ECAA05] uppercase">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li className="flex gap-3 items-start">
                <FaMapMarkerAlt className="text-[#ECAA05] mt-1" />
                <span>Aviation Plaza, New Delhi, India</span>
              </li>

              <li className="flex gap-3 items-center">
                <FaPhone className="text-[#ECAA05]" />
                <a href="tel:+18554682227">+18554682227</a>
              </li>

              <li className="flex gap-3 items-center">
                <FaEnvelope className="text-[#ECAA05]" />
                <span>info@chetakaviation.com</span>
              </li>

            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>© 2026 Chetak Aviation Academy. All Rights Reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/refund-policy" className="hover:text-white">
              Refund Policy
            </Link>

            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;