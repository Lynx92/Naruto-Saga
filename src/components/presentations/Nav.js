import React, { Component } from "react";
import { Link } from "react-router-dom";
import homeLogo from "../../assets/homeLogo.jpg";
import "../../styles/Nav.scss";

export default class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/home">
          <img src={homeLogo} alt="logo" />
          <span>Naruto Saga</span>
        </Link>
      </div>
    );
  }
}
