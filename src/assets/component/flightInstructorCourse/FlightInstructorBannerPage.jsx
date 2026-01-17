import React, { useEffect } from "react";
import FlightInstructorPageBanner from "/public/course/flightInstructorCourse/Flight_Instructor_Course_Banner.jpg";

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
