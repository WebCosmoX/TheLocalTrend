import React from 'react';
import classes from './track.module.css';

export default function Track({ data }) {
    return (
        <div className={classes.container}>
            <div className={classes.music_icon}>
                <i className="fas fa-music"></i>
            </div>
            <div className={classes.track_details}>
                <div className={classes.track_name}>
                    Mone Bisora 2.0
                </div>
                <div className={classes.album_container}>
                    <div className={classes.header}>Album:</div>
                    <div className={classes.album_name}>
                        Mone Bisora 2.0
                    </div>
                </div>
            </div>
            <div className={classes.stream_links}>
                <i className="fab fa-spotify"></i>
                <i className="fab fa-youtube"></i>
            </div>
        </div>
    )
}
