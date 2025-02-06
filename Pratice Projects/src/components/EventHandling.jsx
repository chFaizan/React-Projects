import React from 'react'

const clickme = (e) =>{
    alert("Click One Time")
}
export default function EventHandling() {
  return (
    <>
    <button onClick={clickme}>Click Me</button>
    <br />
    <button onClick={(e)=> clickme(e) }>Click Me</button>
    
    </>
    
  )
}
