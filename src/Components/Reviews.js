
import './/Scss/Review.scss'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ImQuotesLeft } from 'react-icons/im'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Autoplay } from "swiper";
import { reviewsection } from './Data/Data';

const Reviews = () => {
    return (
     <div className="main-parent">
           <div className='reviews-parent'>

<div className='titlee'>
    <h1>
        What <b>People Say</b> About <br /> Our AI Service & Technology
    </h1>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    </p>
</div>



{/* SLIDER SECTION START HERE */}

<Swiper
    slidesPerView={3}
    autoplay={{
        delay: 5000,
        disableOnInteraction: false,
    }}
    spaceBetween={30}
    // pagination={{
    //     clickable: true,
    // }}
    modules={[Autoplay]}
    className="mySwiper"
>
    <div className='review-slider'>
        {
            reviewsection.map((map) => {
                return (
                    <SwiperSlide>
                        <div className='review-parent'>
                            <div className='review-icon'>
                                <ImQuotesLeft style={{ color: '#2EDAF1', fontSize: '48px' }} />
                            </div>
                            <div className='review-para'>
                                <p>

                                    {map.reviewdetail}
                                </p>
                            </div>
                            <div className='review-img'>
                                <div style={{ width: '30%' }}>
                                    <img src={map.imgreviewer} alt="" />

                                </div>
                                <div>
                                    <h4>

                                        {map.namereviewer}
                                    </h4>
                                    <p>
                                        {map.servicereviewer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
    </div>

</Swiper>

</div>
     </div>
    )
}

export default Reviews