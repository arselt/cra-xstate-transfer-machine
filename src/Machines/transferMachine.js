import { assign, createMachine } from 'xstate';

const transferMachine = createMachine ({
  id: 'Send money',
  initial: "initial",
  context: {
    selectedContact: '',
    selectedAmount: null,
  },
  states: {
    initial: {
      entry: assign((context, event) => {
        context.selectedContact = '';
        context.selectedAmount = null;
      }),
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
      after: {
        25000: { target: "initial" }
      },
      on: {
        REPEAT: "initial"
      }
    }
  }
}
);

export default transferMachine;