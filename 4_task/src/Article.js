import "./App.css";

import React, { Component } from "react";

class Article extends Component {
  state = {
    likes: 0,
  };

  linkToBc = () => {};
  GiveAVote = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };
  render() {
    return (
      <div class="article">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="Laptop"
          />
        </div>
        <div className="text">
          <h1>Full Stack Web Developer program</h1>
          <p>
            Full Stack Web Developer program is designed for adults who want to
            work as software developers. Studying in the program is very
            practical in comparison to academic studying. The studies focus 100
            % on getting the core skills needed as software developer.
          </p>
          <p>{this.state.likes} people like this article</p>
        </div>
        <div className="buttons">
          <a
            href="https://en.bc.fi/qualifications/full-stack-web-developer-program/"
            target="_blank"
            rel="noreferrer"
          >
            <button class="article-button">Read More</button>
          </a>
          <button class="article-button" onClick={this.GiveAVote}>
            Give A Vote
          </button>
        </div>
      </div>
    );
  }
}

export default Article;
