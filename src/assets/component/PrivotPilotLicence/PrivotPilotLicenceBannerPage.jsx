import React, { useEffect } from "react";
import PrivotPilotBannerPage from "/public/course/privatePilotLicence/Private_Pilot_Licence_Banner.jpg"

function PrivotPilotLicenceBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
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
