import React from 'react';
import classes from './navbar.module.css';
import LogoMobile from '../../Assets/Logo-Mobile.png'
import Hamburger from '../Hamburger Menu/Hamburger';

export default function Navbar() {
    return (
        <nav className={classes.navbar}>
            <img src={LogoMobile} alt="Logo Mobile" className={classes.logo}></img>
            {
                //hamburger menu for mobile devices
            }
            <Hamburger />
        </nav>
    )
}