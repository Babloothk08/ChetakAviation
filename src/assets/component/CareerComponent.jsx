import React, { useEffect } from 'react'
import CareerPage from "/careerPage/Carrer-banner.jpg.jpeg"

function CareerComponent() {
  useEffect(() => {
      window.scroll(0, 0);
    });
    return (
      <div
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${CareerPage})`,
        }}
      ></div>
    );
  }

export default CareerComponent
