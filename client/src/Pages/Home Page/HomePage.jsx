import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import classes from './homepage.module.css';
import HeroImage from '../../Assets/Hero Image.png';
import HeroImageAndroid from '../../Assets/Hero Image-Android.png';
import SocialMobile from '../../Components/Social Media Pack/Mobile/SocialMobile';
import AutoplaySlider from '../../Components/Sliders/Autoplay Slider/AutoplaySlider';
import SlickSlider from './../../Components/Sliders/Slick Slider/SlickSlider';
import ServiceCard from '../../Components/Cards/Service Card/ServiceCard';
import ArtistCard from '../../Components/Cards/Artist Card/ArtistCard';
import JB from '../../Assets/JB.png';
import Drake from '../../Assets/Drake.png';
import Arijit from '../../Assets/Arijit Singh.png';
import SocialDesktop from '../../Components/Social Media Pack/Desktop/SocialDesktop';
import EventLink from '../../Components/Links/EventLink';
import Footer from '../../Components/Footer/Footer';

export default function HomePage() {

    React.useEffect(() => {
        scrollToTop();
    }, []);

    //function to scroll the page to top
    function scrollToTop () {
        window.scrollTo(0, 0);
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
                <ServiceCard
                    header="Video Production"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu magna sem. "
                />
                <ServiceCard
                    header="Artist Management"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu magna sem. "
                />
                <ServiceCard
                    header="Music Distribution"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu magna sem. "
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
                    <ArtistCard
                        artistImage={JB}
                        artistName="justin bieber"
                    />
                    <ArtistCard
                        artistImage={Drake}
                        artistName="drake"
                    />
                    <ArtistCard
                        artistImage={Arijit}
                        artistName="arijit singh"
                    />
                    <ArtistCard
                        artistImage={JB}
                        artistName="justin bieber"
                    />
                    <ArtistCard
                        artistImage={Drake}
                        artistName="drake"
                    />
                    <ArtistCard
                        artistImage={Arijit}
                        artistName="arijit singh"
                    />
                </div>
            </section>

            {
                //Merchandise Section
            }
            <section className={classes.our_merchandise_section}>
                <div className={classes.section_header}>
                    our merchandise
                </div>
                <SlickSlider />
                <h3 className={classes.announcement}>
                    launching <span> soon ! </span>
                </h3>
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
