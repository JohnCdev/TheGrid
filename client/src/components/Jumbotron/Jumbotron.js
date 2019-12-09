import React from "react";

function Jumbotron(props) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {props.children}
    </div>
  );
}

export default Jumbotron;
