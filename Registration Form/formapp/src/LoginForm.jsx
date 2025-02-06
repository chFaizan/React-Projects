import React, { useState } from 'react'

export default function LoginForm() {
    const [user, setUser] = useState({
        username: "",
        password: "",
    });

    const onInputHandle = (ev) =>{
        const {name,value} = ev.target;

        setUser((dta)=>({...dta, [name]:value}));
    };

    const submitform =(e) =>{
        e.preventDefault();
        const { username, password } = user;
        const data = { username, password };
        console.log(data);

    };
  return (
    <div>
        <div className="container">
            <div className="card">
                <h1>Login Form</h1>
                <form onSubmit={submitform}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name='username' required autoComplete='off' value={user.username} onChange={onInputHandle}/>
                    
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' required autoComplete='off' value={user.password} onChange={onInputHandle} />

                    <button type='submit' className='submit'>Login</button>
                    
                </form>
            </div>
        </div>
    </div>
  );
};
