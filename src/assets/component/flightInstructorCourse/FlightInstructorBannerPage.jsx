import React, { useEffect } from "react";
import FlightInstructorPageBanner from "/course/flightInstructorCourse/CourseBannerFlightInstructorCourse.jpg.jpeg";

function FlightInstructorBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${FlightInstructorPageBanner})`,
      }}
    ></div>
  );
}

export default FlightInstructorBannerPage;
