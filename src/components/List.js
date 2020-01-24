import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import { Link } from "react-router-dom";
import "../styles/List.scss";

export default class List extends Component {
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
      <div className="list">
        {this.state.animes.map(anime => (
          <Link
            key={anime.mal_id}
            to={{
              pathname: "/detail/" + anime.mal_id
            }}
          >
            <Card
              title={anime.title}
              imgSrc={anime.image_url}
              rating={anime.score}
            />
          </Link>
        ))}
      </div>
    );
  }
}
