import React from 'react';
import classes from './eventlink.module.css';

export default function EventLink({ text }) {
    return (
        <div className={classes.container}>
            <i className="far fa-play-circle"></i>
            <a href="#" className={classes.link}>
                {text}
            </a>
        </div>
    )
}
