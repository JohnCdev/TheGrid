import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function InputPassword(props) { 
  return (
    <div className="form-group">
      <input className="form-control" type="password" {...props} />
    </div>
  )
}

export function InputEmail(props) {
  return (
    <div className="form-group">
    <input className="form-control" {...props} />
  </div>
  )
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }}>
      {props.children}
    </button>
  );
}

//Need to add selector form element that can accept options as props
// export function Selection() {

// }
