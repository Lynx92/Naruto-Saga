import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    return (
      <div>
        <img src={this.props.location.state.imgSrc} alt='poster'/>
        <p>{this.props.location.state.title}</p>
        <p>{this.props.location.state.type}</p>
        <p>{this.props.location.state.rating}</p>
        <p>{this.props.location.state.description}</p>




      </div>
    );
  }
}
