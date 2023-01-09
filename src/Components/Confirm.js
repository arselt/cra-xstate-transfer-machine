import React from 'react';

export const Confirm = ({ send, context }) => {
    const confirmTransfer = () => {
        send('SEND');
    };

    return (
        <div>
            <p className='title'>Please confirm the Transaction</p>
            <div className='transfer-layout'>
                <p className='description'>
                    💲 {context.selectedAmount}
                </p>
                <p className='description'>
                    👤 {context.selectedContact}
                </p>
            </div>
            <button className='button' onClick={confirmTransfer} style={{marginTop: '60px'}}>Send Money</button>
        </div>
    );
}; 