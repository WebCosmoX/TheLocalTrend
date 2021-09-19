import React from 'react';
import classes from './socialdesktop.module.css';

export default function SocialDesktop() {
    return (
        <div className={classes.container}>
            <a href="#">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
                <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#">
                <i className="fab fa-twitter"></i>
            </a>
        </div>
    )
}
