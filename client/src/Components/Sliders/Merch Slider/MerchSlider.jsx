import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "./merchslider.css";

// import Swiper core and required modules
import SwiperCore from 'swiper/core';

import SliderImage from '../../../Assets/slider-image.png';
import MerchSlideImage from '../../../Assets/MerchSlideImage.png';

export default function MerchSlider() {
    return (
        <>
            <Swiper
                slidesPerView={1.3}
                spaceBetween={20}
                freeMode={true}
                breakpoints={{
                    "1150": {
                        "slidesPerView": 4.5,
                        "spaceBetween": 20,
                    }
                }}
                className="merch_slider_container"
            >
                <SwiperSlide className="merch_slide">
                    <img src={MerchSlideImage} alt="The Local Trend Merchandise #1"></img>
                </SwiperSlide>
                <SwiperSlide className="merch_slide">
                    <img src={MerchSlideImage} alt="The Local Trend Merchandise #1"></img>
                </SwiperSlide>
                <SwiperSlide className="merch_slide">
                    <img src={MerchSlideImage} alt="The Local Trend Merchandise #1"></img>
                </SwiperSlide>
                <SwiperSlide className="merch_slide">
                    <img src={MerchSlideImage} alt="The Local Trend Merchandise #1"></img>
                </SwiperSlide>
                <SwiperSlide className="merch_slide">
                    <img src={MerchSlideImage} alt="The Local Trend Merchandise #1"></img>
                </SwiperSlide>
                <SwiperSlide className="merch_slide">
                    <img src={MerchSlideImage} alt="The Local Trend Merchandise #1"></img>
                </SwiperSlide>
                <SwiperSlide className="merch_slide">
                    <img src={MerchSlideImage} alt="The Local Trend Merchandise #1"></img>
                </SwiperSlide>
                <SwiperSlide className="merch_slide">
                    <img src={MerchSlideImage} alt="The Local Trend Merchandise #1"></img>
                </SwiperSlide>
            </Swiper>
        </>
    )
}