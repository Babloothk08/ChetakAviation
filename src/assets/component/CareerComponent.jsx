import React, { useEffect } from 'react'
import CareerPage from "/careerPage/career-banner-chetak.jpg.jpeg"

function CareerComponent() {
  useEffect(() => {
      window.scroll(0, 0);
    });
    return (
      <div
        className="h-[640px] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${CareerPage})`,
        }}
      ></div>
    );
  }

export default CareerComponent
