import React from 'react';
import classes from './socialdesktop.module.css';
import { Link } from 'react-router-dom';

export default function SocialDesktop() {
    return (
        <div className={classes.container}>
            <Link to={{
                pathname: "https://www.instagram.com/the_localtrend/"
            }}
                target="_blank"
            >
                <i className="fab fa-instagram"></i>
            </Link>

            <Link to={{
                pathname: "https://www.facebook.com/theLtrnd/"
            }}
                target="_blank"
            >
                <i className="fab fa-facebook-square"></i>
            </Link>

            <Link to={{
                pathname: "https://twitter.com/thelocaltrend?s=20"
            }}
                target="_blank"
            >
                <i className="fab fa-twitter"></i>
            </Link>
        </div>
    )
}
