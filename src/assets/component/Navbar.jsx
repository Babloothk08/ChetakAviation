import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-blue-700/90 via-gray-600/90 to-blue-00/90 shadow-lg border-b border-white/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex md:justify-between items-center  h-22">
          <div className="flex md:items-center gap-2  md:p-12 md:pb-20 pr-49  cursor-pointer">
            <Link to="/">
              <img
                src="/logo/LogoChetakAviation.png"
                alt="Chetak Aviation"
                className="w-32 h-28 pt-8  md:mb-1 mb-10 object-contain"
              />
            </Link>
          </div>

          <ul className="hidden md:flex gap-12 text-white font-medium">
            <Link to="/">
              <li className="hover:text-blue-600 cursor-pointer transition">
                Home
              </li>
            </Link>
            {/* <Link to=""> */}
            <div className="relative">
              <Link to="/courses">
                <li className=" cursor-pointer transition">
                  <button
                    onClick={() => setOpen(!open)}
                    className="cursor-pointer"
                  >
                    Courses
                  </button>

                  {open ? (
                    <div className="absolute w-50 -right-34 pt-5">
                      <ul className=" bg-white text-blue-800 rounded-2xl">
                        <Link to="/flightInstructorCourse">
                          <li
                            onClick={() => setOpen(!open)}
                            className="p-2 hover:bg-blue-800 hover:text-white hover:rounded-t-2xl"
                          >
                            Flight Instructor Course
                          </li>
                        </Link>
                        <Link to="/PrivatePilotLicence">
                          <li
                            onClick={() => setOpen(!open)}
                            className="p-2 hover:bg-blue-800 hover:text-white "
                          >
                            Private Pilot License
                          </li>
                        </Link>
                        <Link to="/ConversionFlying">
                          <li
                            onClick={() => setOpen(!open)}
                            className="p-2 hover:bg-blue-800 hover:text-white"
                          >
                            Conversion Flying
                          </li>
                        </Link>
                        <Link to="/commercialPilotLicence">
                          <li
                            onClick={() => setOpen(!open)}
                            className="p-2 hover:bg-blue-800 hover:text-white hover:rounded-b-2xl"
                          >
                            Commercial Pilot License
                          </li>
                        </Link>
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              </Link>
            </div>
            {/* </Link> */}
            <Link to="/about">
              <li className="hover:text-blue-600 cursor-pointer transition">
                About Us
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-blue-600 cursor-pointer transition">
                Contact Us
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-blue-600 cursor-pointer transition">
                Gallery
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-blue-600 cursor-pointer transition">
                Career
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-blue-600 cursor-pointer transition">
                Brochure
              </li>
            </Link>
          </ul>

          <div className="hidden md:block">
            <a
              href="tel:+18667603566"
              className="bg-white w-40 h-10 text-blue-700 px-5 py-2 rounded-full border border-blue-200 transition-all duration-200 hover:text-blue-900 hover:font-semibold hover:shadow-md hover:border-blue-900 active:scale-95 cursor-pointer"
            >
              Enroll Now
            </a>
          </div>

          <div className="md:hidden -mt-5 -mr-15 text-white">
            <button onClick={() => setOpen(!open)}>
              {open ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden  ml-55 -mt-30 -mb-30 ">
          <ul className="flex flex-col items-start px-6 pt-10 py-5 gap-6 font-medium bg-blue-800 rounded-2xl text-white">
            <Link to="/home" onClick={() => setOpen(false)}>
              <li className="hover:text-blue-600">Home</li>
            </Link>

            {/* Mobile Courses Dropdown */}
            <li className="w-full">
              <Link to="/courses">
                <button
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                  className="w-full text-left hover:text-blue-600 flex justify-between items-center"
                >
                  Courses
                  <span className="text-2xl">
                    {mobileCoursesOpen ? "−" : "+"}
                  </span>
                </button>
              </Link>

              {mobileCoursesOpen && (
                <ul className="mt-3 -ml-4  flex flex-col gap-2 w-38 bg-gray-100 text-blue-900 p-3 rounded-xl text-sm">
                  <Link
                    to="/flightInstructorCourse"
                    onClick={() => setOpen(false)}
                  >
                    <li className="hover:text-blue-600">
                      Flight Instructor Course
                    </li>
                  </Link>

                  <Link
                    to="/PrivatePilotLicence"
                    onClick={() => setOpen(false)}
                  >
                    <li className="hover:text-blue-600">
                      Private Pilot Licence
                    </li>
                  </Link>

                  <Link to="/ConversionFlying" onClick={() => setOpen(false)}>
                    <li className="hover:text-blue-600">Conversion Flying</li>
                  </Link>

                  <Link
                    to="/commercialPilotLicence"
                    onClick={() => setOpen(false)}
                  >
                    <li className="hover:text-blue-600">
                      Commercial Pilot Licence
                    </li>
                  </Link>
                </ul>
              )}
            </li>

            <Link to="/about" onClick={() => setOpen(false)}>
              <li className="hover:text-blue-600">About Us</li>
            </Link>

            <Link to="/contact" onClick={() => setOpen(false)}>
              <li className="hover:text-blue-600">Contact Us</li>
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <li className="hover:text-blue-600">Gallery</li>
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <li className="hover:text-blue-600">Career</li>
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              <li className="hover:text-blue-600">Brochure</li>
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
