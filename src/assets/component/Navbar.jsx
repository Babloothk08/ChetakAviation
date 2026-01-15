import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-28">
       
          <div className="flex items-center gap-2  p-10 pb-20">
            <img
              src="/logo/LogoChetakAviation.png"
              alt="Chetak Aviation"
              className="w-52 h-35 pt-8 object-contain"
            />
          </div>

          <ul className="hidden md:flex gap-8 text-white font-medium">
            <Link to="/">
            <li className="hover:text-blue-600 cursor-pointer transition">
              Home
            </li>
            </Link>
            <Link to="">
            <div className="relative">
              <Link to="/courses">
              <li className=" cursor-pointer transition">
              <button onClick={() => setOpen(!open)} className="cursor-pointer">
                Courses
                </button>
              
              { open ? (
                <div className="absolute w-50 -right-34 pt-5">
                <ul className=" bg-white text-blue-800 rounded-2xl">
                  <Link to="/flightInstructorCourse"><li onClick={()=>setOpen(!open)} className="p-2 hover:bg-blue-800 hover:text-white hover:rounded-t-2xl">Flight Instructor Course</li></Link>
                  <Link to="/PrivatePilotLicence"><li onClick={()=>setOpen(!open)} className="p-2 hover:bg-blue-800 hover:text-white ">Private Pilot License</li></Link>
                  <Link to="/ConversionFlying"><li onClick={()=>setOpen(!open)} className="p-2 hover:bg-blue-800 hover:text-white">Conversion Flying</li></Link>
                  <Link to="/commercialPilotLicence"><li onClick={()=>(!open)} className="p-2 hover:bg-blue-800 hover:text-white hover:rounded-b-2xl">Commercial Pilot License</li></Link>
                </ul>
              </div>
              ): ""

              }
            </li>
            </Link>
            </div>
            </Link>
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
          </ul>

          <div className="hidden md:block">
            <button
            className="bg-white w-40 h-10 text-blue-700 px-5 py-2 rounded-full border border-blue-200 transition-all duration-200 hover:text-blue-900 hover:font-semibold hover:shadow-md hover:border-blue-900 active:scale-95 cursor-pointer"
            >
              Enroll Now
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-gray-50 border-t">
          <ul className="flex flex-col items-center py-6 gap-6 text-gray-700 font-medium">
            <li className="hover:text-blue-600">Home</li>
            <li className="hover:text-blue-600">Courses</li>
            <li className="hover:text-blue-600">About Us</li>
            <li className="hover:text-blue-600">Contact Us</li>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
              Enroll Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
