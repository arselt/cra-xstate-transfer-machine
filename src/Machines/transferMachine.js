import { assign, createMachine } from 'xstate';

const transferMachine = createMachine ({
  id: 'Send money',
  initial: "initial",
  context: {
    selectedContact: '',
    moneyAmount: '',
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