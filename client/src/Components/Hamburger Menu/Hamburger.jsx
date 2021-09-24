import React from 'react';
import classes from './hamburger.module.css';
import { Link } from 'react-router-dom';

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
                clipPath: openMenu ? "circle(61% at 80% 20%)" : "circle(50px at 100% -10%)",
            }}>
                <button onClick={handleClose} className={`${classes.btn} ${classes.close}`} style={{
                    fontSize: openMenu ? "22px" : "0",
                }}>
                    <i className="fas fa-times"></i>
                </button>
                <ul>
                    <Link to="/" className={classes.link}>
                        <li style={{
                            fontSize: openMenu ? "16px" : "0",
                        }}>Home</li>
                    </Link>
                    <Link to="/" className={classes.link}>
                        <li style={{
                            fontSize: openMenu ? "16px" : "0",
                        }}>Music</li>
                    </Link>
                    <Link to="/artist/all" className={classes.link}>
                        <li style={{
                            fontSize: openMenu ? "16px" : "0",
                        }}>Artists</li>
                    </Link>
                    <Link to="/" className={classes.link}>
                        <li style={{
                            fontSize: openMenu ? "16px" : "0",
                        }}>About Us</li>
                    </Link>
                </ul>
            </div>
        </>
    )
}
