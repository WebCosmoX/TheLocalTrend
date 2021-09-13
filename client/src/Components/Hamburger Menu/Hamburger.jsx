import React from 'react';
import classes from './hamburger.module.css';

export default function Hamburger() {

    const [openMenu, setOpenMenu] = React.useState(false);

    function handleOpen() {
        setOpenMenu(true);
    }

    function handleClose() {
        setOpenMenu(false);
    }

    return (
        <>
            <button onClick={handleOpen} className={classes.btn}>
                <i className="fas fa-bars"></i>
            </button>
            <div className={classes.menu} style={{
                clipPath: openMenu ? "circle(65% at 80% 20%)" : "circle(50px at 100% -10%)",
            }}>
                <button onClick={handleClose} className={`${classes.btn} ${classes.close}`} style={{
                    fontSize: openMenu ? "22px" : "0",
                }}>
                    <i className="fas fa-times"></i>
                </button>
                <ul>
                    <li style={{
                        fontSize: openMenu ? "19px" : "0",
                    }}>Home</li>
                    <li style={{
                        fontSize: openMenu ? "19px" : "0",
                    }}>Music</li>
                    <li style={{
                        fontSize: openMenu ? "19px" : "0",
                    }}>Artists</li>
                    <li style={{
                        fontSize: openMenu ? "19px" : "0",
                    }}>About Us</li>
                    <li style={{
                        fontSize: openMenu ? "19px" : "0",
                    }}>Contact Us</li>
                </ul>
            </div>
        </>
    )
}
