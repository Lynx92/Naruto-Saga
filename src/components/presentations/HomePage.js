import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.scss";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/list">
          <div className="enter">
            <h1>Naruto Saga</h1>
            <p>Click Here!</p>
          </div>
        </Link>
      </div>
    );
  }
}
