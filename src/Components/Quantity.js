import React from 'react';

export const Quantity = ({ send }) => {
    const selectMoney = () => {
        send('INPUT');
    };

    return (
        <div>
            <p className='title'>You're sending money to "Name"</p>
            <p className='description'>
                Introduce the amount of money you are sending.
            </p>
            <form className='form' onSubmit={e => { e.preventDefault(); selectMoney(); }}>
                <textarea />
                <button type="submit" className='button'>Continue</button>
            </form>
        </div>
    );
}; 