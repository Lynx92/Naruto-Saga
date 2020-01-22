import React, { Component } from "react";
import star from "../assets/ratingStar.png";
import "../styles/Card.scss";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.imgSrc} alt="poster" />

        <div className="rating-cont">
          <img src={star} alt="rating" />
          <span>{this.props.rating.toFixed(1)}</span>
        </div>

        <div className="blur">
          <div className="specs">
            <p>{this.props.title}</p>
          </div>
        </div>
      </div>
    );
  }
}
