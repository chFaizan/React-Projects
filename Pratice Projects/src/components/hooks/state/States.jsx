import React, { useState } from 'react'


export default function States() {

  const [count, setCount] = useState(0);
const handleBtn =() =>{
  setCount(()=> count+1);  
  
}
  return (
    <div style={{marginLeft:"30px", marginTop:"20px" }}>
    <h1>{count}</h1>
    <button style={{backgroundColor:"green", margin:"10px", padding:"10px", }} onClick={handleBtn}>Increment</button>
    </div>
  )
}
