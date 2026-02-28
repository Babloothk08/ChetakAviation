// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function AviationSection() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(".aviation-heading", {
//         y: -60,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       });

//       gsap.from(".aviation-card", {
//         scrollTrigger: {
//           trigger: ".cards-wrapper",
//           start: "top 80%",
//         },
//         y: 80,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       ref={sectionRef}
//       className="flex flex-col bg-white border-blue-900  py-20 gap-16"
//     >
//       {/* Heading */}
//       <div className="text-center px-6 md:px-32">
//         <h1 className="aviation-heading text-blue-800 text-4xl md:text-5xl font-bold">
//           Chetak Aviation – Excellence in Pilot Training
//         </h1>
//         <p className="text-blue-800 mt-6 text-lg">
//           Chetak Aviation provides world-class aviation training programs,
//           advanced simulators, and expert mentorship to prepare students for
//           successful careers in commercial aviation.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="cards-wrapper flex flex-wrap justify-center gap-8 px-6">
//         {/* Card 1 */}
//         <div className="aviation-card relative w-80 h-80 rounded-2xl overflow-hidden group cursor-pointer">
//           <img
//             src="https://images.unsplash.com/photo-1504198458649-3128b932f49b"
//             alt="CPL Training"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-500">
//             <h2 className="text-white text-2xl font-bold mb-4">
//               Commercial Pilot License (CPL)
//             </h2>
//             <p className="text-gray-300 text-sm">
//               Comprehensive flight training designed to meet DGCA standards and
//               prepare you for airline careers.
//             </p>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="aviation-card relative w-80 h-80 rounded-2xl overflow-hidden group cursor-pointer">
//           <img
//             src="https://images.unsplash.com/photo-1494415859740-21e878dd929d"
//             alt="Flight Simulator"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-500">
//             <h2 className="text-white text-2xl font-bold mb-4">
//               Advanced Flight Simulators
//             </h2>
//             <p className="text-gray-300 text-sm">
//               Experience real cockpit environments with cutting-edge simulation
//               technology.
//             </p>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="aviation-card relative w-80 h-80 rounded-2xl overflow-hidden group cursor-pointer">
//           <img
//             src="https://images.unsplash.com/photo-1517976487492-5750f3195933"
//             alt="Aircraft Fleet"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-500">
//             <h2 className="text-white text-2xl font-bold mb-4">
//               Modern Training Fleet
//             </h2>
//             <p className="text-gray-300 text-sm">
//               Train with well-maintained, modern aircraft ensuring safety and
//               performance.
//             </p>
//           </div>
//         </div>

//         {/* Card 4 */}
//         <div className="aviation-card relative w-80 h-80 rounded-2xl overflow-hidden group cursor-pointer">
//           <img
//             src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
//             alt="Aviation Career"
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-500">
//             <h2 className="text-white text-2xl font-bold mb-4">
//               Career Support & Placement
//             </h2>
//             <p className="text-gray-300 text-sm">
//               Dedicated career guidance to help you transition smoothly from
//               student pilot to airline professional.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default AviationSection;

import React from 'react'

function VideoComponent2() {
  return (
    <div>
      
    </div>
  )
}

export default VideoComponent2
