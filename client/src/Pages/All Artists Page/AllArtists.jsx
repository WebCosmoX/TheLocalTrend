import React from 'react';
import classes from './allartists.module.css';
import Navbar from './../../Components/Navbar/Navbar';
import ArtistCard from '../../Components/Cards/Artist Card/ArtistCard';
import Footer from './../../Components/Footer/Footer';
import baseurl from '../../api.config.js';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

export default function AllArtists() {

    const [artists, setArtists] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        scrollToTop();
        fetchArtistDetails();
    }, [])

    //the overriding css for the clip loader
    const override = css`
        display: block;
        margin: 0 auto;
    `;
    //loader color
    const loaderColor = "#36d7b7";

    //function to scroll the page to top
    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    //function to fetch artist profile information
    function fetchArtistDetails() {
        setLoading(true);
        try {
            baseurl.get('artists')
                .then(data => {
                    setLoading(false);
                    console.log(data.data.artists);
                    setArtists(data.data.artists);
                })
        } catch {
            setLoading(false);
            setError(true);
        }
    }

    return (
        <div className={classes.container}>
            <Navbar />
            <h4 className={classes.header}>All Artists</h4>
            {
                loading &&
                <div className={classes.loader_container}>
                    <BeatLoader
                        color={loaderColor}
                        loading={loading}
                        css={override}
                        radius={3}
                    ></BeatLoader>
                </div>
            }
            {
                !loading &&
                <div className={classes.artist_card_container}>
                    {artists.map(item => {
                        let imageURL = `https://www.thelocaltrendent.com/api/artists/images/${item.profile_image}`;
                        return <ArtistCard
                            key={item._id}
                            id={item._id}
                            data={item}
                            artistImage={imageURL}
                            artistName={item.name}
                        />
                    })}
                </div>
            }
            {
                !loading && error &&
                <div className={classes.error_container}>
                    <h4 className={classes.error_msg}>
                        Failed to fetch data! Check your network connection
                    </h4>
                </div>
            }
            <Footer />
        </div>
    )
}
