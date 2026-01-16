import React from "react";
import SuperFlowSlider from "../component/SuperSlider";

function Courses() {
  return (
    <>
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSEDaMEoX0Tkzqw74YSBab3HI2czZ14hUpGxq1Wuko5h6hGPVhF')",
      }}
    >
    </div>
    
    <div className="px-35"> 
      <h1 className="text-4xl text-center font-bold text-blue-900 pt-15">Our Courses</h1>
      <p className="pt-5 text-gray-600 md:text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reiciendis, est asperiores autem dignissimos quasi natus corrupti, animi dolores excepturi tenetur, totam facere eum necessitatibus adipisci. Libero incidunt beatae dolorem?
      At sunt quibusdam pariatur impedit, tenetur rerum? At ratione earum repellendus. Animi doloribus ipsum aliquam aperiam, ex, iusto corrupti veniam accusantium quidem iure, soluta quasi deleniti. Hic animi veniam officia.
      Sequi repellendus error nostrum ipsa repudiandae? Magni cupiditate culpa animi quasi voluptates, quas fugiat tenetur neque id totam maxime cum officia harum quisquam recusandae deleniti dolores molestiae doloribus repudiandae! Id?
      Culpa magnam nostrum ipsam voluptatum nesciunt optio vel fuga quasi, temporibus ipsa amet deserunt! Eos, earum deleniti suscipit quibusdam nisi distinctio, excepturi doloremque similique aspernatur quod voluptatum eum quia error.
      Fugiat cumque dolores harum odit doloremque itaque recusandae quo quia aliquam impedit rem nemo ipsam voluptates explicabo quod, totam fugit cum! Aut nobis, quaerat harum unde laboriosam voluptates distinctio totam!</p>
    </div>
    <SuperFlowSlider/>
    </>
  );
}

export default Courses;
