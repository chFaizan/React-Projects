import React, { useEffect, useState } from 'react';
import "./index.css";

export default function UseEffectEx() {
    const [count,setCount] = useState(0);
    const [input,setInput] = useState("Faizan");
   

    useEffect(()=>{
        document.title = `count : ${count}`;

    },[count])

    useEffect(()=>{
        console.log(input);
    },[input]);
  return (
    

<div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>
        Count: <span> {count} </span>
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>
        Name: <span> {input} </span>
      </p>

      <input type="text" placeholder='Enter Value' value={input} onChange={(e) => setInput(e.target.value)}  />

    </div>


  )
}
