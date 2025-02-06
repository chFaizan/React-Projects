import React, {useMemo, memo, useState } from "react";
import "./index.css";
import UseMemo from "./UseMemo";
export default function ReactMemo() {
  
    const bioData = useMemo(() => {
      return {
        name: "Faizan",
        age: 29,
      };
    }, []);
    
    const [count, setCount] = useState(0);
  
    return (
      <>
        <div className="main">
          <h1>{count}</h1>
          <button onClick={() => setCount((pre) => pre + 1)}>Increment</button>
        </div>
        <UseMemo bioData={bioData} />
      </>
    );
  }