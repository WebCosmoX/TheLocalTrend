import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "./freemodeslider.css";

// import Swiper core and required modules
import SwiperCore from 'swiper/core';

import SliderImage from '../../../Assets/slider-image.png';


export default function FreemodeSlider() {
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
                className="artist_releases_container"
            >
                <SwiperSlide className="artist_releases_slide">
                    <img src={SliderImage} alt="Track Name"></img>
                    <div className="video_title">
                        mone bisora 2.0
                    </div>
                </SwiperSlide>
                <SwiperSlide className="artist_releases_slide">
                    <img src={SliderImage} alt="Track Name"></img>
                    <div className="video_title">
                        mone bisora 2.0
                    </div>
                </SwiperSlide>
                <SwiperSlide className="artist_releases_slide">
                    <img src={SliderImage} alt="Track Name"></img>
                    <div className="video_title">
                        mone bisora 2.0
                    </div>
                </SwiperSlide>
                <SwiperSlide className="artist_releases_slide">
                    <img src={SliderImage} alt="Track Name"></img>
                    <div className="video_title">
                        mone bisora 2.0
                    </div>
                </SwiperSlide>
                <SwiperSlide className="artist_releases_slide">
                    <img src={SliderImage} alt="Track Name"></img>
                    <div className="video_title">
                        mone bisora 2.0
                    </div>
                </SwiperSlide>
                <SwiperSlide className="artist_releases_slide">
                    <img src={SliderImage} alt="Track Name"></img>
                    <div className="video_title">
                        mone bisora 2.0
                    </div>
                </SwiperSlide>
                <SwiperSlide className="artist_releases_slide">
                    <img src={SliderImage} alt="Track Name"></img>
                    <div className="video_title">
                        mone bisora 2.0
                    </div>
                </SwiperSlide>
                <SwiperSlide className="artist_releases_slide">
                    <img src={SliderImage} alt="Track Name"></img>
                    <div className="video_title">
                        mone bisora 2.0
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}