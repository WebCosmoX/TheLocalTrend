import React from 'react';
import classes from './artistcard.module.css';
import { Link } from 'react-router-dom';

export default function ArtistCard({ id, data, artistImage, artistName }) {

    return (
        <Link
            to={{
                pathname: `/artist/details/${id}`,
                state: data,
            }}
            className={classes.outer}
        >
            <div className={classes.container}>
                <img src={artistImage} alt="Artist Name"></img>
                <div className={classes.details_container}>
                    <h3 className={classes.artist_name}>
                        {artistName}
                    </h3>
                    <div className={classes.social_links}>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                    </div>
                </div>
            </div>
        </Link>
    )
}