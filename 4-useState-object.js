import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });
  console.log(person);

  const changeMessage = () => {
    if (person.message == "random message") {
      setPerson({ ...person, message: "Hello World" });
    } else {
      setPerson({ ...person, message: "random message" });
    }
  };
  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </div>
  );
};

export default UseStateObject;
