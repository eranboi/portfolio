import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./About.scss";

class About extends Component {
  state = {};

  render() {
    return (
      <div className="aboutWrapper">
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hello, I'm Erhan!").pauseFor(2500).start();
            }}
          />
        </h1>
        <center>
          <p>
            I'm a Software Developer from Turkey.
            <br /> I have designed Landing Pages,
            <br />
            built Web Applications and Games.
            <br />
            Currently, I'm available for freelance projects, check my other
            projects <a>here! </a>
          </p>
        </center>
      </div>
    );
  }
}

export default About;
