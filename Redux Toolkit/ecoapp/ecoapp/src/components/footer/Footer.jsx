import React from 'react'
import { CiTwitter } from 'react-icons/ci'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaPinterest } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'
import { footerLinks } from '../../data'
import payment from '../../assets/payment.png';


import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className="footer-container">
        <div className="footer-left">
            <h1 className="footer-logo">
                Shopping App
            </h1>
            <p className="footer-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, explicabo pariatur aliquid consequatur saepe quam, laboriosam quo autem, eius blanditiis laudantium labore necessitatibus totam distinctio odit odio quibusdam facere dolorum.
            </p>

        <div className="social-container">
            <div className="social-icon" style={{backgroundColor: '#3b5999'}}>
                <FaFacebook className='icon' />
            </div>
            <div className="social-icon" style={{backgroundColor: '#e44059'}}>
                <FaInstagram className='icon' />
            </div>
            <div className="social-icon" style={{backgroundColor: '#55acee'}}>
                <CiTwitter className='icon' />
            </div>
            <div className="social-icon" style={{backgroundColor: "#e60023"}}>
                <FaPinterest className='icon' />
            </div>
        </div>
        </div>
        <div className="footer-center">
            <h3>Userful Links</h3>
            <ul className='footer-list'>
                {
                    footerLinks.map((link)=>{
                        return(
                            <li key={link.id} className='footer-list-item'>{link.title}</li>
                        )
                    })
                }

            </ul>
        </div>
        <div className="footer-right">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-item">
                <FaLocationDot style={{marginRight:"10px"}} /> 123 Street City
            </div>
            <div className="contact-item">
                <FaPhoneAlt style={{marginRight:"10px"}} /> 09234744647
            </div>
            <div className="contact-item">
                <IoMdMail style={{marginRight:"10px"}} /> email@gmail.com
            </div>
            <img className='payment' src={payment} alt="" />
        </div>
    </div>
    </>
  )
}

export default Footer