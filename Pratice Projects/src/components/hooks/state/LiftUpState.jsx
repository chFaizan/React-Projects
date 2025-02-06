import React, { useState } from 'react'

export default function LiftUpState() {
  const [inputValue, setInputValue] = useState("");

    return (
    <>
    <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
    <DisplayComponent inputValue={inputValue} />
    </>
  )
}



 function InputComponent({inputValue, setInputValue}) {
  return (
    <>
    <input type="text" value={inputValue} placeholder="Enter Your Name" onChange={(e) => setInputValue(e.target.value)} />

    </>
  );
}



 function DisplayComponent({inputValue}) {
    return <p>The Current Value is : {inputValue}</p>
    
  
}
