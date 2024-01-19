import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'


class SimpleSlider extends Component {
    render() {
      var settings = {
        dots: true,
        arrows: true,
        speed: 1800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:18000,
        fade:true
      };
      return (
        <Slider {...settings}>
          <div id="home" className="item1">
              <div className="container">
                  <div className="slide-content">
                      <div className="slide-subtitle">
                          <h4>We're getting married!</h4>
                      </div>
                      <div className="slide-title">
                          <h2>Save our date:</h2>
                      </div>
                      <div className="slide-text">
                          <p>February 24th, 2024</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="item2">
            <div className="container">
                <div className="container">
                      <div className="slide-content">
                          <div className="slide-subtitle">
                              <h4>¡Nos vamos a casar!</h4>
                          </div>
                          <div className="slide-title">
                              <h2>Guarda esta fecha:</h2>
                          </div>
                          <div className="slide-text">
                              <p>24 de Febrero 2024</p>
                          </div>
                      </div>
                    </div>
                </div>
          </div>
        </Slider>
      );
    }
  }

export default SimpleSlider;