import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import classes from './homepage.module.css';
import HeroImage from '../../Assets/Hero Image.png';
import HeroImageAndroid from '../../Assets/Hero Image-Android.png';
import SocialMobile from '../../Components/Social Media Pack/Mobile/SocialMobile';
import AutoplaySlider from '../../Components/Sliders/Autoplay Slider/AutoplaySlider';
import ServiceCard from '../../Components/Cards/Service Card/ServiceCard';
import ArtistCard from '../../Components/Cards/Artist Card/ArtistCard';
import SocialDesktop from '../../Components/Social Media Pack/Desktop/SocialDesktop';
import EventLink from '../../Components/Links/EventLink';
import Footer from '../../Components/Footer/Footer';
import MerchSlider from '../../Components/Sliders/Merch Slider/MerchSlider';
import lottie from 'lottie-web';
import ViewAllButton from '../../Components/Buttons/ViewAll Buttons/ViewAllButton';
import baseurl from '../../api.config.js';

export default function HomePage() {

    const animeContainer = React.useRef(null);
    const [artists, setArtists] = React.useState([]);
    const [services, setServices] = React.useState([]);

    React.useEffect(() => {
        scrollToTop();
        fetchServices();
        fetchArtistDetails();

        lottie.loadAnimation({
            container: animeContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Lottie/hour-glass-lottie.json'),
        })
    }, []);

    //function to scroll the page to top
    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    //function to fetch services for "Our Services" section
    function fetchServices() {
        try {
            baseurl.get('services')
                .then(data => {
                    for (let i = 0; i < 3; i++) {
                        setServices(prev => [
                            ...prev,
                            data.data.services[i]
                        ])
                    }
                })
        } catch {

        }
    }

    //function to fetch artist details for "Our Artists" section
    function fetchArtistDetails() {
        try {
            baseurl.get('artists')
                .then(data => {

                    //randomize artist selection
                    let set = new Set();
                    while (set.size < 6) {
                        let random = Math.floor(Math.random() * data.data.artists.length);
                        set.add(random);
                    }

                    set.forEach(elem => {
                        setArtists(prev => [
                            ...prev,
                            data.data.artists[elem]
                        ])
                    })
                })
        } catch {

        }
    }

    return (
        <>
            {
                //Top Section
            }
            <section className={classes.top_section}>
                <Navbar />
                <img src={HeroImageAndroid} alt="Rockstar" className={classes.hero_image_mobile}></img>
                <img src={HeroImage} alt="Rockstar" className={classes.hero_image_desktop}></img>
                <div className={classes.details}>
                    <div className={classes.header}>
                        the <br /> local <span> trend </span>
                    </div>
                    <div className={classes.sub_header}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor diam ut purus elementum ullamcorper
                    </div>
                </div>
                <SocialMobile />
                <SocialDesktop />
            </section>

            {
                //Latest Releases Section
            }
            <section className={classes.latest_releases_section}>
                <div className={classes.section_header}>
                    latest releases by our artists
                </div>
                <AutoplaySlider />
            </section>

            {
                //Our Services Section
            }
            <section className={classes.our_services_section}>
                <div className={classes.section_header}>
                    our services
                </div>
                {services.map(item => {
                    let imageURL = `https://www.thelocaltrendent.com/api/services/images/${item.image}`;
                    return <ServiceCard
                        key={item._id}
                        image={imageURL}
                        header={item.title}
                        description={item.description}
                    />
                })}
                <ViewAllButton
                    text="View All Services"
                    top="40px"
                    link="/about"
                />
            </section>

            {
                //Our Artists Section
            }
            <section className={classes.our_artists_section}>
                <div className={classes.section_header}>
                    our artists
                </div>
                <div className={classes.cards_container}>
                    {artists.map(item => {
                        return <ArtistCard
                            key={item._id}
                            id={item._id}
                            data={item}
                        />
                    })}
                </div>
                <ViewAllButton
                    text="View All Artists"
                    top="50px"
                    link="/artist/all"
                />
            </section>

            {
                //Merchandise Section
            }
            <section className={classes.our_merchandise_section}>
                <div className={classes.section_header}>
                    our merchandise
                </div>
                <MerchSlider />
                <div className={classes.animeWrapper}>
                    <div className={classes.animeContainer} ref={animeContainer}></div>
                    <div className={classes.announcement}>
                        Launching Soon
                        <span className={`${classes.circle} ${classes.first_circle}`}></span>
                        <span className={`${classes.circle} ${classes.second_circle}`}></span>
                        <span className={`${classes.circle} ${classes.third_circle}`}></span>
                    </div>
                </div>
            </section>

            {
                //What's new Section
            }
            <section className={classes.whats_new_section}>
                <div className={classes.section_header} style={{
                    marginBottom: '10px',
                }}>
                    What's New
                </div>
                <EventLink
                    text="Watch Tavreed live on Saturday from 6pm onwards"
                />
                <EventLink
                    text="Watch Tavreed live on Saturday from 6pm onwards"
                />
                <EventLink
                    text="Watch Tavreed live on Saturday from 6pm onwards"
                />
                <EventLink
                    text="Watch Tavreed live on Saturday from 6pm onwards"
                />
            </section>

            <Footer />
        </>
    )
}
