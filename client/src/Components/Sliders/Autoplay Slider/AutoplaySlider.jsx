import React from "react";
import AlbumArt1 from '../../../Assets/Album Art-Android.png';
import AlbumArt2 from '../../../Assets/Album Art2-Android.png';
import AlbumArt3 from '../../../Assets/Album Art3-Android.png';
import AlbumBackdrop1 from '../../../Assets/Album Backdrop1.png';
import AlbumBackdrop2 from '../../../Assets/Album Backdrop2.png';
import AlbumBackdrop3 from '../../../Assets/Album Backdrop3.png';
import RepBackdrop from '../../../Assets/RepBackdrop.png';
import Spotify from '../../../Assets/Spotify.png';
import YouTube from '../../../Assets/YouTube.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./autoplayslider.css";

// import Swiper core and required modules
import SwiperCore, {
    Pagination, Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);

export default function AutoplaySlider() {

    return (
        <>
            <Swiper
                pagination={{
                    "dynamicBullets": true,
                }}
                autoplay={{
                    "delay": 2000,
                    "disableOnInteraction": false,
                }}
                loop={true}
                className="latest_releases_slider"
            >
                <SwiperSlide className="latest_releases_slide">
                    <img src={AlbumBackdrop1} alt="Album Art" className="album_art_desktop"></img>
                    <div className="overlay">
                        <div className="song_details">
                            <h5 className="artist_name">
                                Sannidhya Bhuyan & Aarxslan
                            </h5>
                            <h3 className="song_name">
                                Motoliya 2.0
                            </h3>
                        </div>
                        <div className="stream_now_links">
                            Stream now:
                            <span>
                                <img src={Spotify} alt="Spotify Link"></img>
                            </span>
                            <span>
                                <img src={YouTube} alt="YouTube Link"></img>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="latest_releases_slide">
                    <img src={AlbumBackdrop2} alt="Album Art" className="album_art_mobile"></img>
                    <div className="overlay">
                        <div className="song_details">
                            <h5 className="artist_name">
                                Sannidhya Bhuyan & Tonmoy Krypton
                            </h5>
                            <h3 className="song_name">
                                Xarodi Nikha
                            </h3>
                        </div>
                        <div className="stream_now_links">
                            Stream now:
                            <span>
                                <img src={Spotify} alt="Spotify Link"></img>
                            </span>
                            <span>
                                <img src={YouTube} alt="YouTube Link"></img>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="latest_releases_slide">
                    <img src={AlbumBackdrop3} alt="Album Art" className="album_art_mobile"></img>
                    <div className="overlay">
                        <div className="song_details">
                            <h5 className="artist_name">
                                Sannidhya Bhuyan & Nikhil ft. NibirX
                            </h5>
                            <h3 className="song_name">
                                Tumi Xubaxh
                            </h3>
                        </div>
                        <div className="stream_now_links">
                            Stream now:
                            <span>
                                <img src={Spotify} alt="Spotify Link"></img>
                            </span>
                            <span>
                                <img src={YouTube} alt="YouTube Link"></img>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}