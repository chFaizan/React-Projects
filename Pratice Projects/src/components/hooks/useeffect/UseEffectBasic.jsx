import React, { useEffect, useState } from 'react'
import "./index.css";

export default function UseEffectBasic() {
    const [date,setDate] = useState(0);

    useEffect(()=>{
        setInterval(() => {
            const dte = new Date();
            setDate(dte.toLocaleTimeString());            
        }, 1000);

    },[])
  return (
    <div className='container effect-container'>
        Date: {date}

    </div>
  )
}
