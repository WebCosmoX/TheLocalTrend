import React from 'react';
import classes from './servicecard2.module.css';

export default function ServiceCard2({ header, body, image }) {
    return (
        <div className={classes.container}>
            <img src={image} alt={header} className={classes.image}></img>
            <div className={classes.details_container}>
                <h5 className={classes.header}>{header}</h5>
                <p className={classes.body}>
                    {body}
                </p>
            </div>
        </div>
    )
}
