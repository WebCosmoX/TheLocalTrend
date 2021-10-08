import React from 'react';
import classes from './servicecard.module.css';

export default function ServiceCard({ image, header, description }) {
    return (
        <div className={classes.container}>
            <img src={image} alt={header}></img>
            <div className={classes.card_details}>
                <h4 className={classes.card_header}>
                    {header}
                </h4>
                <p className={classes.card_description}>
                    {description}
                </p>
            </div>
        </div>
    )
}