import { assign, createMachine } from 'xstate';

const transferMachine = createMachine ({
  id: 'Send money',
  initial: "initial",
  context: {
    selectedContact: '',
    selectedAmount: 0,
  },
  states: {
    initial: {
      on: {
        TRANSFER: {
          target: "contacts",
        }
      }
    },
    contacts: {
      on: {
        PICK: {
          target: "quantity",
          actions: assign({
            selectedContact: (context, event) => event.selectedContact
          })
        },
        CANCEL: "initial"
      }
    },
    quantity: {
      on: {
        INPUT: {
          target: "confirm",
          actions: assign({
            selectedAmount: (context, event) => event.selectedAmount
          })
        },
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
},
{
  actions: {
    printInitial: () => console.log("print initial"),
    printEntry: () => console.log("print entry"),
    printExit: () => console.log("print exit"),
  }
}
);

export default transferMachine;