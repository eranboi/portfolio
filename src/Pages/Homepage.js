import React, { Component } from "react";
import About from "../Components/About";
import DemoProjects from "../Components/DemoProjects";
import Navbar from "../Components/Navbar";
import TailwindNavbar from "../Components/TailwindNavbar";
import Particles from "../Components/Particles";
import Portfolio from "../Components/Portfolio";
import Skillset from "../Components/Skillset";
import Whatsapp from "../Components/Whatsapp";

import "../main.scss";

import restlessLandsBanner from "../portfolio/restlessLandsBanner.png";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
    this.portfolioRef = React.createRef();
    this.aboutRef = React.createRef();
  }

  state = {};
  render() {
    return (
      <div>
        <Particles />

        <TailwindNavbar
          aboutRef={this.aboutRef && this.aboutRef}
          portfolioRef={this.portfolioRef && this.portfolioRef}
          contactRef={this.contactRef && this.contactRef}
        />
        {/*  <Navbar
          aboutRef={this.aboutRef}
          portfolioRef={this.portfolioRef}
          contactRef={this.contactRef}
        /> */}
        <div className="container">
          <section id="about" ref={this.aboutRef}>
            <div className="header first">About Me</div>
            <About />
          </section>

          <br />
          <br />

          <section id="portfolio" ref={this.portfolioRef}>
            <div className="header">Portfolio</div>
            <Portfolio />
            <br />
            <br />

            <div className="header">Demo Projects</div>
            <DemoProjects />
            <br />
            <br />

            <div className="header">Personal Game Project</div>
            <div className={"restlessLands"}>
              <a href="http://www.twitter.com/RestlessLands" target="_blank">
                <img src={restlessLandsBanner} alt="" />
              </a>
            </div>

            <br />
            <br />
            <div className="header">Skillset</div>
            <Skillset />
          </section>

          <br />
          <br />

          <section id="contact" ref={this.contactRef}>
            <div className="header">Contact</div>
            <div className="content">
              <a href="https://github.com/eranboi" target="_blank">
                <i className="fab fa-github fa-5x"></i>
              </a>

              <a href="mailto:erankoca@gmail.com">
                <i className="fab far fa-envelope fa-5x"></i>
                <p>erankoca@gmail.com</p>
              </a>
            </div>
          </section>
        </div>

        <Whatsapp />
      </div>
    );
  }
}

export default Homepage;
