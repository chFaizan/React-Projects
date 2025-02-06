import React from 'react'

const hitMe =(user) =>{
    console.log(`Hello  ${user}`);
}
const handleHver = () =>{
    alert("Thanks for Hover me");
}
export default function EventProps() {
  return (
    <>
    <WelcomeUser onClick={() => hitMe("Faizan")} onMouseEnter={handleHver} />
    </>
  )
}



const WelcomeUser =(props) =>{
    return(
        <>
        <button onClick={props.onClick}>Click Me</button>
        <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
        </>
    );
}