import React, { useState } from 'react'

const UserInfo = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    let componetRerender = 0;
    
    const handleChange = (e) =>{
        let inputValue = e.target.value;
        let inputName = e.target.name;

        if(inputName ===  'name') {
            setName(inputValue);
        }
        else if(inputName ===  'email') {
            setEmail(inputValue);
        }
        else if(inputName ===  'number') {
            setNumber(inputValue);
        }
         

    }
    const handlesubmit =(e) =>{
        e.preventDefault();
        let data = {name,email,number};

        if(name === ''){
            alert("Please Enter Your Name")
        }
        else if(email === ''){
            alert("Please Enter Your Email")
        }
        else if(number === ''){
            alert("Please Enter Your Phone Number")
        }
        else{
            console.log("User Data is" , data)
        }


        
    }
    componetRerender++;

  return (
    <>
    <div className="userForm">
        <h1>Render {componetRerender} times</h1>
        <h2>User Info Detail</h2>
        <form action="#" onSubmit={handlesubmit} className='userDetailForm'>
        <div className="formGroup">
            <label htmlFor='name'>Name</label>
            <input id='name' type="text" name='name' value={name} onChange={handleChange} placeholder='Enter Your Name' />
        </div>
        <div className="formGroup">
            <label htmlFor='email'>Email</label>
            <input id='email' type="email" name='email' value={email} onChange={handleChange} placeholder='Enter Your Email' />
        </div>
        <div className="formGroup">
            <label htmlFor='number'>Phone Number</label>
            <input id='number' type="number" name='number' value={number} onChange={handleChange} placeholder='Enter Your Number' />
        </div>
        <div className="formGroup">

            <input type="submit" value='Save' />
        </div>
      

        </form>
    </div>
    </>
  )
}

export default UserInfo