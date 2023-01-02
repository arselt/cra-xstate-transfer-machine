import React from "react";
import { useMachine } from "@xstate/react";
import transferMachine from "../Machines/transferMachine";

export const BaseLayout = () => {
    const [state, send]= useMachine(transferMachine);

    console.log("our machine", state)
    return (
        <div> Hello xstate </div>
    );
}