import React from 'react';
import './Thank.css';
import NavBar from '../navbar/NavBar';

const ThankYou = () => {
    return (
        <div>
            <NavBar />
            <div className="thank-you-container">
                <h1>Thank You!</h1>
                <p>Your order has been confirmed.</p>
                <p>We appreciate your purchase and look forward to serving you again!</p>
            </div>
        </div>
    );
};

export default ThankYou;
