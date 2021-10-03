import React from 'react';
import classes from './artistcard.module.css';
import { Link } from 'react-router-dom';

export default function ArtistCard({ id, data }) {

    let imageURL = `https://www.thelocaltrendent.com/api/artists/images/${data.profile_image}`;

    return (
        <Link
            to={{ 
                pathname: `/artist/details/${id}`,
                state: data,
            }}
            className={classes.outer}
        >
            <div className={classes.container}>
                <img src={imageURL} alt={data.name}></img>
                <div className={classes.details_container}>
                    <h3 className={classes.artist_name}>
                        {data.name}
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