import React from 'react'
import CareerPage from "/careerPage/Carrer-banner.jpg.jpeg";

function GalleryBanner() {
  return (
    <div className='md:min-h-screen w-full'>
      <img src={CareerPage} alt="CareerPage" className='bg-cover bg-center' />
    </div>
  )
}

export default GalleryBanner
