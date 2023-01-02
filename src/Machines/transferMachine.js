import { createMachine } from 'xstate';

const transferMachine = createMachine ({
  id: 'Send money',
  initial: "initial",
  states: {
    initial: {
      on: {
        TRANSFER: "contacts" 
      }
    },
    contacts: {
      on: {
        PICK: "quantity",
        CANCEL: "initial"
      }
    },
    quantity: {
      on: {
        INPUT: "confirm",
        CANCEL: "initial"
      }
    },
    confirm: {
      on: {
        SEND: "success",
        CANCEL: "initial"
      }
    },
    success: {
      on: {
        REPEAT: "initial"
      }
    }
  }
})

export default transferMachine;