import React from 'react';
import classes from './navbar.module.css';
import LogoMobile from '../../Assets/Logo-Mobile.png';
import Logo from '../../Assets/Logo.png';
import Hamburger from '../Hamburger Menu/Hamburger';
import { Link } from 'react-router-dom';

export default function Navbar() {

    const [navScrolled, setNavScrolled] = React.useState(false);

    window.addEventListener('scroll', handleNavStyle);

    function handleNavStyle() {
        if (window.scrollY >= 100) {
            setNavScrolled(true);
        } else {
            setNavScrolled(false);
        }
    }

    return (
        <nav
            className={classes.navbar}
            style={{
                background: navScrolled ? 'var(--navblack)' : 'transparent',
            }}
        >
            <img src={Logo} alt="The Local Trend" className={classes.logo}></img>
            {
                //hamburger menu for mobile devices
            }
            <Hamburger />

            {
                //nav links for desktop devices
            }
            <div className={classes.nav_links}>
                <Link to="/">Home</Link>
                <Link to="/artist/all">Artists</Link>
                <Link to="/about">About Us</Link>
            </div>

            <div className={classes.yellow_box}></div>
        </nav>
    )
}