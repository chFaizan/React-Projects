import React, { useState, useEffect } from 'react'

export default function DateTime() {
    const [dateTime, setDateTime] = useState("");
    useEffect(() => {
        const interval = setInterval(() => {
          const now = new Date();
          const formattedDate = now.toLocaleDateString();
          const formattedTime = now.toLocaleTimeString();
          setDateTime(`${formattedDate} - ${formattedTime}`);
        }, 1000);
      
        return () => clearInterval(interval);
      }, []);
      

    return  <h2 className='date-time' style={{color:"white"}} >{dateTime}</h2>
    

}
