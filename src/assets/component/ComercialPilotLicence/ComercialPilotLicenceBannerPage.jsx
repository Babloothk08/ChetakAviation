import React, { useEffect } from "react";
import ComercialPageBanner from "/course/commercialPilotLicence/CoursesBannerCommercialPilotLicenceCPL.jpeg";

function ComercialPilotLicenceBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="h-[640px] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${ComercialPageBanner})`,
      }}
    ></div>
  );
}

export default ComercialPilotLicenceBannerPage;
