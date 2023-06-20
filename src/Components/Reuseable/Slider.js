import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.scss";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={false}
                pagination={false}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                {/* <SwiperSlide>

                    <img src={"./images/1.jpg"} width={"100%"} />


                    <div className="parent">
                        <div style={{width:'82%',margin:'auto'}}>
                        <h1>Creating a Better <br /> <b style={{ color: '#2EDAF1' }}>IT Solutions.</b></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis faucibus ligula. Maecenas a <br /> purus massa. Ut elementum sem mauris, ut venenatis tortor congue et. Ut et dolor massa.</p>

                        <button><a href="">Contact Us </a></button>
                        </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    {/* <img src={"./images/2.jpg"} width={"100%"} /> */}
                    <div className="parent">
                       <div className="main-text">
                       <div style={{width:'82%',margin:'auto'}}>
                        <h1>Creating a Better <br /> <b style={{ color: '#2EDAF1' }}>IT Solutions.</b></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis faucibus ligula. Maecenas a <br /> purus massa. Ut elementum sem mauris, ut venenatis tortor congue et. Ut et dolor massa.</p>

                        <button><a href="">Contact Us </a></button>
                        </div>
                       </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
}
