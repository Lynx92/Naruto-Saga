import React, { Component } from "react";
import axios from "axios";
import "../styles/Detail.scss";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      info: []
    };
  }
  componentDidMount() {
    let config = {
      headers: {
        SameSite: "None",
        Secure: "True",
      }
    };
    // "Set-Cookie", "HttpOnly;Secure;SameSite=Strict"
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/anime/${this.state.id}`,
        config
      )
      .then(res => {
        const info = res.data;
        this.setState({ info });
        console.log(this.state.info);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="detail">
        <img src={this.state.info.image_url} alt="poster" />
        <video src={this.state.info.trailer_url} />
        <p>{this.state.info.title}</p>
        <p>{this.state.info.type}</p>
        <p>{this.state.info.episodes}</p>
        <p>{this.state.info.score}</p>
        <p>{this.state.info.synopsis}</p>
      </div>
    );
  }
}
