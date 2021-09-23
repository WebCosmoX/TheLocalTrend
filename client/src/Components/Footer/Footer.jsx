import React from 'react';
import classes from './footer.module.css';

export default function Footer() {
    return (
        <div className={classes.container}>
            <div className={classes.top}>
                <div className={classes.content_container}>
                    <div className={classes.header}>Read :</div>
                    <ul className={classes.list}>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                        <li>About Us</li>
                    </ul>
                </div>

                <div className={classes.content_container}>
                    <div className={classes.header}>Contact Us :</div>
                    <ul className={classes.list}>
                        <p className={classes.content}>
                            thelocaltrend4you@gmail.com<br />
                            8638154432, 6284221089
                        </p>
                    </ul>
                </div>

                <div className={classes.content_container}>
                    <div className={classes.header}>Working Office Address :</div>
                    <ul className={classes.list}>
                        <p className={classes.content}>
                            Kailash Bhawan, Basisthapur bylane no - 2 , Opp. Rambha Madhav Vivah Bhawan , Hatigaon, Guwahati, Assam , 781038.
                        </p>
                    </ul>
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
