import React, { useReducer } from 'react'
import "./index.css";
export default function UseReducer() {
    const reducer = (state, action) =>{
        if(action.type === "INCREMENT"){
            return state + 1
        }
        if(action.type === "DECREMENT"){
            return state - 1
        }
        if(action.type === "RESET"){
            return (state = 0)
        }
        
    };
    const [count, dispatch] = useReducer(reducer,0); 
  return (
    <div className='main'>
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT"})}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatch({ type: "RESET"})}>Reset</button>
    </div>
  )
}
