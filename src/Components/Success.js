import React from 'react';

export const Success = ({ send }) => {
    const successTransfer = () => {
        send('REPEAT');
    };

    return (
        <div>
            <p className='title'>Your Money is on the way</p>
            <div className='transfer-layout'>
                <p className='description'>
                    $"Amount"
                </p>
                <p className='description'>
                    "Contact"
                </p>
            </div>
            <p className='description'>
                Send money to another contact
            </p>
            <button className='button' onClick={successTransfer}>New Transaction</button>
        </div>
    );
}; 