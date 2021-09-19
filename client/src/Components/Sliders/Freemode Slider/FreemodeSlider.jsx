import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/scrollbar/scrollbar.min.css";
import "./freemodeslider.css";

// import Swiper core and required modules
import SwiperCore, {
    Scrollbar
} from 'swiper/core';

import SliderImage from '../../../Assets/slider-image.png';

// install Swiper modules
SwiperCore.use([Scrollbar]);

export default function FreemodeSlider() {
    return (
        <>
            <Swiper
                slidesPerView={1.3}
                spaceBetween={20}
                freeMode={true}
                scrollbar={{
                    "hide": false
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
            </Swiper>
        </>
    )
}