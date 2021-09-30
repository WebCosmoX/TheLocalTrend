import React from 'react';
import classes from './footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <div className={`${classes.content_container} ${classes.read}`}>
                    <div className={classes.header}>Read :</div>
                    <div className={classes.footer_link_container}>
                        <Link to="/" className={classes.footer_link}>
                            Privacy Policy
                        </Link>
                        <Link to="/tnc" className={classes.footer_link}>
                            Terms and Conditions
                        </Link>
                        <Link to="/about" className={classes.footer_link}>
                            About Us
                        </Link>
                    </div>
                </div>

                <div className={`${classes.content_container} ${classes.contact_us}`}>
                    <div className={classes.header}>Contact Us :</div>
                    <p className={classes.content}>
                        thelocaltrend4you@gmail.com<br />
                        8638154432, 6284221089
                    </p>
                </div>

                <div className={`${classes.content_container} ${classes.office_address}`}>
                    <div className={classes.header}>Working Office Address :</div>
                    <p className={classes.content}>
                        Kailash Bhawan, Basisthapur bylane no - 2 , Opp. Rambha Madhav Vivah Bhawan , Hatigaon, Guwahati, Assam , 781038.
                    </p>
                </div>
            </div>

            <div className={classes.line}></div>

            <div className={classes.bottom}>
                <h4 className={classes.powered}>
                    Powered by webcosmo_x
                </h4>

                <h5 className={classes.copyright}>
                    Copyright 2021 @TheLocalTrend
                </h5>
            </div>
        </div>
    )
}
