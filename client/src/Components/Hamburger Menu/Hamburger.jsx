import React from 'react';
import classes from './hamburger.module.css';

export default function Hamburger() {
    return (
        <div className={classes.container}>
            <div className={classes.menu_button}>
                <i className="fas fa-bars"></i>
            </div>
        </div>
    )
}
