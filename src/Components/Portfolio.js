import React, { Component } from "react";

import PortfolioItem from "./PortfolioItem";

import waxysLogo from "../portfolio/waxys.png";
import yuzdeyuzLogo from "../portfolio/yuzdeyuzburger.png";
import internyLogo from "../portfolio/interny-logo.png";
import musicTastifyLogo from "../portfolio/image-holder-icon-614x460.png";
import "./Portfolio.scss";

class Portfolio extends Component {
  state = {
    portfolio: [
      {
        url: "http://www.waxysonwheels.co",
        image: waxysLogo,
        description: " A food truck! ",
      },
      {
        url: "http://www.yuzdeyuzburger.com.tr",
        image: yuzdeyuzLogo,
        description: " A fast food restaurant!",
      },
      {
        url: "https://music-tastify.web.app",
        image: musicTastifyLogo,
        description:
          "An app that lets you compare your music taste with others using Spotify! ",
      },
      {
        url: "https://interny.net/",
        image: internyLogo,
        description: " A place where interns and companies meet! ",
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

export default Portfolio;
