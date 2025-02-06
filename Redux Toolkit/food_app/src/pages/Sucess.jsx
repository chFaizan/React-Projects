import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'

const Sucess = () => {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, [])
  return (
    <>
    <div className="sucess-container">
      {
        loading ? <PropagateLoader color='#36d7b7' /> : (
          <div>
          <h2>Order Sucessful!</h2>
          <p>Your Order Sucessfully placed</p>
          </div>          
        )
      }


    </div>
    </>
  )
}

export default Sucess