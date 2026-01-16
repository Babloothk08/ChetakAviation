import React from 'react'
import AboutUs from "/public/logo/AboutUs.jpg"
function AboutComponent() {
  return (
    <div className="w-full max-w-screen mx-auto px-6 py-10 bg-white">
      
      <h1 className="text-3xl font-bold text-center mb-10 text-white">
        Latest Announcements
      </h1>

      <div className="flex flex-col md:flex-row items-start justify-between gap-8">

        <div className="w-full md:w-1/2 space-y-2 px-4">
          <h1 className='text-3xl'>About Section</h1>
          <div>
            <h2 className='text-2xl pb-2'>This is a about section</h2>
            <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta id animi veniam non eligendi maiores inventore dolor! Odio, harum alias. Aliquid, similique quibusdam? Quisquam ipsam expedita ducimus ipsum nihil?</p>
            <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam fugiat doloremque incidunt officiis in ullam quidem sint nesciunt soluta aliquam architecto atque deserunt recusandae ab maiores eligendi, natus sapiente!
            Libero autem molestiae saepe in qui officia amet, blanditiis odio doloribus ipsa esse reiciendis error voluptatum labore? Vero hic quam quis velit possimus, fuga iusto maiores quos placeat sit enim.</p>
          </div>
          <button className="px-4 py-2  text-white bg-blue-700 hover:bg-blue-800 rounded-xl text-lg font-semibold transition cursor-pointer">
            Enquiry Today
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 rounded-2xl h-92    ">
          <img src={AboutUs} alt='about' className='h-full w-399 rounded-2xl'/>
        </div>
      </div>
      
    </div>
  );
}

export default AboutComponent
