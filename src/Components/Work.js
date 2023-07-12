
import './/Scss/Review.scss'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ImQuotesLeft } from 'react-icons/im'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './Scss/Work.scss'


// import required modules
import { Autoplay } from "swiper";
import { reviewsection, workproject } from './Data/Data';





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








const Work = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <div className="main-parenttwo">
         
            <div className='work-parent'>
            <div>
                <div className='title'>
                    <h1>Take A Look At Our <span>Completed Projects</span> </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
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
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1101: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                    }}
                    className="swiper-back"
                >
                    <div className="review-slider">
                        {workproject.map((map) => {
                            return (
                                <SwiperSlide  >
                                    <Card className='card-parent' style={{background:'none',boxShadow:'none',paddingTop:'80px'}}>

                                        <div className='review-parent'>
                                        <div>
                                            <img src={map.img} alt="" style={{width:'100%',borderRadius:'8px'}} />
                                        </div>
                                    <center>    <div className='description'>
                                            <h1>{map.h3}</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                            <h5>{map.h5}</h5>
                                        </div></center>
                                        </div>
                                    </Card>
                                </SwiperSlide>
                            );
                        })}
                    </div>

                    <div className="buttons" style={{ padding: "20px 0 20px 0", float: 'right',marginTop:'150px' }}>
                        <SwiperButton />
                    </div>
                </Swiper>

            </div>


            </div>



    )
}

export default Work