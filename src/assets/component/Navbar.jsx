import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
      { icon: <FaFacebook />, link: "https://www.facebook.com/starallianceaviationacademy/" },
      { icon: <FaTwitter />, link: "https://x.com/staralliance_in/" },
      { icon: <FaInstagram />, link: "https://www.instagram.com/chetakaviation/" },
      { icon: <FaLinkedin />, link: "https://www.linkedin.com/company/starallianceaviationacademy/" },
      { icon: <FaPinterestP />, link: "https://in.pinterest.com/starallianceaviationacademy/" },
      { icon: <FaYoutube />, link: "https://www.youtube.com/@starallianceaviationacademy/" },
    ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50">
      {/* WIDTH CONTROLLER */}
      <div
        
      >
        {/* NAVBAR BODY */}
        <div
          className={`transition-all duration-500 backdrop-blur-md bg-[#103057] from-blue-700/90 via-gray-600/90 to-blue-700/90 shadow-lg `}
        >
          <div className="flex justify-between items-center h-25 px-6">
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo/LogoChetakAviation.png"
                alt="Chetak Aviation"
                className="w-30 object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex gap-10 text-white font-medium items-center">
              <Link to="/">
                <li className="hover:text-[#ECAA05] transition drop-shadow-[0_0_2px_black]">
                  HOME
                </li>
              </Link>

              <Link to="/about-us">
                <li className="hover:text-[#ECAA05] transition drop-shadow-[0_0_2px_black]">
                  ABOUT US
                </li>
              </Link>
              {/* COURSES DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="hover:text-[#ECAA05] transition drop-shadow-[0_0_2px_black]">
                  COURSES
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full mt-0 w-56">
                    <div className="bg-white text-blue-800 rounded-2xl shadow-lg overflow-hidden">
                      <Link to="/flight-instructor-Course">
                        <div className="p-3 hover:bg-blue-800 hover:text-white transition cursor-pointer">
                          Flight Instructor Course
                        </div>
                      </Link>

                      <Link to="/private-pilot-licence">
                        <div className="p-3 hover:bg-blue-800 hover:text-white transition cursor-pointer">
                          Private Pilot License
                        </div>
                      </Link>

                      <Link to="/conversion-flying">
                        <div className="p-3 hover:bg-blue-800 hover:text-white transition cursor-pointer">
                          Conversion Flying
                        </div>
                      </Link>

                      <Link to="/commercial-pilot-licence">
                        <div className="p-3 hover:bg-blue-800 hover:text-white transition cursor-pointer">
                          Commercial Pilot License
                        </div>
                      </Link>

                      <Link to="/multi-engine-rating">
                        <div className="p-3 hover:bg-blue-800 hover:text-white transition cursor-pointer">
                          Multi-Engine Rating
                        </div>
                      </Link>

                      <Link to="/time-building-program">
                        <div className="p-3 hover:bg-blue-800 hover:text-white transition cursor-pointer">
                          Time Building Program
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/gallery">
                <li className="hover:text-[#ECAA05] transition drop-shadow-[0_0_2px_black]">
                  GALLERY
                </li>
              </Link>

              <Link to="/contact-us">
                <li className="hover:text-[#ECAA05] transition drop-shadow-[0_0_2px_black]">
                  CONTACT US
                </li>
              </Link>

              {/* <Link to="/career-page">
                <li className="hover:text-[#ECAA05] transition drop-shadow-[0_0_2px_black]">
                  CAREER
                </li>
              </Link> */}

              <Link to="/brochure">
                <li className="hover:text-[#ECAA05] transition drop-shadow-[0_0_2px_black]">
                  BROCHURE
                </li>
              </Link>
            </ul>

            {/* ENROLL BUTTON */}
            <div className="flex gap-3">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full text-white hover:bg-[#ECAA05]  transition border border-white/20"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* MOBILE ICON */}
            <div className="md:hidden text-white">
              <button onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#103057] text-white px-6 py-6 space-y-4 transition-all duration-300">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">Home</div>
          </Link>

          <Link
            to="/flightInstructorCourse"
            onClick={() => setMobileOpen(false)}
          >
            <div className="border-b border-white/20 pb-2">
              Flight Instructor Course
            </div>
          </Link>

          <Link to="/PrivatePilotLicence" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">
              Private Pilot License
            </div>
          </Link>

          <Link to="/ConversionFlying" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">
              Conversion Flying
            </div>
          </Link>

          <Link
            to="/commercialPilotLicence"
            onClick={() => setMobileOpen(false)}
          >
            <div className="border-b border-white/20 pb-2">
              Commercial Pilot License
            </div>
          </Link>
          <Link
            to="/multi-engine-rating"
            onClick={() => setMobileOpen(false)}
          >
            <div className="border-b border-white/20 pb-2">
              Multi-Engine Rating
            </div>
          </Link>
          <Link
            to="/time-building-program"
            onClick={() => setMobileOpen(false)}
          >
            <div className="border-b border-white/20 pb-2">
              Time Building Program
            </div>
          </Link>

          <Link to="/about" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">About Us</div>
          </Link>

          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">Contact Us</div>
          </Link>

          <Link to="/career-page" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">Career</div>
          </Link>

          <Link to="/brochure" onClick={() => setMobileOpen(false)}>
            <div>Brochure</div>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
