import React, { Component } from "react";
import Slider from "react-slick";

//Import styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slickslider.css';

import JB from '../../../Assets/JB.png';
import Drake from '../../../Assets/Drake.png';

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 3000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },

            {
              breakpoint: 500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
        ]
      };
      return (
        <div className="slider_container">
          <h2> Multiple items </h2>
          <Slider {...settings}>
            <div className="slider_inner">
              <h3>1</h3>
            </div>
            <div className="slider_inner">
              <h3>2</h3>
            </div>
            <div className="slider_inner">
              <h3>3</h3>
            </div>
            <div className="slider_inner">
              <h3>4</h3>
            </div>
            <div className="slider_inner">
              <h3>5</h3>
            </div>
            <div className="slider_inner">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      );
    }
  }
