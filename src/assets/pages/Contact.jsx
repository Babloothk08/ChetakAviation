import React from 'react'
import ContactData from '../component/contact/ContactData'

function Contact() {
  return (
     <>
     <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEDaMEoX0Tkzqw74YSBab3HI2czZ14hUpGxq1Wuko5h6hGPVhF')",
      }}
    >
    </div>
    <ContactData/>
     </>
  )
}

export default Contact
