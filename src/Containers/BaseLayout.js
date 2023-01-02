import React from "react";
import { useMachine } from "@xstate/react";
import transferMachine from "../Machines/transferMachine";
import { Nav } from "../Components/Nav"
import { StepsLayout } from "./StepsLayout";
import "./BaseLayout.css"

export const BaseLayout = () => {
    const [state, send]= useMachine(transferMachine);

    console.log("our machine", state)
    console.log("matches true", state.matches('initial'))
    console.log("matches false", state.matches('confirm'))
    console.log('can success?', state.can('success'))
    return (
        <div className="BaseLayout">
            <Nav state={state} send={send}/>
            <StepsLayout send={send}/>
        </ div>
    );
}