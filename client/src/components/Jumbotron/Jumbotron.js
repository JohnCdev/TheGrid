import React from "react";
import './Jumbotron.css';

function Jumbotron(props) {
  return (
    <div
      style={{ height: 250, clear: "both", textAlign: "center" }}
      className="jumbotron"
    >
      {props.children}
    </div>
  );
}

export default Jumbotron;
