import React from 'react';
import './Welcome.css';

export const Welcome = ({ send }) => {
    const startBooking = () => {
        send('TRANSFER');
    };

    return (
        <div className='Welcome'>
            <p className='Welcome-title title'>Send Money to Anyone!</p>
            <p className='Welcome-description description'>
                Type in the contact you want to send money to, the amount and Transfer!
            </p>
            <button onClick={startBooking} className='Welcome-cancel button'>Start Now</button>
        </div>
    );
}; 