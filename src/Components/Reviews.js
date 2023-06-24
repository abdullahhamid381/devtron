
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





import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

import IconButton from '@mui/material/IconButton';



import '../Components/Scss/Ourproject.scss'



import { SwiperButton } from "./SwiperButton";
import { A11y, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { AiOutlineArrowRight } from "react-icons/ai";
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));








const Reviews = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="main-parent">
            <div className='reviews-parent'>

                <div className='titlee'>
                    <h1>
                        What <b>People Say</b> About <br /> Our AI Service & Technology
                    </h1>
                    {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    </p> */}
                </div>



                {/* SLIDER SECTION START HERE */}

                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={30}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        992: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="swiper-back"
                >
                    <div className="review-slider">
                        {reviewsection.map((map) => {
                            return (
                                <SwiperSlide className="res-slide" style={{ paddingTop: '60px' }}>
                                    <Card className='card-parent' style={{background:'none'}}>

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
                                    </Card>
                                </SwiperSlide>
                            );
                        })}
                    </div>

                    <div className="buttons" style={{ padding: "20px 0 20px 0", float: 'right' }}>
                        <SwiperButton />
                    </div>
                </Swiper>

            </div>


        </div>



    )
}

export default Reviews