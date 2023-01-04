import React from 'react';

export const Confirm = ({ send }) => {
    const confirmTransfer = () => {
        send('SEND');
    };

    return (
        <div>
            <p className='title'>Please confirm the Transaction</p>
            <div className='transfer-layout'>
                <p className='description'>
                    $"Amount"
                </p>
                <p className='description'>
                    "Contact"
                </p>
            </div>
            <button className='button' onClick={confirmTransfer}>Send Money</button>
        </div>
    );
}; 