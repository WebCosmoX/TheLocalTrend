import React from 'react';
import classes from './eventlink.module.css';
import { Link } from 'react-router-dom';

export default function EventLink({ text }) {
    return (
        <div className={classes.container}>
            <i className="fas fa-play-circle"></i>
            <Link to="#" className={classes.link}>
                {text}
            </Link>
        </div>
    )
}
