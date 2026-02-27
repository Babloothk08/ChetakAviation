import React from "react";

const aviationServices = [
  {
    title: "Commercial Pilot Training (CPL)",
    desc: "DGCA-approved Commercial Pilot License training with modern aircraft and expert instructors.",
    Image: "/course/commercialPilotLicence/Building-Professional-Excellence-Through-Commercial-Pilot-Training(FINAL).jpg",
  },
  {
    title: "Ground School Programs",
    desc: "Comprehensive ground classes covering Air Navigation and Meteorology.",
    Image: "/course/commercialPilotLicence/Building-Professional-Excellence-Through-Commercial-Pilot-Training(FINAL).jpg",
  },
  {
    title: "DGCA Exam Preparation",
    desc: "Mock tests and expert guidance for first-attempt DGCA exam success.",
    Image: "/course/commercialPilotLicence/Building-Professional-Excellence-Through-Commercial-Pilot-Training(FINAL).jpg",
  },
  {
    title: "Commercial Pilot Training (CPL)",
    desc: "DGCA-approved Commercial Pilot License training with modern aircraft and expert instructors.",
    Image: "/course/commercialPilotLicence/Building-Professional-Excellence-Through-Commercial-Pilot-Training(FINAL).jpg",
  },
  {
    title: "Ground School Programs",
    desc: "Comprehensive ground classes covering Air Navigation and Meteorology.",
    Image: "/course/commercialPilotLicence/Building-Professional-Excellence-Through-Commercial-Pilot-Training(FINAL).jpg",
  },
  {
    title: "DGCA Exam Preparation",
    desc: "Mock tests and expert guidance for first-attempt DGCA exam success.",
    Image: "/course/commercialPilotLicence/Building-Professional-Excellence-Through-Commercial-Pilot-Training(FINAL).jpg",
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
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              
              {/* Image */}
              <div className="w-[410px] h-[220px] overflow-hidden">
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
                  Career-Focused Aviation Training
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ServicesComponent;