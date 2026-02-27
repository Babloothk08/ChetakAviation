import React from "react";
import {
  FaPlaneDeparture,
  FaUserGraduate,
  FaClipboardCheck,
  FaChalkboardTeacher,
  FaGlobeAsia,
  FaCertificate,
} from "react-icons/fa";

const aviationServices = [
  {
    title: "Commercial Pilot Training (CPL)",
    desc: "DGCA-approved Commercial Pilot License training with modern aircraft, expert instructors, and structured flight hours.",
    icon: <FaPlaneDeparture className="text-3xl text-blue-600" />,
  },
  {
    title: "Ground School Programs",
    desc: "Comprehensive ground classes covering Air Navigation, Meteorology, Air Regulations, and Technical General subjects.",
    icon: <FaChalkboardTeacher className="text-3xl text-blue-600" />,
  },
  {
    title: "DGCA Exam Preparation",
    desc: "Focused preparation sessions with mock tests and expert guidance to ensure first-attempt DGCA exam success.",
    icon: <FaClipboardCheck className="text-3xl text-blue-600" />,
  },
  {
    title: "Flight Simulator Training",
    desc: "Advanced simulator sessions designed to build real-time decision-making and cockpit confidence.",
    icon: <FaGlobeAsia className="text-3xl text-blue-600" />,
  },
  {
    title: "Cadet Pilot Program",
    desc: "Structured cadet programs for aspiring pilots with end-to-end training support and airline pathway guidance.",
    icon: <FaUserGraduate className="text-3xl text-blue-600" />,
  },
  {
    title: "Type Rating & Certification",
    desc: "Professional aircraft type rating training and certifications to prepare you for airline operations.",
    icon: <FaCertificate className="text-3xl text-blue-600" />,
  },
];

function ServicesComponent() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-slate-700 uppercase tracking-tighter leading-tight">
            Chetak Aviation <span className="text-blue-600">Training Programs</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg font-medium">
            Transform your aviation dreams into reality with industry-leading pilot training,
            DGCA guidance, and professional career support at Chetak Aviation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {aviationServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-[2.5rem] border border-blue-50 shadow-xl hover:shadow-[0_20px_50px_rgba(37,99,235,0.08)] transition-all duration-500 hover:-translate-y-2 border-b-4 hover:border-b-blue-600"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-blue-600">
                <div className="transition-all duration-500 group-hover:text-white">
                  {service.icon}
                </div>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-black text-slate-700 mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                {service.desc}
              </p>

              {/* Bottom Tagline */}
              <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] opacity-60 group-hover:opacity-100 transition-opacity">
                Career-Focused Aviation Training
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="mt-20 bg-slate-800 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Start Your Journey to the <span className="text-blue-500">Cockpit</span>
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto font-medium">
              Our expert instructors are ready to guide you from ground school
              to your first solo flight and beyond. Your aviation career starts here.
            </p>
            <div className="pt-4 flex flex-col md:flex-row justify-center gap-6">
              <a
                href="/contact"
                className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Enroll Now
              </a>
            </div>
          </div>

          {/* Background Decorative Blur */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900 rounded-full translate-y-1/2 -translate-x-1/2 blur-[120px]"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesComponent;