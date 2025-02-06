import React, { memo, useCallback, useState } from "react";
import "./useindex.css"; // Add styling here

const Button = memo(({ onClick, children }) => {
  console.log("Rendering Button: " + children);
  return (
    <button
      className={children === "Increment" ? "green" : "red"}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default function UseCallBack() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    console.log("Increment Inside");
    setCount((preCount) => preCount + 1);
  },[]);

  const decrement = useCallback(() => {
    console.log("Decrement Inside");
    setCount((preCount) => preCount - 1);
  },[]);



  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <Button onClick={increment} children="Increment" />
      <Button onClick={decrement} children="Decrement" />
    </div>
  );
}
