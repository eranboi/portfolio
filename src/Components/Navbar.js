import React, { Component } from "react";
import "./Navbar.scss";
class Navbar extends Component {
  componentDidMount() {
    if (this.props.contactRef !== null) console.log(this.props.contactRef);
    //this.props.contactRef && this.props.contactRef.current.focus();
  }

  state = {};

  render() {
    return (
      <nav>
        <ul>
          <li onClick={this.onClickAbout}>
            <p>About Me</p>
          </li>
          <li onClick={this.onClickPortfolio}>
            <p>Portfolio</p>
          </li>
          <li onClick={this.onClickContact}>
            <p>Contact</p>
          </li>
        </ul>
      </nav>
    );
  }
  onClickContact = () => {
    this.props.contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  onClickPortfolio = () => {
    this.props.portfolioRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  onClickAbout = () => {
    this.props.aboutRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
}

export default Navbar;
