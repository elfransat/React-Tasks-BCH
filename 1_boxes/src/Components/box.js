import React from "react";
import "./Box.css";

const Box = (props) => {
  return (
    <div className="box">
      <h1> {props.name} </h1>
      <h1> Title: {props.title} </h1>
      <h1> Age: {props.age}</h1>
    </div>
  );
};

export default Box;
