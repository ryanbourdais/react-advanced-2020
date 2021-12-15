import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const Reset = () => {
    setValue(0);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };

  const complexDecrease = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue - 1;
      });
    }, 2000);
  };

  const complexReset = () => {
    setTimeout(() => {
      setValue((prevValue) => {
        return prevValue * 0;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={Reset}>
          Reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexDecrease}>
          Decrease Delay
        </button>
        <button className="btn" onClick={complexReset}>
          Reset Delay
        </button>
        <button className="btn" onClick={complexIncrease}>
          Increase Delay
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
