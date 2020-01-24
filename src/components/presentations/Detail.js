import React, { Component } from "react";
import "../../styles/Detail.scss";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div className="high-part">
          <div>
            <img src={this.props.info.image_url} alt="poster" />
          </div>
          <div className="infos">
            <p>{this.props.info.title}</p>
            <p>{this.props.info.type}</p>
            <p>Episodes: {this.props.info.episodes}</p>
            <p>Rating: {this.props.info.score}</p>
          </div>
        </div>
        <div className="low-part">
          <p>Synopsis:</p>
          <p>{this.props.info.synopsis}</p>
        </div>
        <div>
          <Link to="/list">
            <button>Back to List</button>
          </Link>
        </div>
      </div>
    );
  }
}
