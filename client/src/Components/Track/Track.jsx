import React from 'react';
import classes from './track.module.css';
import TrackArt from '../../Assets/Album Art-Track.png';

export default function Track() {
    return (
        <div className={classes.container}>
            <img src={TrackArt} alt="Album Art" className={classes.track_art}></img>
            <div className={classes.track_details}>
                <div className={classes.track_name}>
                    mone bisora 2.0
                </div>
                <div className={classes.album_container}>
                    <div className={classes.header}>Album:</div>
                    <div className={classes.album_name}>
                        mone bisora 2.0
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
