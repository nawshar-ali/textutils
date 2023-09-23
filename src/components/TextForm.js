import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <div class="mb-3">
        <h1>{props.heading}</h1>
        <textarea class="form-control" onChange={handleOnChange} id="myBox" rows="8" value={text}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
