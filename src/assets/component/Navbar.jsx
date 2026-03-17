import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone) {
      alert("please fill all details");
      return;
    }
    setShowForm(false);
    navigate("/brochure");
  };

  const handleClose = () => {
    setShowForm(false);
    navigate("/brochure");
  };

  useEffect(() => {
  if (showForm) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}, [showForm]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/starallianceaviationacademy/",
    },
    { icon: <FaTwitter />, link: "https://x.com/staralliance_in/" },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/chetakaviation/",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/starallianceaviationacademy/",
    },
    {
      icon: <FaPinterestP />,
      link: "https://in.pinterest.com/starallianceaviationacademy/",
    },
    {
      icon: <FaYoutube />,
      link: "https://www.youtube.com/@starallianceaviationacademy/",
    },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full z-50">
      {/* WIDTH CONTROLLER */}
      <div>
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

              <li
                onClick={() => setShowForm(true)}
                className="hover:text-[#ECAA05] transition cursor-pointer"
              >
                BROCHURE
              </li>
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
            to="/flight-instructor-course"
            onClick={() => setMobileOpen(false)}
          >
            <div className="border-b border-white/20 pb-2">
              Flight Instructor Course
            </div>
          </Link>

          <Link to="/private-pilot-licence" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">
              Private Pilot License
            </div>
          </Link>

          <Link to="/conversion-flying" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">
              Conversion Flying
            </div>
          </Link>

          <Link
            to="/commercial-pilot-licence"
            onClick={() => setMobileOpen(false)}
          >
            <div className="border-b border-white/20 pb-2">
              Commercial Pilot License
            </div>
          </Link>
          <Link to="/multi-engine-rating" onClick={() => setMobileOpen(false)}>
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

          <Link to="/about-us" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">About Us</div>
          </Link>

          <Link to="/contact-us" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">Contact Us</div>
          </Link>

          <Link to="/gallery" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">Gallery</div>
          </Link>

          <div
            onClick={() => {
              setMobileOpen(false);
              setShowForm(true);
            }}
            className="border-b border-white/20 pb-2 cursor-pointer"
          >
            Brochure
          </div>
        </div>
      )}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-5 sm:p-6 rounded-2xl w-[92%] max-w-md relative animate-fadeIn">
            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-4 text-xl font-bold text-gray-500 cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-[#103057]">
              Book Your Slot
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              Enter your details and our team will assist you shortly.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="border p-2 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="border p-2 rounded-md"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="border p-2 rounded-md"
              />

              <button
                type="submit"
                className="bg-[#ECAA05] cursor-pointer hover:bg-[#d99a04] text-white py-2 rounded-md font-semibold"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
