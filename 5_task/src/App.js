import "./App.css";
import Circle from "./Components/Circle/Circle.js";
import React, { Component } from "react";
import GameOver from "./Components/GameOver/GameOver";

const randomCircle = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
};

class App extends React.Component {
  state = {
    score: 0,
    current: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "blue" },
      { id: 3, color: "red" },
      { id: 4, color: "orange" },
    ],
  };

  pace = 1500;
  timer = undefined;

  clickHandler = (id) => {
    console.log(`wow circle ${id} was clicked`);

    if (this.state.current !== id) {
      this.stopHandler();
      return;
    }
    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.stopHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = randomCircle(1, 4);
    } while (nextActive === this.state.current);
    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);
    console.log("Active circle is: ", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
  };

  stopHandler = () => {
    clearTimeout(this.timer);

    this.setState({ showGameOver: true });
  };

  render() {
    const circles = this.state.circles.map((item) => {
      return (
        <Circle
          key={item.id}
          color={item.color}
          circleWasClicked={() => this.clickHandler(item.id)}
          active={this.state.current === item.id}
        />
      );
    });
    return (
      <div class="game-text">
        <h1>My Circle Game</h1>
        <div className="score">
          <p> Your Current Score is :{this.state.score}</p>
        </div>
        <div className="circle-container"> {circles} </div>
        <div className="buttons">
          <button onClick={this.startHandler}>Start Game</button>
          <button onClick={this.stopHandler}>End Game</button>
          {this.state.showGameOver && <GameOver score={this.state.score} />}
        </div>
      </div>
    );
  }
}

export default App;
