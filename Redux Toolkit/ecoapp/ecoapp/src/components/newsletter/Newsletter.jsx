import React from 'react'
import { IoMdSend } from 'react-icons/io'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <>
    <div className="newsletter-container">
        <div className="newsletter-title">
            NewsLetter
        </div>
        <div className="newsletter-desc">
            what fresh and new : Update You Do not want to miss
        </div>
        <div className="input-container">
            <input className="newsletter-input" placeholder='Enter Your Email' />
            <button className='newsletter-button'>
            <IoMdSend className='icon' />
            </button>
        </div>
    </div>
    </>
  )
}

export default Newsletter