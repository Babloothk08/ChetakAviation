import React from "react";
import LatestUpdate from "/public//couroselComponent/Latest_announcement.jpg"

function LatestAnnouncement() {
  
  return (
    <div data-aos="fade-up" className="w-full max-w-screen mx-auto px-6 py-10 bg-blue-700">
      
      <h1 className="text-2xl font-bold text-center mb-10 text-white">
        Latest Announcements
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        
        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 rounded-2xl overflow-hidden">
          <img src={LatestUpdate} alt="Latest Announcement" className=""/>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          
          <div className="bg-blue-50  rounded-lg  border-blue-600 h-30 border-r-2 border-grey-600">
            <div className="bg-gray-400 ">
              <h2 className="text-xl font-bold text-blue-800 pb-6 p-4">Announcements</h2>
            </div>
            <p className="text-gray-700 p-4 cursor-pointer">Fee Revision Circular : 01/2026</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-between p-4 border border-amber-50 rounded-xl hover:shadow-md transition">
              <p className="font-medium text-white">Experience Cadet Life at Avyanna</p>
              <button className="md:h-10 h-13 w-45 bg-white text-blue-800 font-semibold hover:text-blue-900 hover:border-2 cursor-pointer px-4 py-2 rounded-lg text-sm ">Book Your Experience</button>
            </div>

            <div className="flex items-center justify-between p-4 border border-amber-50 rounded-xl hover:shadow-md transition">
              <p className="font-medium text-white">Book your campus visit</p>
              <button className="bg-white text-blue-800 font-semibold px-4 py-2 rounded-lg text-sm h-10 w-25 cursor-pointer hover:border-2">Book Visit</button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl hover:shadow-md transition border border-amber-50">
              <p className="font-medium text-white pr-2">Register for Entrance Test (AEL)</p>
              <button className="bg-white text-blue-800 font-semibold px-4 py-2 rounded-lg text-sm md:h-10 w-35 hover:border-2 cursor-pointer">Book Your Slot</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LatestAnnouncement;