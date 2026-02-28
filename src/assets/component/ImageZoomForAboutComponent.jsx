// import React, { useState, useEffect, useRef } from 'react';

import { useEffect } from "react";
import AboutImage from "/aboutUsPage/Aboutusbanner.jpg.jpeg"

// const IMAGES = [
//   "../aboutUsPage/Aboutusbanner.jpg.jpeg",
//   "../imageZoomForAboutSection/About_Us_Plane_Image.jpg",
//   "../imageZoomForAboutSection/three_pilots_group.jpg",
// ];

const ImageZoomForAboutComponent = () => {

   useEffect(() => {
      window.scroll(0, 0);
    });
    return (
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${AboutImage})`,
        }}
      ></div>
    );
  }
//   const [time, setTime] = useState(0);
//   const requestRef = useRef();
//   const SPEED = 0.006; // Slightly slowed down for a more premium feel

//   const animate = () => {
//     setTime((prev) => prev + SPEED);
//     requestRef.current = requestAnimationFrame(animate);
//   };

//   useEffect(() => {
//     requestRef.current = requestAnimationFrame(animate);
//     return () => cancelAnimationFrame(requestRef.current);
//   }, []);

//   return (
//     <div className="relative w-full h-screen  overflow-hidden flex items-center justify-center touch-none">
//       {/* Background Layers */}
//       {[3, 2, 1, 0].map((depth) => {
//         const layerTime = time + depth;
//         const imgIdx = Math.floor(layerTime) % IMAGES.length;
//         const progress = layerTime % 1;
//         // Exponential scale: 1 to 5
//         const scale = Math.pow(5, progress);
//         // Fade out near the end of the zoom cycle
//         const opacity = scale > 4.2 ? Math.max(0, (5 - scale) / 0.8) : 1;

//         return (
//           <div
//             key={`layer-${depth}-${imgIdx}`}
//             className="absolute inset-0 bg-cover bg-center will-change-transform pointer-events-none"
//             style={{
//               backgroundImage: `url(${IMAGES[imgIdx]})`,
//               transform: `scale(${scale})`,
//               opacity: opacity,
//               zIndex: 10 - depth,
//             }}
//           />
//         );
//       })}

//       {/* Branding Overlay */}
//       <div className="absolute z-100 inset-0 flex items-center justify-center text-center pointer-events-none px-4">
//         <div className="w-full max-w-7xl">
          

//           <div className="w-12 md:w-24 h-1px bg-white/40 mx-auto my-8 md:my-16" />
          
         
//         </div>
//       </div>

//       {/* Grain/Noise & Vignette for Depth */}
//       <div className="absolute inset-0 z-110 pointer-events-none bg-[radial-gradient(circle,transparent_20%,rgba(0,0,0,0.4)_100%)]" />
//       <div 
//         className="absolute inset-0 z-120 opacity-[0.08] pointer-events-none mix-blend-overlay" 
//         style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
//       />
//     </div>
//   );
// };

export default ImageZoomForAboutComponent;