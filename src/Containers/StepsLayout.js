import React from "react";
import { Welcome } from '../Components/Welcome';
import { Contacts } from '../Components/Contacts';
import { Quantity } from "../Components/Quantity";
import { Confirm } from "../Components/Confirm";
import { Success } from "../Components/Success";
import './StepsLayout.css'



export const StepsLayout = ({ state, send }) => {
    const renderContent = () => {
        if (state.matches('initial')) return <Welcome send={send}/>;
        if (state.matches('contacts')) return <Contacts send={send}/>;
        if (state.matches('quantity')) return <Quantity send={send} context={state.context}/>;
        if (state.matches('confirm')) return <Confirm send={send} context={state.context}/>;
        if (state.matches('success')) return <Success send={send} context={state.context}/>;
        return null;
    };

    return (
        <div className='StepsLayout'>
            {renderContent()}
        </div>
    );
}