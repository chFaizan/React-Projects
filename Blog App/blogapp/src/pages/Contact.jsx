import React from 'react';
import Img from "../assets/contact.png";
import '../App.css';

const Contact = () => {
  return (
    <>
      <div className="contact-hero">
        <h2 className="contact-title">Contact Us</h2>
      </div>

      <section className="contact-container">
        <div className="contact-grid">
          <div className="contact-image-wrapper">
            <img src={Img} alt="Contact Us" className="contact-image" />
          </div>
          <div className="contact-form-wrapper">
            <h2 className="form-title">Get In Touch</h2>
            <form action="" method="POST" className="contact-form">
              <div className="form-group">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" name="subject" className="form-input" required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea name="message" rows="4" className="form-textarea" required></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
