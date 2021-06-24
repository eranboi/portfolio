import React, { Component } from "react";

import "./PortfolioItem.scss";

class PortfolioItem extends Component {
  state = {};
  render() {
    return (
      <div className="portfolio-item">
        <a href={this.props.url} target="_blank">
          <img className="image" src={this.props.image} />
        </a>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default PortfolioItem;
