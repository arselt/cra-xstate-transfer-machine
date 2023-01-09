import React from "react";
import { useMachine } from "@xstate/react";
import transferMachine from "../Machines/transferMachine";
import { Nav } from "../Components/Nav"
import { StepsLayout } from "./StepsLayout";
import "./BaseLayout.css"

export const BaseLayout = () => {
    const [state, send] = useMachine(transferMachine);
    
    console.log("our machine: ", state.value, state.context)

    return (
        <div className="BaseLayout">
            <Nav state={state} send={send} />
            <StepsLayout state={state} send={send} />
        </ div>
    );
}