import React from "react";
import { Link } from "react-router-dom";

const aviationServices = [
  {
    title: "Commercial Pilot Licence (CPL) Training in India",
    desc: "The Commercial Pilot Licence (CPL) training program at Chetak Aviation is designed for ambitious individuals who dream of becoming professional pilots.",
    Image: "/servicePhoto/Courses-COMMERCIAL-PILOT-LICENCE.jpg.jpeg",
    link : "/commercialPilotLicence"
  },
  {
    title: "Conversion Flying Training in India",
    desc: "The Conversion Flying program at Chetak Aviation is designed for licensed pilots who need to transition to a different aircraft type or convert their foreign pilot licence to DGCA standards.",
    Image: "/servicePhoto/Courses-conversion-flying.jpg.jpeg",
    link : "/conversionFlying"
  },
  {
    title: "Flight Instructor Course (FIC) Training in India",
    desc: "The Flight Instructor Course (FIC) at Chetak Aviation is designed for qualified Commercial Pilot Licence (CPL) holders who aspire to become certified flight instructors.",
    Image: "/servicePhoto/Courses-flight-instructor.jpg.jpeg",
    link : "/flightInstructorCourse"
  },
  {
    title: "Private Pilot Licence (PPL) Training in India",
    desc: "The Private Pilot Licence (PPL) training program at Chetak Aviation is the ideal starting point for individuals who dream of flying an aircraft.",
    Image: "/servicePhoto/Courses-private-PILOT-LICENCE.jpg.jpeg",
    link : "/privatePilotLicence"
  },
  {
    title: "Multi-Engine Rating Training",
    desc: "A Multi-Engine Rating is a crucial milestone for pilots preparing for airline aviation careers. It significantly strengthens employability & operational confidence.",
    Image: "/course/conversionFlying/300px550pxWhyChooseChetakAviationforConversionFlying.jpg.jpeg",
    link : "/multi-engine-rating"
  },
  {
    title: "Time Building Program",
    desc: "A Time Building Program is a structured flight training plan that allows pilots to accumulate the required flying hours needed to qualify for a Commercial Pilot Licence (CPL) .",
    Image: "/brochure/Brochure-TrainingEnvironmentSecond.jpeg",
    link : "/time-building-program"
  },
];

function ServicesComponent() {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-3xl md:text-5xl font-black text-slate-800 uppercase">
            Chetak Aviation <span className="text-blue-600">Training Programs</span>
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
            Transform your aviation dreams into reality with industry-leading pilot training.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer ">
          {aviationServices.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1  shadow-blue-200"
            >
              
              {/* Image */}
              <div className="w-full object-cover overflow-hidden " >
                <img
                  src={service.Image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-3">
                  {service.desc}
                </p>

                <div className="text-blue-600 text-[11px] font-semibold uppercase tracking-wider">
                  Click to view more
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesComponent;