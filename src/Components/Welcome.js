import React from 'react';

export const Welcome = ({ send }) => {
    const startTransfer = () => {
        send('TRANSFER');
    };

    return (
        <div>
            <p className='title'>Send Money to Anyone!</p>
            <p className='description'>
                Type in the contact you want to send money to, the amount and Transfer!
            </p>
            <button onClick={startTransfer} className='Welcome-button button'>Start Now</button>
        </div>
    );
}; 