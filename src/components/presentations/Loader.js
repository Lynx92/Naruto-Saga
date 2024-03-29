import React, { Component } from "react";
import loading from "../../assets/loader.gif";
import "../../styles/Loader.scss";

export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <img src={loading} alt="loading" />
        <p>...Loading...</p>
      </div>
    );
  }
}
