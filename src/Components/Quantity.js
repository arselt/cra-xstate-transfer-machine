import React, { useState } from 'react';

export const Quantity = ({ send, context }) => {
    const [amount, setAmout] = useState(0);

    const selectMoney = (event) => {
        event.preventDefault();
        send('INPUT', {selectedAmount: amount});
    };

    const handleSelectChange = (event) => {
        setAmout(event.target.value);
    }

    return (
        <div>
            <p className='title'>You're sending money to "{(context.selectedContact)}"</p>
            <p className='description'>
                Introduce the amount of money you are sending.
            </p>
            <form className='form' onSubmit={selectMoney}>
                <textarea value={amount} onChange={handleSelectChange}/>
                <button 
                    type="submit" 
                    className='button' 
                    disabled={amount <= 0 || isNaN(amount) || amount >= 999999999999}
                >
                    Continue
                </button>
            </form>
        </div>
    );
}; 