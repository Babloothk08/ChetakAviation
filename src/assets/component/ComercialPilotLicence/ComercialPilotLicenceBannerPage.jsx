import React, { useEffect } from "react";
import ComercialPageBanner from "/course/commercialPilotLicence/CoursesbannerCommercialPilotLicenceCPLL.jpeg";

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
