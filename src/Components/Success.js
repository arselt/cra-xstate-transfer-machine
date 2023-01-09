import React from 'react';

export const Success = ({ send, context }) => {
    const successTransfer = () => {
        send('REPEAT');
    };

    return (
        <div>
            <p className='title'>Your Money is on the way</p>
            <div className='transfer-layout'>
                <p className='description'>
                    💲 {context.selectedAmount}
                </p>
                <p className='description'>
                    👤 {context.selectedContact}
                </p>
            </div>
            <p className='description' style={{marginTop: '50px'}}>
                Send money to another contact
            </p>
            <button className='button' onClick={successTransfer}>New Transaction</button>
        </div>
    );
}; 