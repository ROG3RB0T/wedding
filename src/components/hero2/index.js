import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class SimpleSlider2 extends Component {
    render() {
      var settings = {
        dots: false,
        arrows: true,
        speed: 7200,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3600,
        fade:true
      };
      return (
        <Slider {...settings}>
          <div id="home" className="item2">
              <div className="container">
                  <div className="slide-content">
                      <div className="slide-subtitle">
                          <h4>WERE GETTING MARRIED</h4>
                      </div>
                      <div className="slide-title">
                          <h2>Save Our Date</h2>
                      </div>
                      <div className="slide-text">
                          <p>Febrary, 24th, 2024</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="item1">
            <div className="container">
                <div className="container">
                      <div className="slide-content">
                          <div className="slide-subtitle">
                              <h4>WERE GETTING MARRIED</h4>
                          </div>
                          <div className="slide-title">
                              <h2>Save Our Date</h2>
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

export default SimpleSlider2;