import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("hello world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [title, setTitle] = useState(["Hello World!"]);

  const handleClick = () => {
    if (title === "Hello World!") {
      setTitle("Goodbye World!");
    } else {
      setTitle("Hello World!");
    }
  };

  return (
    <div>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
};

export default UseStateBasics;
