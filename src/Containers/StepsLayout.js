import React from "react";
import { Welcome } from '../Components/Welcome';
import './StepsLayout.css'

export const StepsLayout = ({ state, send }) => {
    const renderContent = () => {
        return <Welcome send={send}/>
    };

    return (
        <div className='StepsLayout'>
            {renderContent()}
        </div>
    );
}