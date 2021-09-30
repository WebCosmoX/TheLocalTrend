import React from 'react';
import classes from './allartists.module.css';
import Navbar from './../../Components/Navbar/Navbar';
import ArtistCard from '../../Components/Cards/Artist Card/ArtistCard';
import JB from '../../Assets/JB.png';
import Drake from '../../Assets/Drake.png';
import Arijit from '../../Assets/Arijit Singh.png';
import Footer from './../../Components/Footer/Footer';
import baseurl from '../../api.config.js';

export default function AllArtists() {

    const [artists, setArtists] = React.useState([]);

    React.useEffect(() => {
        scrollToTop();
        fetchArtistDetails();
    }, [])

    //function to scroll the page to top
    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    //function to fetch artist profile information
    function fetchArtistDetails() {
        baseurl.get('artists')
            .then(data => {
                console.log(data.data.artists);
                setArtists(data.data.artists);
            })
    }

    return (
        <div className={classes.container}>
            <Navbar />
            <h4 className={classes.header}>All Artists</h4>
            <div className={classes.artist_card_container}>
                {artists.map(item => {
                    let imageURL = `https://www.thelocaltrendent.com/api/artists/images/${item.profile_image}`;
                    return <ArtistCard
                        key={item.id}
                        artistImage={imageURL}
                        artistName={item.name}
                    />
                })}
            </div>
            <Footer />
        </div>
    )
}
