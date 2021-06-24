import React, { Component } from "react";

class SkillsetItem extends Component {
  state = {};
  render() {
    return (
      <div className="item">
        <div className="logo">
          <i className={this.props.logo}></i>
        </div>
        <p className="description">{this.props.description}</p>
      </div>
    );
  }
}

export default SkillsetItem;
