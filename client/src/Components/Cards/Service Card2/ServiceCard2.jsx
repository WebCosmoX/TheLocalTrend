import React from 'react';
import classes from './servicecard2.module.css';
import ServiceImage from '../../../Assets/Service Image.png';

export default function ServiceCard2({ header, body }) {
    return (
        <div className={classes.container}>
            <img src={ServiceImage} alt="Service Name" className={classes.image}></img>
            <div className={classes.details_container}>
                <h6 className={classes.header}>{header}</h6>
                <p className={classes.body}>
                    {body}
                </p>
            </div>
        </div>
    )
}
