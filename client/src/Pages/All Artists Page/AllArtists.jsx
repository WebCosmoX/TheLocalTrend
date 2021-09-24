import React from 'react';
import classes from './allartists.module.css';
import Navbar from './../../Components/Navbar/Navbar';
import ArtistCard from '../../Components/Cards/Artist Card/ArtistCard';
import JB from '../../Assets/JB.png';
import Drake from '../../Assets/Drake.png';
import Arijit from '../../Assets/Arijit Singh.png';
import Footer from './../../Components/Footer/Footer';

export default function AllArtists() {

    React.useEffect(() => {
        scrollToTop();
    }, [])

    //function to scroll the page to top
    function scrollToTop () {
        window.scrollTo(0, 0);
    }

    return (
        <div className={classes.container}>
            <Navbar />
            <h4 className={classes.header}>All Artists</h4>
            <div className={classes.artist_card_container}>
                <ArtistCard 
                    artistImage={JB}
                    artistName="justin bieber"
                />
                <ArtistCard 
                    artistImage={Drake}
                    artistName="Drake"
                />
                <ArtistCard 
                    artistImage={Arijit}
                    artistName="Arijit Singh"
                />
                <ArtistCard 
                    artistImage={JB}
                    artistName="justin bieber"
                />
                <ArtistCard 
                    artistImage={Drake}
                    artistName="Drake"
                />
                <ArtistCard 
                    artistImage={Arijit}
                    artistName="Arijit Singh"
                />
                <ArtistCard 
                    artistImage={JB}
                    artistName="justin bieber"
                />
                <ArtistCard 
                    artistImage={Drake}
                    artistName="Drake"
                />
                <ArtistCard 
                    artistImage={Arijit}
                    artistName="Arijit Singh"
                />
                <ArtistCard 
                    artistImage={JB}
                    artistName="justin bieber"
                />
                <ArtistCard 
                    artistImage={Drake}
                    artistName="Drake"
                />
                <ArtistCard 
                    artistImage={Arijit}
                    artistName="Arijit Singh"
                />
            </div>
            <Footer />
        </div>
    )
}
