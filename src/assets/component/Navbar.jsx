import React, { useState, useEffect } from "react";
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

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* WIDTH CONTROLLER */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled ? "w-full mt-0" : "w-[95%] max-w-7xl mx-auto mt-6"
        }`}
      >
        {/* NAVBAR BODY */}
        <div
          className={`transition-all duration-500 backdrop-blur-md bg-gradient-to-r from-blue-700/90 via-gray-600/90 to-blue-700/90 shadow-lg ${
            isScrolled
              ? "rounded-none border-b border-white/30"
              : "rounded-3xl border border-white/40"
          }`}
        >
          <div className="flex justify-between items-center h-20 px-6">
            {/* LOGO */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo/LogoChetakAviation.png"
                alt="Chetak Aviation"
                className="w-24 object-contain"
              />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex gap-10 text-white font-medium items-center">
              <Link to="/">
                <li className="hover:text-blue-300 transition drop-shadow-[0_0_2px_black]">
                  HOME
                </li>
              </Link>
              {/* COURSES DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="hover:text-blue-300 transition drop-shadow-[0_0_2px_black]">
                  COURSES
                </button>

                {dropdownOpen && (
                  <div className="absolute left-0 top-full mt-0 w-56">
                    <div className="bg-white text-blue-800 rounded-2xl shadow-lg overflow-hidden">
                      <Link to="/flightInstructorCourse">
                        <div className="p-3 hover:bg-blue-800 hover:text-white transition cursor-pointer">
                          Flight Instructor Course
                        </div>
                      </Link>

                      <Link to="/PrivatePilotLicence">
                        <div className="p-3 hover:bg-blue-800 hover:text-white transition cursor-pointer">
                          Private Pilot License
                        </div>
                      </Link>

                      <Link to="/ConversionFlying">
                        <div className="p-3 hover:bg-blue-800 hover:text-white transition cursor-pointer">
                          Conversion Flying
                        </div>
                      </Link>

                      <Link to="/commercialPilotLicence">
                        <div className="p-3 hover:bg-blue-800 hover:text-white transition cursor-pointer">
                          Commercial Pilot License
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/about">
                <li className="hover:text-blue-300 transition drop-shadow-[0_0_2px_black]">
                  ABOUT US
                </li>
              </Link>

              <Link to="/contact">
                <li className="hover:text-blue-300 transition drop-shadow-[0_0_2px_black]">
                  CONTACT US
                </li>
              </Link>

              <Link to="/career">
                <li className="hover:text-blue-300 transition drop-shadow-[0_0_2px_black]">
                  CAREER
                </li>
              </Link>

              <Link to="/brochure">
                <li className="hover:text-blue-300 transition drop-shadow-[0_0_2px_black]">
                  BROCHURE
                </li>
              </Link>
            </ul>

            {/* ENROLL BUTTON */}
            <div className="hidden md:block">
              <a
                href="tel:+18667603566"
                className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg active:scale-95 drop-shadow-[0_0_2px_black]"
              >
                ENROLL NOW
              </a>
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
        <div className="md:hidden bg-blue-800 text-white px-6 py-6 space-y-4 transition-all duration-300">
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

          <Link to="/about" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">About Us</div>
          </Link>

          <Link to="/contact" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">Contact Us</div>
          </Link>

          <Link to="/career" onClick={() => setMobileOpen(false)}>
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
