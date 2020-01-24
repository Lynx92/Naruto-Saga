import React, { Component } from "react";
import axios from "axios";
import List from "../presentations/List";

export default class ListCont extends Component {
  state = {
    animes: []
  };

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/search/anime?q=naruto&limit=16"
      )
      .then(res => {
        const animes = res.data.results;
        this.setState({ animes });
        // console.log(this.state.animes);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div>
          <List animes={this.state.animes} />
      </div>
    );
  }
}
