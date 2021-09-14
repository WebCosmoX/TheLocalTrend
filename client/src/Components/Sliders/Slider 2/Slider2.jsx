import React from "react";
import Merch1 from '../../../Assets/Merch1.png';
import Merch2 from '../../../Assets/Merch2.png';

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
                spaceBetween={15} freeMode={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Merch1} alt="Merchandise Pic"></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Merch2} alt="Merchandise Pic"></img>
                </SwiperSlide>
            </Swiper>
        </>
    )
}