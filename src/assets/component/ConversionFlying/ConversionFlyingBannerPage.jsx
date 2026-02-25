import React, { useEffect } from "react";
import ConversionPageBanner from "/course/conversionFlying/CoursesBannerConversionFlying.jpg.jpeg"

function ConversionFlyingBannerPage() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div
      className="h-[640px] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${ConversionPageBanner})`,
      }}
    ></div>
  );
}

export default ConversionFlyingBannerPage;
