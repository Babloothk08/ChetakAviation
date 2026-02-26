import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "top-0 left-0 w-full"
          : "top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl"
      }`}
    >
      <div
        className={`transition-all duration-500 backdrop-blur-md bg-gradient-to-r from-blue-700/90 via-gray-600/90 to-blue-700/90 shadow-lg border-white/40 ${
          isScrolled
            ? "rounded-none border-b"
            : "rounded-3xl border"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex md:justify-between items-center h-22">
            
            {/* Logo */}
            <div className="flex md:items-center gap-2 md:p-12 md:pb-20 pr-49 cursor-pointer">
              <Link to="/">
                <img
                  src="/logo/LogoChetakAviation.png"
                  alt="Chetak Aviation"
                  className="w-32 h-28 pt-8 md:mb-1 mb-10 object-contain"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-12 text-white font-medium">
              <Link to="/">
                <li className="hover:text-blue-600 transition">Home</li>
              </Link>

              <div className="relative">
                <li>
                  <button
                    onClick={() => setOpen(!open)}
                    className="cursor-pointer"
                  >
                    Courses
                  </button>

                  {open && (
                    <div className="absolute w-50 -right-34 pt-5">
                      <ul className="bg-white text-blue-800 rounded-2xl">
                        <Link to="/flightInstructorCourse">
                          <li
                            onClick={() => setOpen(false)}
                            className="p-2 hover:bg-blue-800 hover:text-white hover:rounded-t-2xl"
                          >
                            Flight Instructor Course
                          </li>
                        </Link>
                        <Link to="/PrivatePilotLicence">
                          <li
                            onClick={() => setOpen(false)}
                            className="p-2 hover:bg-blue-800 hover:text-white"
                          >
                            Private Pilot License
                          </li>
                        </Link>
                        <Link to="/ConversionFlying">
                          <li
                            onClick={() => setOpen(false)}
                            className="p-2 hover:bg-blue-800 hover:text-white"
                          >
                            Conversion Flying
                          </li>
                        </Link>
                        <Link to="/commercialPilotLicence">
                          <li
                            onClick={() => setOpen(false)}
                            className="p-2 hover:bg-blue-800 hover:text-white hover:rounded-b-2xl"
                          >
                            Commercial Pilot License
                          </li>
                        </Link>
                      </ul>
                    </div>
                  )}
                </li>
              </div>

              <Link to="/about">
                <li className="hover:text-blue-600 transition">About Us</li>
              </Link>

              <Link to="/contact">
                <li className="hover:text-blue-600 transition">Contact Us</li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-blue-600 transition">Coreer</li>
              </Link>
              <Link to="/contact">
                <li className="hover:text-blue-600 transition">Brochure</li>
              </Link>
            </ul>

            {/* Enroll Button */}
            <div className="hidden md:block">
              <a
                href="tel:+18667603566"
                className="bg-white w-40 h-10 text-blue-700 px-5 py-2 rounded-full border border-blue-200 transition-all duration-200 hover:text-blue-900 hover:shadow-md active:scale-95"
              >
                Enroll Now
              </a>
            </div>

            {/* Mobile Icon */}
            <div className="md:hidden -mt-5 -mr-15 text-white">
              <button onClick={() => setOpen(!open)}>
                {open ? <FiX size={26} /> : <FiMenu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;