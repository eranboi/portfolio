import React, { Component } from "react";

import PortfolioItem from "./PortfolioItem";

import dulceCulturaLogo from "../portfolio/dulce-cultura.jpeg";

import "./Portfolio.scss";

class DemoProjects extends Component {
  state = {
    portfolio: [
      {
        url: "https://dulce-cultura.web.app/",
        image: dulceCulturaLogo,
        description: "A marketplace",
      },
    ],
  };

  render() {
    return (
      <div className="portfolio">
        {this.state.portfolio.map((portfolioItem, key) => (
          <PortfolioItem
            url={portfolioItem.url}
            image={portfolioItem.image}
            description={portfolioItem.description}
            key={key}
          />
        ))}
      </div>
    );
  }
}

export default DemoProjects;
