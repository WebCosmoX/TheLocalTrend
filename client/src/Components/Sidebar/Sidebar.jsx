import React from 'react';
import classes from './sidebar.module.css';
import LogoMobile from '../../Assets/Logo-Mobile.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className={classes.sidebar}>
            <img src={LogoMobile} alt="The Local Trend"></img>
            <div className={classes.links_container}>
                <Link to="/" className={classes.link}>Home</Link>
                <Link to="/" className={classes.link}>Music</Link>
                <Link to="/" className={classes.link}>Artists</Link>
                <Link to="/" className={classes.link}>About Us</Link>
            </div>
        </div>
    )
}
