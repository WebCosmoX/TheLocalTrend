import React from 'react';
import classes from './socialdesktop.module.css';
import { Link } from 'react-router-dom';

export default function SocialDesktop() {
    return (
        <div className={classes.container}>
            <Link to="#">
                <i className="fab fa-instagram"></i>
            </Link>
            <Link to="#">
                <i className="fab fa-facebook-square"></i>
            </Link>
            <Link to="#">
                <i className="fab fa-twitter"></i>
            </Link>
        </div>
    )
}
