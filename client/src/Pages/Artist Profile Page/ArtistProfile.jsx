import React from 'react';
import classes from './artistprofile.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import Track from '../../Components/Track/Track';
import Footer from '../../Components/Footer/Footer';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function ArtistProfile() {

    const [isMobile, setIsMobile] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(false);
    const [width, setWidth] = React.useState(window.innerWidth);
    const data = useLocation().state;
    let imageURL = `https://www.thelocaltrendent.com/api/artists/images/${data.profile_image}`;


    React.useEffect(() => {
        window.addEventListener("resize", setWidth(window.innerWidth));
        checkWindowSize();
        scrollToTop();
        data.songs.map(item => {
            console.log(item.song_name);
        })

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
                    <img src={imageURL} alt={data.name} className={classes.artist_image_mobile}></img>
                }
                {
                    //Artist details section
                }
                <section className={classes.artist_details_section}>
                    {
                        isDesktop &&
                        <img src={imageURL} alt={data.name} className={classes.artist_image_desktop}></img>
                    }
                    <div className={classes.desktopWrapper}>
                        <div className={classes.artist_name}>
                            {data.name}
                        </div>
                        <div className={classes.artist_role}>
                            {data.role}
                        </div>
                        <div className={classes.artist_bio}>
                            {data.bio}
                        </div>
                        <div className={classes.social_media_links_container}>
                            <div className={classes.left}>
                                {!(data.fb_url === undefined) &&
                                    <Link
                                        to={{
                                            pathname: data.fb_url
                                        }}
                                        target="_blank"
                                    >
                                        <i className="fab fa-facebook"></i>
                                    </Link>
                                }
                                {!(data.insta_url === undefined) &&
                                    <Link
                                        to={{
                                            pathname: data.insta_url
                                        }}
                                        target="_blank"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </Link>
                                }
                                {!(data.twitter_url === undefined) &&
                                    <Link
                                        to={{
                                            pathname: data.twitter_url
                                        }}
                                        target="_blank"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </Link>
                                }
                            </div>
                            <div className={classes.right}>
                                {!(data.spotify_url === undefined) &&
                                    <Link
                                        to={{
                                            pathname: data.spotify_url
                                        }}
                                        target="_blank"
                                    >
                                        <i className="fab fa-spotify"></i>
                                    </Link>
                                }
                                {!(data.youtube_url === undefined) &&
                                    <Link
                                        to={{
                                            pathname: data.youtube_url
                                        }}
                                        target="_blank"
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </section>

                {
                    //Popular Tracks Section
                }
                <section className={classes.popular_tracks_section}>
                    <div className={classes.section_header}>
                        popular tracks
                    </div>
                    {data.songs.map(item => {
                        return <Track data={item}/>
                    })}
                </section>
                <Footer />
            </div>
        </div>
    )
}
