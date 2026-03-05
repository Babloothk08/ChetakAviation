import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

function MultiEngineRatingEligibility() {

const sectionRef = useRef(null);
const eligibilityRef = useRef([]);
const processRef = useRef([]);
const skillsRef = useRef([]);
const careerRef = useRef([]);
const imageRef = useRef(null);

useEffect(() => {

eligibilityRef.current = [];
processRef.current = [];
skillsRef.current = [];
careerRef.current = [];

const ctx = gsap.context(() => {

gsap.from(eligibilityRef.current,{
opacity:0,
y:40,
duration:0.7,
stagger:0.15,
scrollTrigger:{
trigger:sectionRef.current,
start:"top 80%"
}
});

gsap.from(processRef.current,{
opacity:0,
x:-60,
duration:0.8,
stagger:0.2,
scrollTrigger:{
trigger:sectionRef.current,
start:"top 70%"
}
});

gsap.from(skillsRef.current,{
opacity:0,
y:40,
duration:0.7,
stagger:0.12,
scrollTrigger:{
trigger:sectionRef.current,
start:"top 70%"
}
});

gsap.from(careerRef.current,{
opacity:0,
y:60,
duration:0.8,
stagger:0.2,
scrollTrigger:{
trigger:sectionRef.current,
start:"top 75%"
}
});

gsap.from(imageRef.current,{
opacity:0,
x:100,
duration:1,
scrollTrigger:{
trigger:sectionRef.current,
start:"top 80%"
}
});

},sectionRef);

return ()=>ctx.revert();

},[]);

const eligibility = [
"Valid Commercial Pilot Licence (CPL)",
"Required minimum flying hours as per DGCA norms",
"Valid DGCA Class 1 Medical Certificate",
"Proficiency in aviation communication"
];

const process = [
"Ground School Briefing – Aircraft systems, aerodynamics and emergency procedures",
"Pre-Flight Planning – Performance calculations and safety checks",
"Supervised Flight Training – Engine-out practice and abnormal procedures",
"Skill Test & Rating Endorsement – Successful assessment and licence endorsement"
];

const skills = [
"Advanced aircraft control under asymmetric thrust",
"High-precision power management",
"Improved emergency response capability",
"Structured aeronautical decision-making",
"Enhanced situational awareness",
"Professional cockpit discipline"
];

const careers = [
{
title:"Airline Eligibility",
desc:"Most airlines require multi-engine experience as part of their hiring criteria."
},
{
title:"Corporate Aviation",
desc:"Business jets and corporate aircraft operate as multi-engine platforms."
},
{
title:"Charter & Cargo Operations",
desc:"Charter companies prefer multi-engine rated pilots."
},
{
title:"Stronger Resume",
desc:"Demonstrates advanced technical capability and emergency management skills."
}
];

return (

<section ref={sectionRef} className="py-24 bg-white">

<div className="max-w-6xl mx-auto px-6 space-y-20">

{/* Eligibility */}

<div className="grid lg:grid-cols-2 gap-14 items-center">

<div>

<h2 className="text-3xl font-bold text-blue-800 mb-6">
Eligibility for Multi-Engine Rating
</h2>

<ul className="space-y-3">

{eligibility.map((item,index)=>(
<li
key={index}
ref={el=>eligibilityRef.current[index]=el}
className="bg-gray-50 p-4 rounded-lg shadow"
>
✈️ {item}
</li>
))}

</ul>

</div>

<div ref={imageRef} className="flex justify-center">

<img
src="/course/multi-engineRating/EligibilityforMulti-EngineRating.jpg.jpeg"
alt="Pilot Training"
className="rounded-xl shadow-lg h-full w-full"
/>

</div>

</div>


{/* Training Process */}

<div>

<h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
Multi-Engine Training Process
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{process.map((step,index)=>(
<div
key={index}
ref={el=>processRef.current[index]=el}
className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-2xl transition h-full flex flex-col"
>

<h3 className="font-semibold mb-2">
Step {index+1}
</h3>

<p className="text-gray-600 text-sm">
{step}
</p>

</div>
))}

</div>

</div>


{/* Skills */}

<div>

<h2 className="text-3xl font-bold text-blue-800 mb-6">
Skills Developed During Multi-Engine Training
</h2>

<ul className="grid md:grid-cols-2 gap-4">

{skills.map((skill,index)=>(
<li
key={index}
ref={el=>skillsRef.current[index]=el}
className="bg-gray-50 p-4 rounded-lg shadow"
>
✔ {skill}
</li>
))}

</ul>

</div>


{/* Career Advantages */}

<div>

<h2 className="text-3xl font-bold text-blue-800 mb-10 text-center">
Career Advantages of Multi-Engine Rating
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

{careers.map((item,index)=>(

<div
key={index}
ref={el=>careerRef.current[index]=el}
className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl cursor-pointer transition h-full flex flex-col"
>

<h3 className="font-semibold text-lg mb-3">
{item.title}
</h3>

<p className="text-gray-600 text-sm">
{item.desc}
</p>

</div>

))}

</div>

</div>


{/* Bottom CTA Section */}

<div className="bg-blue-700 text-white p-10 rounded-2xl text-center space-y-5">

<h2 className="text-3xl font-bold">
Take the Next Step Toward Airline Readiness
</h2>

<p className="max-w-3xl mx-auto text-blue-100">

The Multi-Engine Rating is more than an endorsement — it is a major step toward professional commercial aviation. 
With structured instruction, advanced emergency training, and safety-driven supervision, 
Chetak Aviation prepares you for higher levels of aviation responsibility.

</p>

<p className="text-lg font-semibold">
✈️ Upgrade your skills. Expand your opportunities.
</p>

<div className="flex justify-center gap-6 pt-4">



<Link to="/contact">
<button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition cursor-pointer">
Enquire Today
</button>
</Link>

</div>

</div>

</div>

</section>

);
}

export default MultiEngineRatingEligibility;