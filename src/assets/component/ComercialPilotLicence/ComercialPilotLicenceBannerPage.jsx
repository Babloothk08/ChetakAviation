import React, { useEffect } from "react";
import ComercialPageBanner from "/public/course/Contect_Us_Bannerrr.jpg";

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
