import React from 'react'
import AboutUs from "/public/logo/AboutUs.jpg"
import { Link } from 'react-router-dom';
function AboutComponent() {
  return (
    <div data-aos="fade-up" className="w-full max-w-screen mx-auto px-6 py-10 bg-white">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 ">

        <div  className="w-full md:w-1/2 space-y-2 px-4">
          <h1 className='text-3xl font-semibold pb-3 text-blue-900'>Chetak Aviation – A Flying Training Academy</h1>
          <div>
           
            <p className='pb-4 text-slate-500'>Chetak Aviation is a professional flying training academy in Aligarh, dedicated to providing quality aviation education for aspiring pilots. We focus on building a strong foundation in aviation theory, discipline, and safety, which are essential for a successful career in flying.</p>
            <p className='pb-4 text-slate-500'>Our training approach is guided by experienced aviation instructors who understand the academic and practical demands of pilot training. At Chetak Aviation, students receive DGCA-oriented ground instruction, clear conceptual learning, and continuous mentorship to help them progress confidently in their aviation journey.</p>
            <p className='pb-2 text-slate-500'>We believe that becoming a pilot requires more than technical knowledge—it requires the right mindset, responsibility.</p>
          </div>
          <button className="px-4 py-2  text-white bg-blue-700 hover:bg-blue-800 rounded-xl text-lg font-semibold transition cursor-pointer">
            <Link to="/contact">Enquiry Today</Link>
          </button>
        </div>

        <div  className="w-full md:w-1/2 flex justify-center items-center bg-gray-100 rounded-2xl h-92    ">
          <img src={AboutUs} alt='about' className='h-full w-399 rounded-2xl cursor-pointer'/>
        </div>
      </div>
      
    </div>
  );
}

export default AboutComponent
