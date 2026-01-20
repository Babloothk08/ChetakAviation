import React, { useEffect } from "react";
import ComercialPageBanner from "/public/course/commercialPilotLicence/Commercial_Pilot_Licence_Bannerrr.jpg";

function ComercialPilotLicenceBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${ComercialPageBanner})`,
      }}
    ></div>
  );
}

export default ComercialPilotLicenceBannerPage;
