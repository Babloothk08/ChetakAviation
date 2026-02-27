import React, { useEffect } from 'react'
import ContactData from '../component/contact/ContactData'
import ContactBanner from "/contact/contact-us-banner-chetak.jpg.jpeg"

function Contact() {
  useEffect(() => {
      window.scroll(0, 0);
    });
  return (
     <>
     <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:`url(${ContactBanner})`,
      }}
    >
    </div>
    <ContactData/>
     </>
  )
}

export default Contact
