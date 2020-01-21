import React, { Component } from "react";
import '../styles/Card.scss'

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <p>{this.props.title}</p>
        <img src={this.props.imgSrc} alt="poster" />
        <p>{this.props.rating}</p>
      </div>
    );
  }
}
