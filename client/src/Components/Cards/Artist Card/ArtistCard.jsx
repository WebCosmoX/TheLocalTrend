import React from 'react';
import classes from './artistcard.module.css';
import { Link } from 'react-router-dom';

export default function ArtistCard({ id, data }) {

    let imageURL = `https://www.thelocaltrendent.com/api/artists/images/${data.profile_image}`;

    return (
        <div className={classes.container}>
            <Link
                to={{
                    pathname: `/artist/details/${id}`,
                    state: data,
                }}
            >
                <img src={imageURL} alt={data.name}></img>
            </Link>
            <div className={classes.details_container}>
                <h3 className={classes.artist_name}>
                    {data.name}
                </h3>
                <div className={classes.social_links}>
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
            </div>
        </div>
    )
}