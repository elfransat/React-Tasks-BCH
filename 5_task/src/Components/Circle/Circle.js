import "./circle.css";

import React, { Component } from "react";

const Circle = (props) => {
  return (
    <div
      className={`circle ${props.color} ${props.active ? " active" : ""}`}
      onClick={props.circleWasClicked}
    ></div>
  );
};

export default Circle;
