import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

function ContactData() {
  return (
    <>
      <div  className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-16 px-4 md:px-10">
        <div className="max-w-7xl w-full">
          {/* Main Card */}
          <div className="flex flex-col lg:flex-row bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.1)] border border-blue-100">
            {/* LEFT SIDE: Blue Info Panel */}
            <div className="w-full lg:w-2/5 bg-blue-600 p-10 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Decorative Sky Circles */}
              <div className="absolute top-[-10%] right-[-10%] w-80 h-80 bg-blue-400 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-blue-800 rounded-full blur-3xl opacity-30"></div>

              <div className="relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                >
                  Ready to <br />{" "}
                  <span className="text-blue-200">Take Off?</span>
                </motion.h1>
                <p className="text-blue-50 text-lg font-light mb-12 leading-relaxed">
                  Our admissions team is available to help you navigate your
                  journey toward a professional pilot license.
                </p>

                <div className="space-y-8">
                  {/* Contact Items */}
                  {[
                    {
                      icon: <FiMail />,
                      label: "Email Us",
                      val: "chetakaviation@gmail.com",
                    },
                    {
                      icon: <FiPhone />,
                      label: "Call Us",
                      val: "+18554682227",
                    },
                    {
                      icon: <FiMapPin />,
                      label: "Academy Base",
                      val: "Dhanipur Airfield, Aligarh, UP",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-5 group cursor-default"
                    >
                      <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white group-hover:text-blue-600 transition-all shadow-lg shadow-black/5">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-200">
                          {item.label}
                        </p>
                        <p className="text-lg font-medium">{item.val}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-white/20">
                <div className="flex gap-6 text-sm font-medium text-blue-100">
                  <a href="https://www.instagram.com/chetakaviation/" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/starallianceaviationacademy/" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://x.com/staralliance_in/" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                  <a href="https://www.facebook.com/starallianceaviationacademy/" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                  <a href="https://www.youtube.com/@starallianceaviationacademy/" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Light Form */}
            <div className="w-full lg:w-3/5 p-10 md:p-16 bg-white">
              <h2 className="text-2xl font-bold text-slate-600 mb-8">
                Contact Us
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-normal font-semoibold font-sans text-gray-700 ">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl p-4 text-slate-800 outline-none mt-2 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-normal font-semoibold font-sans text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl p-4 text-slate-800 outline-none  mt-2 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-normal font-semoibold font-sans text-gray-700 ">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl p-4 text-slate-800 outline-none mt-2 focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-normal font-semoibold font-sans text-gray-700 ">
                      Inquiry Subject
                    </label>
                    <div className="relative">
                      <select className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl p-4 text-slate-800 outline-none mt-2  focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none cursor-pointer">
                        <option>Commercial Pilot License</option>
                        <option>Private Pilot License</option>
                        <option>Ground School</option>
                        <option>Other Queries</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-blue-600 font-bold">
                        ↓
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-normal font-semoibold font-sans text-gray-700 ">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your flight goals..."
                    className="w-full bg-blue-50/50 border border-blue-100 rounded-2xl p-4 text-slate-800 outline-none mt-2  focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none placeholder:text-slate-400"
                  ></textarea>
                </div>

                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: "#1e40af" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-12 py-4 bg-blue-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-3 uppercase tracking-[0.15em] text-sm"
                  >
                    Confirm Takeoff <FiSend />
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white px-10">
        <iframe
          title="Chetak Aviation Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.684112345678!2d78.106543!3d27.889012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a49c9d5e7f1b%3A0x1c8b3d6e5a4f321!2sDhanipur%20Airport%2C%20Aligarh!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}

export default ContactData;
