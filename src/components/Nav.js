import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.scss'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/Home">
          <span>Logo</span>
        </Link>
      </div>
    );
  }
}
