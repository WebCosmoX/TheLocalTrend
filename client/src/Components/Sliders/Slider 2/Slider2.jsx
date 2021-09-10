import React from "react";
import Workshop from '../../../Assets/Workshop.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "./styles.css";

export default function Slider2() {

    return (
        <>
            <Swiper
                slidesPerView={1.3}
                spaceBetween={10} freeMode={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Workshop} alt="Workshop Name"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Workshop} alt="Workshop Name"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Workshop} alt="Workshop Name"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Workshop} alt="Workshop Name"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Workshop} alt="Workshop Name"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Workshop} alt="Workshop Name"></img>
                </SwiperSlide>
            </Swiper>
        </>
    )
}