import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class ParticlesComp extends Component {
  state = {};
  render() {
    return (
      <ParticlesBg
        type="cobweb"
        color="#e9c46a"
        bg={{
          position: "fixed",
          zIndex: -1,
          width: "100vw",
          top: 0,
          left: 0,
        }}
      />
    );
  }
}

export default ParticlesComp;
