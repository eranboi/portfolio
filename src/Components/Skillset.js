import React, { Component } from "react";
import SkillsetItem from "./SkillsetItem";
import "./Skillset.scss";

class Skillset extends Component {
  state = {};

  render() {
    return (
      <div className="skillset">
        <div className="languages">
          <SkillsetItem description="JavaScript" logo={"fab fa-js fa-5x"} />
          <SkillsetItem description="React.js" logo={"fab fa-react fa-5x"} />
          <SkillsetItem description="Node.js" logo={"fab fa-node-js fa-5x"} />
          <SkillsetItem description="Unity3D" logo={"fab fa-unity fa-5x"} />
          <SkillsetItem description="Python" logo={"fab fa-python fa-5x"} />
        </div>
      </div>
    );
  }
}

export default Skillset;
