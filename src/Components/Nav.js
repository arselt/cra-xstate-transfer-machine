import React from "react";
import  './Nav.css';

export const Nav = ({ state, send }) => {
    const goToWelcome = () => {
        send('CANCEL')
    }

    return (
        <nav className='Nav'>
            <h1 className='Nav-logo'>🏦 Bankselt</h1>
            {!['initial', 'success'].some(state.matches) &&
                <button onClick={goToWelcome} className='Nav-cancel button-secondary'>Cancel</button>
            }
        </nav>
    );
}; 