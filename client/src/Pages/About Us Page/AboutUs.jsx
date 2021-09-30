import React from 'react';
import classes from './aboutus.module.css';
import Navbar from '../../Components/Navbar/Navbar';
import ServiceCard2 from '../../Components/Cards/Service Card2/ServiceCard2';
import Footer from '../../Components/Footer/Footer';
import baseurl from '../../api.config.js';

export default function AboutUs() {

    const [services, setServices] = React.useState([]);
    const [imageID, setImageID] = React.useState("");

    React.useEffect(() => {
        scrollToTop();
        fetchServices();
    }, []);

    function scrollToTop() {
        window.scrollTo(0, 0);
    }

    //fetch services from the db
    function fetchServices() {
        baseurl.get('services')
            .then(data => {
                console.log(data.data.services);
                setServices(data.data.services);
            })
    }

    return (
        <div className={classes.container}>
            <Navbar />
            <div className={classes.wrapper}>
                <h4 className={classes.wrapper_header}>who are we?</h4>
                <p className={classes.wrapper_body}>
                    <span className={classes.inner_1}>The Local <span className={classes.inner_2}>Trend</span></span> is lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus libero risus, eget imperdiet risus ultrices eget. Vivamus at fermentum tellus. Vivamus quis ex semper, facilisis risus at, vulputate quam. Ut eu feugiat nulla. Mauris id velit ut orci fringilla scelerisque non at metus. Praesent faucibus metus odio, sed venenatis.
                </p>
            </div>

            <div className={classes.wrapper}>
                <h4 className={classes.wrapper_header}>our services</h4>
                <div className={classes.services_container}>

                    {services.map(item => {
                        let imageURL = `https://www.thelocaltrendent.com/api/services/images/${item.image}`;
                        console.log(imageURL);
                        return <ServiceCard2
                            key={item.id}
                            header={item.title}
                            body={item.description}
                            image={imageURL}
                        />
                    })}
                </div>
            </div>

            <Footer />
        </div>
    )
}