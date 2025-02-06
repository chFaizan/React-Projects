import React, { useState } from 'react'

export default function ContactForm() {
    // const [username, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    const [contact, setContact] = useState({
        username:"",
        email:"",
        message:""
    });

    const Handles = (e) =>{
        e.preventDefault();
        const {name,value} = e.target;

        setContact((pre) =>(
            {
                ...pre, [name] : value,
            }
        ));
    };

    const submitData = (e) =>{
        e.preventDefault();
        

        const { username,email,message } = contact;
        const data = { username, email, message };
        console.log(data);

    }
  return (
    <div className="container">
    <div className="card">
      <h1>Contact Form</h1>
      <form onSubmit={submitData}> 
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          required
          autoComplete="off"
          value={contact.username}
          //onChange={(e) => setUsername(e.target.value)}
          onChange={Handles}

        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          value={contact.email}
          //onChange={(e) => setEmail(e.target.value)}
          onChange={Handles}
        />

        <label htmlFor="message">Message</label>
        <textarea
          type="password"
          name="message"
          required
          autoComplete="off"
          rows="6"
          value={contact.message}
          onChange={Handles}
          //onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Send Message</button>
      </form>
    </div>
  </div>
  )
}
