// import React from "react";
// import ".//Scss/CompleteProject.scss";
// import { workproject } from "./Data/Data";
// import { Swiper, SwiperSlide } from "swiper/react";

// import { SwiperButton } from "./SwiperButton";
// import { A11y, Navigation, Pagination } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import { AiOutlineArrowRight } from "react-icons/ai";
// import Ourprojects from "./Ourprojects";
// const CompletedProject = () => {
//   return (
//     <div className="main-parent-completedprojects">
//       <div className="complete-project-parent">
//         <div className="text">
//           <h1>
//             Take A Look At Our <b>Completed Projects</b>
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua
//           </p>
//         </div>
//         <div>
//             <Ourprojects/>
//         </div>

//         {/* <Swiper
//           modules={[Navigation, Pagination, A11y]}
//           spaceBetween={30}
//           breakpoints={{
//             300: {
//               slidesPerView: 1,
//               spaceBetween: 30,
//             },
//             640: {
//               slidesPerView: 1,
//               spaceBetween: 30,
//             },
//             768: {
//               slidesPerView: 1,
//               spaceBetween: 40,
//             },
//             992: {
//               slidesPerView: 1,
//               spaceBetween: 40,
//             },
//             1024: {
//               slidesPerView: 2,
//               spaceBetween: 50,
//             },
//           }}
//           className="swiper-back"
//         >
//           <div className="work-images">
//             {workproject.map((map) => {
//               return (
//                 <SwiperSlide className="res-slide">
//                   <div className="work">
//                     <img src={map.img} alt="" width={"100%"} />
//                     <div className="details">
//                       <h3>{map.h3}</h3>
//                       <p>{map.p}</p>
//                       <div className="icon-deiv">
//                         <span>{map.h5}</span>
//                         <span className="icons">
//                           <AiOutlineArrowRight />
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//           </div>

//           <div className="buttons" style={{    padding: "120px 0 20px 0",float:'right'}}>
//             <SwiperButton />
//           </div>
//         </Swiper> */}
//       </div>
//     </div>
//   );
// };

// export default CompletedProject;

import React from 'react'
import ".//Scss/CompleteProject.scss";
import Ourprojects from './Ourprojects';
const CompletedProject = () => {
  return (
    <div className="our-project-parent-title">
      <h1> Take A Look At Our <b>Completed Projects</b></h1>
      <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua     </p>
<div>
<Ourprojects/>
</div>
    </div>
  )
}

export default CompletedProject