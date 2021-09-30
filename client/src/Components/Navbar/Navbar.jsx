import React from 'react';
import classes from './navbar.module.css';
import LogoMobile from '../../Assets/Logo-Mobile.png';
import LogoDesktop from '../../Assets/Logo-Desktop.png';
import Hamburger from '../Hamburger Menu/Hamburger';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className={classes.navbar}>
            <img src={LogoMobile} alt="Logo Mobile" className={classes.logo_mobile}></img>
            <img src={LogoDesktop} alt="Logo Mobile" className={classes.logo_desktop}></img>
            {
                //hamburger menu for mobile devices
            }
            <Hamburger />

            {
                //nav links for desktop devices
            }
            <div className={classes.nav_links}>
                <Link to="/">Home</Link>
                <Link to="/">Music</Link>
                <Link to="/artist/all">Artists</Link>
                <Link to="/about">About Us</Link>
            </div>

            <div className={classes.yellow_box}></div>
        </nav>
    )
}