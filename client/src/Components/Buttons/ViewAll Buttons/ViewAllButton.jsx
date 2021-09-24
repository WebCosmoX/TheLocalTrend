import React from 'react';
import classes from './viewallbutton.module.css';

export default function ViewAllButton({ text, top }) {
    return (
        <button
            className={classes.button}
            style={{
                marginTop: top
            }}
        >
            {text}
        </button>
    )
}