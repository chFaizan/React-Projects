import React, { useRef } from 'react'
import  './index.css';

export default function UseRef() {
    const username = useRef(null);
    const password = useRef(null);
    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(username.current.value, password.current.value);
    }
  return (
    <>
    <form onSubmit={handleFormSubmit} >
    <input type="text" id='username' placeholder='Enter Your Name'  ref={username}   />
    <br />
    <input type="password" id='password' placeholder='Enter Password' ref={password}   />
<br />
    <button>Submit</button>

    </form>
    
    </>
  )
}
