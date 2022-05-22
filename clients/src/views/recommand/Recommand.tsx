import React, { Component } from "react";
import Slider from "react-slick";
import "./Recommand.css"
import first from "../../images/first.jpg"
import pizza from "../../images/pizza.jpg"
import salad from "../../images/salad.jpg"
import pancake from "../../images/pancake.jpg"

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="container">
        <Slider {...settings} className="images">
          <div className="image">
            <img src={first} alt="" />
          </div>
          <div className="image">
            <img src={pizza} alt="" />
          </div>
          <div className="image">
            <img src={salad} alt="" />
          </div>
          <div className="image">
            <img src={pancake} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}