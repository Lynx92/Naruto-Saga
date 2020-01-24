import React, { Component } from "react";
import Detail from "../presentations/Detail";
import axios from "axios";

export default class DetailCont extends Component {
  state = {
    id: this.props.match.params.id,
    info: []
  };

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
      <div>
        <Detail info={this.state.info} />
      </div>
    );
  }
}
