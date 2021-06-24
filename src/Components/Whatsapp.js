import React, { Component } from "react";

class Whatsapp extends Component {
  state = {};

  render() {
    return (
      <a href="https://wa.me/+905437390554/" target="_blank" id="whatsapp-icon">
        <div style={{ position: "fixed", bottom: "7.5%", left: "5%" }}>
          <i className="fab fa-whatsapp fa-3x"></i>
        </div>
      </a>
    );
  }
}

export default Whatsapp;
