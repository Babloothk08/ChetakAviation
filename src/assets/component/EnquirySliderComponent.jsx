// import React from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const slides = [
//   {
//     image: "/HomePageBanner/Website-Banner-Chetak-one.jpg.jpeg",
//   },
//   {
//     image: "/HomePageBanner/Website-Banner-ChetakTwo.jpg.jpeg",
//   },
//   {
//     image: "/HomePageBanner/Website-Banner-ChetakThree.jpg.jpeg",
//   },
//   {
//     image: "/HomePageBanner/Website-Banner-ChetakFour.jpg.jpeg",
//   },
// ];

// function EnquirySliderComponent() {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 800,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//   };

//   return (
//     <div className="w-full overflow-hidden">

//       <Slider {...settings}>

//         {slides.map((slide, index) => (
//           <div key={index}>

//             <img
//               src={slide.image}
//               alt="banner"
//               className="w-full  object-cover"
//             />

//           </div>
//         ))}

//       </Slider>

//     </div>
//   );
// }

// export default EnquirySliderComponent;




import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/HomePageBanner/Website-Banner-Chetak-one.jpg.jpeg",
  },
  {
    image: "/HomePageBanner/Website-Banner-ChetakTwo.jpg.jpeg",
  },
  {
    image: "/HomePageImageSlider/homepage-Banner-Size.jpg",
  },
  {
    image: "/HomePageImageSlider/home-page-bannersize.jpg",
  },
];

// RIGHT ARROW
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute right-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full"
      onClick={onClick}
    >
      →
    </div>
  );
}

// LEFT ARROW
function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black/40 hover:bg-black/60 text-white w-10 h-10 flex items-center justify-center rounded-full"
      onClick={onClick}
    >
      ←
    </div>
  );
}

function EnquirySliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full overflow-hidden relative">

      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img
              src={slide.image}
              alt="banner"
              className="w-full object-cover"
            />
          </div>
        ))}
      </Slider>

    </div>
  );
}

export default EnquirySliderComponent;