import React, { Component } from "react";
import("./animal.css");

const greetingText = (name) => {
  alert(`Hello my name is ${name}. nice to meet you`);
};

class Animal extends Component {
  render() {
    return (
      <div class="animal-card">
        <h1> {this.props.name} </h1>
        <img alt={this.props.name} src={this.props.img}></img>
        <button onClick={() => greetingText(this.props.name)}>Click Me </button>
      </div>
    );
  }
}

export default Animal;
