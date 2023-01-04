import React from 'react';

export const Contacts = ({ send }) => {
    const selectContact = () => {
        send('PICK');
    };

    return (
        <div>
            <p className='title'>Select a Contact</p>
            <p className='description'>
                Please type in the transaction recipient
            </p>
            <form className='form' onSubmit={e => { e.preventDefault(); selectContact(); }}>
                <textarea />
                <button type="submit" className='button'>Select Contact</button>
            </form>
        </div>
    );
};
