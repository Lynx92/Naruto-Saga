import React, { Component } from "react";
import axios from "axios";
import "../styles/Detail.scss";
import { Link } from "react-router-dom";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      info: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/anime/${this.state.id}`
      )
      .then(res => {
        const info = res.data;
        this.setState({ info });
        // console.log(this.state.info);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="detail">
        <div className="high-part">
          <div>
            <img src={this.state.info.image_url} alt="poster" />
          </div>
          <div className="infos">
            <p>{this.state.info.title}</p>
            <p>{this.state.info.type}</p>
            <p>Episodes: {this.state.info.episodes}</p>
            <p>Rating: {this.state.info.score}</p>
          </div>
        </div>
        <div className="low-part">
          <p>Synopsis:</p>
          <p>{this.state.info.synopsis}</p>
        </div>
        <button>
          <Link to="/list">Back to List </Link>
        </button>
      </div>
    );
  }
}
