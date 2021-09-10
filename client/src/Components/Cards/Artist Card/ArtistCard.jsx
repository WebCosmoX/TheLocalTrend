import React from 'react';
import classes from './artistcard.module.css';

export default function ArtistCard({ artistImage, artistName }) {
    return (
        <div className={classes.container}>
            <img src={artistImage} alt="Artist Name"></img>
            <h3 className={classes.artist_name}>
                {artistName}
            </h3>
        </div>
    )
}