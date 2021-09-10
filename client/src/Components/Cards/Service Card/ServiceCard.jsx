import React from 'react';
import classes from './servicecard.module.css';
import ServiceImage from '../../../Assets/Service Image.png';

export default function ServiceCard({ header, description }) {
    return (
        <div className={classes.container}>
            <img src={ServiceImage} alt="Service"></img>
            <h3 className={classes.card_header}>
                {header}
            </h3>
            <p className={classes.card_description}>
                {description}
            </p>
        </div>
    )
}