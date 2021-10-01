import React from 'react';
import classes from './artistprofile.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import ArtistAndroid from '../../Assets/Artist-Android.png';
import Track from '../../Components/Track/Track';
import Footer from '../../Components/Footer/Footer';
import FreemodeSlider from '../../Components/Sliders/Freemode Slider/FreemodeSlider';
import Sidebar from '../../Components/Sidebar/Sidebar';

export default function ArtistProfile() {

    const [isMobile, setIsMobile] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);


    React.useEffect(() => {
        window.addEventListener("resize", setWidth(window.innerWidth));
        checkWindowSize();
        scrollToTop();

        return () => {
            window.removeEventListener("resize", setWidth(window.innerWidth));
        }
    }, [])

    //function to check user device (mobile or desktop) to toggle sidebar render
    function checkWindowSize() {
        if (width >= 320 && width <= 480) {
            setIsMobile(true);
        }
        else if (width >= 990) {
            setIsDesktop(true);
        }
    }

    //function to scroll the page to top
    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    return (

        <div className={classes.superWrapper}>
            {isDesktop && <Sidebar />}
            <div className={classes.wrapper}>
                {
                    //Navbar
                }
                {isMobile && <Navbar />}
                {
                    //Artist Image for Mobile Devices
                }
                {
                    isMobile &&
                    <img src={ArtistAndroid} alt="Artist Name" className={classes.artist_image_mobile}></img>
                }
                {
                    //Artist details section
                }
                <section className={classes.artist_details_section}>
                    {
                        isDesktop &&
                        <img src={ArtistAndroid} alt="Artist Name" className={classes.artist_image_desktop}></img>
                    }
                    <div className={classes.desktopWrapper}>
                        <div className={classes.artist_name}>
                            pincool
                        </div>
                        <div className={classes.artist_role}>
                            music producer
                        </div>
                        <div className={classes.artist_bio}>
                            Pincool has been making music for around 6 years now . Started his career with a remix album of Assamese songs which went viral back then , later on started making originals with some prominent names in the industry. Some of his most streamed tracks are 'Jyotikona' , 'Mone bisare' , 'Mone bisare 2.0' .
                        </div>
                        <div className={classes.social_media_links_container}>
                            <div className={classes.left}>
                                <i className="fab fa-facebook-square"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div className={classes.right}>
                                <i class="fab fa-spotify"></i>
                                <i class="fab fa-youtube"></i>
                            </div>
                        </div>
                    </div>
                </section>

                {
                    //New Releases Section
                }
                <section className={classes.new_releases_section}>
                    <div className={classes.section_header}>
                        new releases
                    </div>
                    <FreemodeSlider />
                </section>

                {
                    //Popular Tracks Section
                }
                <section className={classes.popular_tracks_section}>
                    <div className={classes.section_header}>
                        popular tracks
                    </div>
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                    <Track />
                </section>
                <Footer />
            </div>
        </div>
    )
}
