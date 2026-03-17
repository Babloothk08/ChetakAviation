import React, { useEffect } from "react";
import FlightInstructorPageBanner from "/course/flightInstructorCourse/CoursesbannerFlightInstructorCourse.jpeg";

function FlightInstructorBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="md:min-h-screen w-full ">
      <img src={FlightInstructorPageBanner} alt="FlightInstructorPageBanner" className="bg-cover bg-center bg-no-repeat"/>
    </div>
  );
}

export default FlightInstructorBannerPage;
