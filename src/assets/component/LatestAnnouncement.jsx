import React, { useEffect, useRef, useState } from "react";
import LatestUpdate from "/LatestAnnouncement/Home-Page(Latest Announcement).jpg (1).jpeg";

function LatestAnnouncement() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // 👈 Stops observing after first trigger
      }
    },
    {
      threshold: 0.2, // Trigger when 20% visible
      rootMargin: "0px 0px -50px 0px", // 👈 waits until section is properly inside view
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    observer.disconnect();
  };
}, []);

  return (
    <div
      ref={sectionRef}
      className="w-full max-w-screen mx-auto px-10 py-10 bg-blue-700 overflow-hidden"
    >
      <h1 className="text-2xl font-bold text-center mb-10 text-white">
        Latest Announcements
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        
        {/* LEFT SIDE */}
        <div
          className={`w-full md:w-1/2 flex justify-center items-center bg-gray-100 rounded-2xl overflow-hidden
          transform transition-all duration-1000 ease-out
          ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
          `}
        >
          <img
            src={LatestUpdate}
            alt="Latest Announcement"
            className="w-full h-full"
          />
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`w-full md:w-1/2 space-y-6
          transform transition-all duration-1000 ease-out
          ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
          `}
        >
          <div className="bg-blue-50 rounded-lg border-blue-600 border-r-2">
            <div className="bg-gray-400">
              <h2 className="text-xl font-bold text-blue-800 pb-6 p-4">
                Announcements
              </h2>
            </div>
            <p className="text-gray-700 p-4 cursor-pointer">
              Fee Revision Circular : 01/2026
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between p-4 border border-amber-50 rounded-xl hover:shadow-md transition">
              <p className="font-medium text-white">
                Experience Cadet Life at Avyanna
              </p>
              <button className="bg-white text-blue-800 font-semibold px-4 py-2 rounded-lg text-sm hover:border-2">
                Book Your Experience
              </button>
            </div>

            <div className="flex items-center justify-between p-4 border border-amber-50 rounded-xl hover:shadow-md transition">
              <p className="font-medium text-white">
                Book your campus visit
              </p>
              <button className="bg-white text-blue-800 font-semibold px-4 py-2 rounded-lg text-sm hover:border-2">
                Book Visit
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl hover:shadow-md transition border border-amber-50">
              <p className="font-medium text-white pr-2">
                Register for Entrance Test (AEL)
              </p>
              <button className="bg-white text-blue-800 font-semibold px-4 py-2 rounded-lg text-sm hover:border-2">
                Book Your Slot
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LatestAnnouncement;