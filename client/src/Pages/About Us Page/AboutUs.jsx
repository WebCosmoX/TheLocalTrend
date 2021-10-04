import React from 'react';
import classes from './aboutus.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import ServiceCard2 from '../../Components/Cards/Service Card2/ServiceCard2';
import Footer from '../../Components/Footer/Footer';
import baseurl from '../../api.config.js';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

export default function AboutUs() {

    const [services, setServices] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        scrollToTop();
        fetchServices();
    }, []);

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    //the overriding css for the clip loader
    const override = css`
        display: block;
        margin: 0 auto;
    `;
    //loader color
    const loaderColor = "#36d7b7";

    //fetch services from the db
    function fetchServices() {
        setLoading(true);
        try {
            baseurl.get('services')
                .then(data => {
                    setLoading(false);
                    setServices(data.data.services);
                })
        } catch {
            setLoading(false);
            setError(true);
        }
    }

    return (
        <div className={classes.container}>
            <Navbar />
            <div className={classes.wrapper}>
                <h4 className={`${classes.wrapper_header} ${classes.top_header}`}>who are we?</h4>
                <p className={classes.wrapper_body}>
                    <span className={classes.inner_1}>The Local <span className={classes.inner_2}>Trend</span></span> is a media , video
                    production company that provides
                    our clients with images and videos
                    using equipped 4K cameras , and
                    also deals with artist management.
                    <br />
                    Established in 2019 , we specialize
                    in aerial video, still photography,
                    sUAS, videography, media
                    production, drone Services,
                    marketing, budgeting etc.
                </p>
            </div>

            {
                loading && !error &&
                <div className={classes.loader_container}>
                    <BeatLoader
                        color={loaderColor}
                        loading={loading}
                        css={override}
                        radius={3}
                    ></BeatLoader>
                </div>
            }

            {
                !loading && !error &&
                <div className={classes.services_wrapper}>
                    <h4 className={classes.wrapper_header}>our services</h4>
                    <div className={classes.services_container}>

                        {services.map(item => {
                            let imageURL = `https://www.thelocaltrendent.com/api/services/images/${item.image}`;
                            console.log(imageURL);
                            return <ServiceCard2
                                key={item._id}
                                header={item.title}
                                body={item.description}
                                image={imageURL}
                            />
                        })}
                    </div>
                </div>
            }

            {
                !loading && error &&
                <div className={classes.error_container}>
                    <h4 className={classes.error_msg}>
                        Failed to fetch data! Check your network connection
                    </h4>
                </div>
            }
            <Footer />
        </div>
    )
}