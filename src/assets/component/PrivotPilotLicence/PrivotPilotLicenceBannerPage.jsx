import React, { useEffect } from "react";
import PrivotPilotBannerPage from "/course/privatePilotLicence/CoursesBannerPrivatePilotLicence.jpg.jpeg"

function PrivotPilotLicenceBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="h-[640px] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${PrivotPilotBannerPage})`,
      }}
    ></div>
  );
}

export default PrivotPilotLicenceBannerPage;
