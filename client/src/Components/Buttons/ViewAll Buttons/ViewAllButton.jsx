import React from 'react';
import classes from './viewallbutton.module.css';
import { Link } from 'react-router-dom';

export default function ViewAllButton({ text, top, link }) {
    return (
        <Link to={link}>
            <button
                className={classes.button}
                style={{
                    marginTop: top
                }}
            >
                {text}
            </button>
        </Link>
    )
}