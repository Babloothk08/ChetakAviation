import React, { useEffect } from "react";
import PrivotPilotBannerPage from "/course/privatePilotLicence/CoursesbannerPrivatePilotLicence.jpeg"

function PrivotPilotLicenceBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  },[]);
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${PrivotPilotBannerPage})`,
      }}
    ></div>
  );
}

export default PrivotPilotLicenceBannerPage;
