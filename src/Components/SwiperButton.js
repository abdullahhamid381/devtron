import React from 'react';
import { useSwiper } from 'swiper/react';
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import  './Scss/SwiperButton.scss'
export const SwiperButton = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns">
            <button onClick={() => swiper.slidePrev()} className='pre'><AiOutlineArrowLeft /></button>
            <button onClick={() => swiper.slideNext()} className='next'><AiOutlineArrowRight /></button>
        </div>
    );
};
