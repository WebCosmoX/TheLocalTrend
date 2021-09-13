import React from 'react';
import classes from './socialmobile.module.css';

export default function SocialMobile() {

    const [openLinks, setOpenLinks] = React.useState(false);

    function handleClick() {
        setOpenLinks(!openLinks);
    }

    return (
        <div className={classes.container}>
            <div className={classes.semicircle}>
                <button
                    className={`${classes.circle} ${classes.menu_btn}`}
                    onClick={handleClick}
                    style={{
                        background: openLinks ? "var(--red)" : "var(--yellow)",
                        color: openLinks ? "#fff" : "#000",
                    }}
                >
                    {openLinks && <i className="fas fa-times"></i>}
                    {!openLinks && <i className="fas fa-heart"></i>}
                </button>
                <div
                    className={`${classes.circle} ${classes.fb} ${classes.social_links}`}
                    style={{
                        top: openLinks ? "100%" : "100%",
                        left: openLinks ? "0" : "50%",
                        transform: openLinks ? "translate(-50%, -50%)" : "translate(-50%, -50%)"
                    }}
                >
                    <i
                        className="fab fa-facebook-square"
                        style={{
                            fontSize: openLinks ? "23px" : "0",
                        }}
                    ></i>
                </div>
                <div
                    className={`${classes.circle} ${classes.twitter} ${classes.social_links}`}
                    style={{
                        top: openLinks ? "0" : "100%",
                        left: openLinks ? "0" : "50%",
                        transform: openLinks ? "translate(40%, 40%)" : "translate(-50%, -50%)"
                    }}
                >
                    <i
                        className="fab fa-twitter"
                        style={{
                            fontSize: openLinks ? "23px" : "0",
                        }}
                    ></i>
                </div>
                <div
                    className={`${classes.circle} ${classes.insta} ${classes.social_links}`}
                    style={{
                        top: openLinks ? "0" : "100%",
                        left: openLinks ? "50%" : "50%",
                        transform: openLinks ? "translate(-50%, -50%)" : "translate(-50%, -50%)"
                    }}
                >
                    <i
                        className="fab fa-instagram-square"
                        style={{
                            fontSize: openLinks ? "23px" : "0",
                        }}
                    ></i>
                </div>
            </div>
        </div>
    )
}
