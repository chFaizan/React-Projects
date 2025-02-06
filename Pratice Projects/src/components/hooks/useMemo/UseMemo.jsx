import React, { useMemo, memo, useState } from "react";
import "./index.css";

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Calculating sum...");
    let total = 0;
    for (let i = 0; i <= 1000000000; i++) {
      total += 1; 
    }
    return total;
  };

  const total = useMemo(() => sum(), [])

  return <p>Sum: {total}</p>;
};

 const UseMemo = memo(({ bioData }) => { 
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <ExpensiveComponent />
      <button onClick={() => setCount(count + 1)} className="button">
        Re-render Parent
      </button>
      <p>
        Parent re-renders: {count} and My Name is {bioData.name}
      </p>
    </div>
  );
});

export default  UseMemo;