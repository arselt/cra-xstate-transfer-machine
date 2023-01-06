import React, { useState } from 'react';

export const Contacts = ({ send }) => {
    const [contact, setContact] = useState("");

    const selectContact = (event) => {
        event.preventDefault();
        send('PICK', {selectedContact: contact});
    };

    const handleSelectChange = (event) => {
        setContact(event.target.value);
    }

    return (
        <div>
            <p className='title'>Select a Contact</p>
            <p className='description'>
                Please type in the transaction recipient
            </p>
            <form className='form' onSubmit={selectContact}>
                <textarea value={contact} onChange={handleSelectChange}/>
                <button type="submit" className='button' disabled={contact === ""}>Select Contact</button>
            </form>
        </div>
    );
};
