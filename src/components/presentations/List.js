import React, { Component } from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import "../../styles/List.scss";

export default class List extends Component {
  render() {
    return (
      <div className="list">
        {this.props.animes.map(anime => (
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
