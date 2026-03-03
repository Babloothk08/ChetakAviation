import React, { useEffect } from "react";
import ConversionPageBanner from "/course/conversionFlying/CoursesbannerConversionFlying.jpeg"

function ConversionFlyingBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${ConversionPageBanner})`,
      }}
    ></div>
  );
}

export default ConversionFlyingBannerPage;
