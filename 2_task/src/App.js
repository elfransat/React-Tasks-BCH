import React, { Component } from "react";
import Animal from "./animal/animal.js";

class App extends Component {
  state = {
    animals: [
      {
        name: "Racoon",
        img:
          "https://images.unsplash.com/photo-1497752531616-c3afd9760a11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      },
      {
        name: "Tiger",
        img:
          "https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      },
      {
        name: "Moose",
        img: "https://source.unsplash.com/K_Na5gCmh38",
      },
    ],
  };
  render() {
    const animalsList = this.state.animals.map((animal) => {
      return <Animal name={animal.name} img={animal.img} />;
    });

    return <div class="styler">{animalsList}</div>;
  }
}

export default App;
