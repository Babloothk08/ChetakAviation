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
import { Link, useNavigate } from "react-router-dom";

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
      if (window.innerWidth >= 768) {
        setIsScrolled(window.scrollY > 20);
      }
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
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* TOP BAR */}
      {!isScrolled && (
        <div className="hidden md:flex justify-center bg-white/20 backdrop-blur-md text-white text-sm py-2">
          <div className="w-full max-w-[1320px] flex justify-between items-center px-6">
            <span>Book Online • You can request appointment 24 hours</span>

            <div className="flex items-center gap-4">
              <span>Phone: +91 8923836664</span>

              <div className="flex gap-3">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 bg-[#103057] rounded-full flex items-center justify-center hover:bg-[#ECAA05] transition"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <div
        className={`transition-all duration-500 
        ${
          isScrolled
            ? "w-full bg-[#103057] shadow-lg"
            : "md:w-[70%] md:mx-auto md:mt-4 bg-[#103057]/95 backdrop-blur-md md:rounded-xl w-full"
        }`}
      >
        <div className="flex justify-between items-center h-24 px-6">
          {/* LOGO */}
          <Link to="/">
            <img
              src="/logo/LogoChetakAviation.png"
              alt="Chetak Aviation"
              className="w-26 object-contain"
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-10 text-white font-medium items-center">
            <Link to="/">
              <li className="hover:text-[#ECAA05] transition">HOME</li>
            </Link>

            <Link to="/about-us">
              <li className="hover:text-[#ECAA05] transition">ABOUT US</li>
            </Link>

            {/* COURSES */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="hover:text-[#ECAA05] transition">
                COURSES
              </button>

              {dropdownOpen && (
                <div className="absolute left-0 top-full w-56">
                  <div className="bg-white text-blue-800 rounded-xl shadow-lg overflow-hidden">
                    <Link to="/flight-instructor-course">
                      <div className="p-3 hover:bg-blue-800 hover:text-white">
                        Flight Instructor Course
                      </div>
                    </Link>

                    <Link to="/private-pilot-licence">
                      <div className="p-3 hover:bg-blue-800 hover:text-white">
                        Private Pilot License
                      </div>
                    </Link>

                    <Link to="/conversion-flying">
                      <div className="p-3 hover:bg-blue-800 hover:text-white">
                        Conversion Flying
                      </div>
                    </Link>

                    <Link to="/commercial-pilot-licence">
                      <div className="p-3 hover:bg-blue-800 hover:text-white">
                        Commercial Pilot License
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/gallery">
              <li className="hover:text-[#ECAA05] transition">GALLERY</li>
            </Link>

            <Link to="/contact-us">
              <li className="hover:text-[#ECAA05] transition">CONTACT US</li>
            </Link>

            <li
              onClick={() => setShowForm(true)}
              className="hover:text-[#ECAA05] transition cursor-pointer"
            >
              BROCHURE
            </li>
          </ul>

          {/* CONTACT BUTTON */}
          <Link to="/contact-us">
            <button className="hidden md:block bg-[#ECAA05] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#d99a04] transition">
              Contact Us
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden text-white">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#103057] text-white px-6 py-6 space-y-4">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">Home</div>
          </Link>

          <Link to="/about-us" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">About Us</div>
          </Link>

          <Link to="/gallery" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">Gallery</div>
          </Link>

          <Link to="/contact-us" onClick={() => setMobileOpen(false)}>
            <div className="border-b border-white/20 pb-2">Contact</div>
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

          <div className="bg-white p-6 rounded-xl w-[92%] max-w-md relative">

            <button
              onClick={handleClose}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-[#103057]">
              Book Your Slot
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                className="border p-2 rounded"
              />

              <button
                type="submit"
                className="bg-[#ECAA05] text-white py-2 rounded font-semibold hover:bg-[#d99a04]"
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










// import React, { useState, useEffect } from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaLinkedin,
//   FaPinterestP,
//   FaTwitter,
//   FaYoutube,
// } from "react-icons/fa";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function Navbar() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.phone) {
//       alert("please fill all details");
//       return;
//     }

//     setShowForm(false);
//     navigate("/brochure");
//   };

//   const handleClose = () => {
//     setShowForm(false);
//     navigate("/brochure");
//   };

//   useEffect(() => {
//     if (showForm) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [showForm]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const socialLinks = [
//     {
//       icon: <FaFacebook />,
//       link: "https://www.facebook.com/starallianceaviationacademy/",
//     },
//     { icon: <FaTwitter />, link: "https://x.com/staralliance_in/" },
//     {
//       icon: <FaInstagram />,
//       link: "https://www.instagram.com/chetakaviation/",
//     },
//     {
//       icon: <FaLinkedin />,
//       link: "https://www.linkedin.com/company/starallianceaviationacademy/",
//     },
//     {
//       icon: <FaPinterestP />,
//       link: "https://in.pinterest.com/starallianceaviationacademy/",
//     },
//     {
//       icon: <FaYoutube />,
//       link: "https://www.youtube.com/@starallianceaviationacademy/",
//     },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">

//       {/* TOP BAR */}
//       {!isScrolled && (
//         <div className="hidden md:flex justify-center bg-white/20 backdrop-blur-md text-white text-sm py-2">
//           <div className="w-full max-w-[1320px] flex justify-between items-center px-6">

//             <span>Book Online • You can request appointment 24 hours</span>

//             <div className="flex items-center gap-4">

//               <span>Phone: +91 92895 95558</span>

//               <div className="flex gap-3">
//                 {socialLinks.map((item, index) => (
//                   <a
//                     key={index}
//                     href={item.link}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="w-8 h-8 bg-[#103057] rounded-full flex items-center justify-center hover:bg-[#ECAA05] transition"
//                   >
//                     {item.icon}
//                   </a>
//                 ))}
//               </div>

//             </div>
//           </div>
//         </div>
//       )}

//       {/* NAVBAR */}
//       <div
//         className={`transition-all duration-500 ${
//           isScrolled
//             ? "w-full bg-[#103057] shadow-lg"
//             : "w-[92%] md:w-[88%] lg:w-[80%] mx-auto mt-4 bg-[#103057]/95 backdrop-blur-md rounded-xl"
//         }`}
//       >
//         <div className="flex justify-between items-center h-24 px-6">

//           {/* LOGO */}
//           <Link to="/">
//             <img
//               src="/logo/LogoChetakAviation.png"
//               alt="Chetak Aviation"
//               className="w-32 object-contain"
//             />
//           </Link>

//           {/* DESKTOP MENU */}
//           <ul className="hidden md:flex gap-10 text-white font-medium items-center">

//             <Link to="/">
//               <li className="hover:text-[#ECAA05] transition">
//                 HOME
//               </li>
//             </Link>

//             <Link to="/about-us">
//               <li className="hover:text-[#ECAA05] transition">
//                 ABOUT US
//               </li>
//             </Link>

//             {/* COURSES */}
//             <div
//               className="relative"
//               onMouseEnter={() => setDropdownOpen(true)}
//               onMouseLeave={() => setDropdownOpen(false)}
//             >
//               <button className="hover:text-[#ECAA05] transition">
//                 COURSES
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute left-0 top-full mt-0 w-56">
//                   <div className="bg-white text-blue-800 rounded-xl shadow-lg overflow-hidden">

//                     <Link to="/flight-instructor-course">
//                       <div className="p-3 hover:bg-blue-800 hover:text-white cursor-pointer">
//                         Flight Instructor Course
//                       </div>
//                     </Link>

//                     <Link to="/private-pilot-licence">
//                       <div className="p-3 hover:bg-blue-800 hover:text-white cursor-pointer">
//                         Private Pilot License
//                       </div>
//                     </Link>

//                     <Link to="/conversion-flying">
//                       <div className="p-3 hover:bg-blue-800 hover:text-white cursor-pointer">
//                         Conversion Flying
//                       </div>
//                     </Link>

//                     <Link to="/commercial-pilot-licence">
//                       <div className="p-3 hover:bg-blue-800 hover:text-white cursor-pointer">
//                         Commercial Pilot License
//                       </div>
//                     </Link>

//                     <Link to="/multi-engine-rating">
//                       <div className="p-3 hover:bg-blue-800 hover:text-white cursor-pointer">
//                         Multi-Engine Rating
//                       </div>
//                     </Link>

//                     <Link to="/time-building-program">
//                       <div className="p-3 hover:bg-blue-800 hover:text-white cursor-pointer">
//                         Time Building Program
//                       </div>
//                     </Link>

//                   </div>
//                 </div>
//               )}
//             </div>

//             <Link to="/gallery">
//               <li className="hover:text-[#ECAA05] transition">
//                 GALLERY
//               </li>
//             </Link>

//             <Link to="/contact-us">
//               <li className="hover:text-[#ECAA05] transition">
//                 CONTACT US
//               </li>
//             </Link>

//             <li
//               onClick={() => setShowForm(true)}
//               className="hover:text-[#ECAA05] transition cursor-pointer"
//             >
//               BROCHURE
//             </li>
//           </ul>

//           {/* CONTACT BUTTON */}
//           <Link to="/contact-us">
//             <button className="hidden md:block bg-[#ECAA05] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#d99a04] transition">
//               Contact Us
//             </button>
//           </Link>

//           {/* MOBILE MENU BUTTON */}
//           <div className="md:hidden text-white">
//             <button onClick={() => setMobileOpen(!mobileOpen)}>
//               {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE MENU */}
//       {mobileOpen && (
//         <div className="md:hidden bg-[#103057] text-white px-6 py-6 space-y-4">

//           <Link to="/" onClick={() => setMobileOpen(false)}>
//             <div className="border-b border-white/20 pb-2">Home</div>
//           </Link>

//           <Link to="/about-us" onClick={() => setMobileOpen(false)}>
//             <div className="border-b border-white/20 pb-2">About Us</div>
//           </Link>

//           <Link to="/contact-us" onClick={() => setMobileOpen(false)}>
//             <div className="border-b border-white/20 pb-2">Contact</div>
//           </Link>

//           <Link to="/gallery" onClick={() => setMobileOpen(false)}>
//             <div className="border-b border-white/20 pb-2">Gallery</div>
//           </Link>

//           <div
//             onClick={() => {
//               setMobileOpen(false);
//               setShowForm(true);
//             }}
//             className="border-b border-white/20 pb-2 cursor-pointer"
//           >
//             Brochure
//           </div>

//         </div>
//       )}

//       {/* FORM MODAL */}
//       {showForm && (
//         <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">

//           <div className="bg-white p-6 rounded-xl w-[92%] max-w-md relative">

//             <button
//               onClick={handleClose}
//               className="absolute top-3 right-4 text-xl"
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold mb-4 text-[#103057]">
//               Book Your Slot
//             </h2>

//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 onChange={handleChange}
//                 className="border p-2 rounded"
//               />

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email Address"
//                 onChange={handleChange}
//                 className="border p-2 rounded"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 onChange={handleChange}
//                 className="border p-2 rounded"
//               />

//               <button
//                 type="submit"
//                 className="bg-[#ECAA05] text-white py-2 rounded font-semibold hover:bg-[#d99a04]"
//               >
//                 Continue
//               </button>

//             </form>

//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;