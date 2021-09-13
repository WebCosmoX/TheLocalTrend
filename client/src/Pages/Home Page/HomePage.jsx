import React from 'react';
import lottie from 'lottie-web';
import Navbar from '../../Components/Navbar/Navbar';
import classes from './homepage.module.css';
import HeroImageAndroid from '../../Assets/Hero Image-Android.png';
import SocialMobile from '../../Components/Social Media Pack/Mobile/SocialMobile';
import Slider1 from './../../Components/Sliders/Slider 1/Slider1';
import ServiceCard from '../../Components/Cards/Service Card/ServiceCard';
import ArtistCard from '../../Components/Cards/Artist Card/ArtistCard';
import JB from '../../Assets/JB.png';
import Drake from '../../Assets/Drake.png';
import Arijit from '../../Assets/Arijit Singh.png';
import Slider2 from '../../Components/Sliders/Slider 2/Slider2';

export default function HomePage() {

    return (
        <>
            {
                //Top Section
            }
            <section className={classes.top_section}>
                <Navbar />
                <img src={HeroImageAndroid} alt="Rockstar" className={classes.hero_image_mobile}></img>
                <div className={classes.details}>
                    <div className={classes.header}>
                        the <br /> local <span> trend </span>
                    </div>
                    <div className={classes.sub_header}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu magna sem.
                    </div>
                </div>
                <SocialMobile />
            </section>

            {
                //Latest Releases Section
            }
            <section className={classes.latest_releases_section}>
                <div className={classes.section_header}>
                    latest releases by our artists
                </div>
                <Slider1 />
            </section>

            {
                //Our Services Section
            }
            <section className={classes.our_services_section}>
                <div className={classes.section_header}>
                    our services
                </div>
                <a href="#" className={classes.section_link}>
                    view all services
                </a>
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
                <a href="#" className={classes.section_link}>
                    view all artists
                </a>
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
            </section>

            {
                //Merchandise Section
            }
            <section className={classes.our_merchandise_section}>
                <div className={classes.section_header}>
                    our merchandise
                </div>
                <Slider2 />
                <h3 className={classes.announcement}>
                    launching <span> soon ! </span>
                </h3>
            </section>
        </>
    )
}
